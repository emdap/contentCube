export function handleCode(dir, secretCode) {
  let add = false;
  switch (dir) {
    case "up":
      if (secretCode.length == 0 || secretCode[secretCode.length - 1] == "up") {
        add = true;
      }
      break;
    case "down":
      if (
        secretCode.length == 2 ||
        (secretCode.length == 3 && secretCode[secretCode.length - 1] == "down")
      ) {
        add = true;
      }
      break;
    case "left": //left
      if (
        secretCode.length == 4 ||
        (secretCode.length == 6 && secretCode[secretCode.length - 1] == "right")
      ) {
        add = true;
      }
      break;
    case "right": //right
      if (
        secretCode.length == 5 ||
        (secretCode.length == 7 && secretCode[secretCode.length - 1] == "left")
      ) {
        add = true;
      }
      break;
    case "b":
      if (secretCode.length == 8) {
        add = true;
      }
      break;
    case "a":
      if (secretCode.length == 9) {
        add = true;
      }
      break;
  }

  if (add) {
    return secretCode.concat(dir);
  } else {
    return [];
  }
}
