var facingCalls = 0;

export function getFacing() {
  facingCalls += 1; //keep track of how many updates requested

  const checkFace = (face) => {
    const boundingBox = document
      .querySelector(`figure.${face}`)
      .getBoundingClientRect();

    return boundingBox?.height > 199 && boundingBox?.width > 199;
  };

  return new Promise((resolve) =>
    setTimeout(() => {
      facingCalls -= 1; //call being answered, subtract from count
      if (facingCalls == 0) {
        ["front", "back", "left", "right", "bottom", "top"].some((face) => {
          if (checkFace(face)) {
            resolve(face);
            return true;
          }
        });
      }
    }, 1000)
  );
}
