import { handleCode } from "./secretCode"; //it's for an easter egg not literally to handle all code don't worry

export function handleRotate(e, coords, secretCode) {
  let newCode = [];
  if (e) {
    if (e.which == 66) {
      newCode = handleCode("b", secretCode);
      return { coords, delta: [0, 0, 0], newCode };
    } else if (e.which == 65) {
      newCode = handleCode("a", secretCode);
      return { coords, delta: [0, 0, 0], newCode };
    } else if (e.which == 27) {
      return { keyRender: 27 };
    } else if (e.which == 77) {
      return { keyRender: 77 };
    } else if (e.which <= 40 && e.which >= 37) {
      let [x, y, z] = coords;
      let deltaX = 0;
      let deltaY = 0;
      let deltaZ = 0;

      switch (e.which) {
        case 38: //up
          deltaX = -90;
          x -= 90;
          newCode = handleCode("up", secretCode);
          break;

        case 40: //down
          deltaX = 90;
          x += 90;
          newCode = handleCode("down", secretCode);
          break;

        //3d rotations make the y and z axes change places, below is a hacky attempt at handling this rather than sitting down and figuring out an equation
        case 37: //left
          newCode = handleCode("left", secretCode);
          deltaY = 90;
          if (Math.abs(x) % 180 == 90) {
            if (Math.abs(x) % 360 == 270) {
              if (x > 0) {
                z += 90;
              } else {
                z -= 90;
              }
            } else if (x > 0) {
              z -= 90;
            } else {
              z += 90;
            }
            if (Math.abs(y) % 180 == 90) {
              if (x == y) {
                x += 90;
              }
              if (x >= 0) {
                y += 90;
              } else {
                y -= 90;
              }
            }
          } else {
            if (x != 0) {
              if (Math.abs(x) % 360 == 180) {
                if (z % 180 == 0 || x % 180 == 0) {
                  y -= 90;
                } else {
                  y += 90;
                }
              } else if (z % 180 == 0) {
                y += 90;
              } else {
                y -= 90;
              }
            } else {
              y += 90;
            }
          }
          break;

        case 39: //right
          newCode = handleCode("right", secretCode);
          deltaY = -90;
          if (Math.abs(x) % 180 == 90) {
            if (Math.abs(x) % 360 == 270) {
              if (x > 0) {
                z -= 90;
              } else {
                z += 90;
              }
            } else if (x > 0) {
              z += 90;
            } else {
              z -= 90;
            }
            if (Math.abs(y) % 180 == 90) {
              if (x == y) {
                x -= 90;
              }
              if (x >= 0) {
                y -= 90;
              } else {
                y += 90;
              }
            }
          } else {
            if (x != 0) {
              if (Math.abs(x) % 360 == 180) {
                if (z % 180 == 0 || x % 180 == 0) {
                  y += 90;
                } else {
                  y -= Math.cos(x * (Math.PI / 180)) * 90;
                }
              } else if (z % 180 == 0) {
                y += Math.cos(z * (Math.PI / 180)) * 90;
              } else {
                y -= Math.sin(z * (Math.PI / 180)) * 90;
              }
            } else {
              y -= 90;
            }
          }
      }

      return {
        coords: [x, y, z],
        delta: [deltaX, deltaY, deltaZ],
        newCode,
      };
    }
  }

  return null;
}
