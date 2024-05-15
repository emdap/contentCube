import { useEffect, useState } from "react";
import ExplodeCube from "./components/explodeCube";
import { getFacing } from "./util/getFacing";
import { handleRotate } from "./util/handleRotate";
import {
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
} from "./util/swipes";

const App = () => {
  const [cubeFace, setCubeFace] = useState("bottom");
  const [secretCode, setSecretCode] = useState([]);

  const [cubeProps, setCubeProps] = useState({
    coords: [90, 0, 0],
    delta: [0, 0, 0],
    keyRender: 0,
  });

  const [showCustomMode, setShowCustomMode] = useState(false);

  useEffect(() => {
    const checkSecretCode = (e) => {
      e.key === "Enter" && secretCode.length === 10 && setShowCustomMode(true);
    };

    document.addEventListener("keydown", checkSecretCode, true);

    return () => document.removeEventListener("keydown", checkSecretCode, true);
  }, [secretCode]);

  useEffect(() => {
    const moveEvent = async (e) => {
      if (e.key === "Enter" && secretCode.length === 10) {
        setShowCustomMode(true);
        return;
      }

      const event = e.type === "touchend" ? handleTouchEnd(e) : e;
      const touchData = handleRotate(event, cubeProps.coords, secretCode);

      if (touchData) {
        const { newCode, ...props } = touchData;
        setCubeProps(props);
        setCubeFace("spinning");

        setSecretCode(newCode);

        getFacing().then((face) => {
          setCubeFace(face);
        });
      }
    };

    document.addEventListener("keydown", moveEvent);
    document.addEventListener("touchend", moveEvent);

    return () => {
      document.removeEventListener("keydown", moveEvent);
      document.removeEventListener("touchend", moveEvent);
    };
  }, [cubeProps.coords, secretCode]);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <ExplodeCube
      {...cubeProps}
      customMode={showCustomMode}
      curFace={cubeFace}
      exitCustom={() => setShowCustomMode(false)}
      isMax
      showMenu
    />
  );
};

export default App;
