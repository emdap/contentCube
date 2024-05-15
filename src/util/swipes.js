var xDown = null;
var yDown = null;
var startTime = null;
var dir = null;

export function handleTouchStart(e) {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;

  startTime = new Date();
}

export function handleTouchEnd() {
  var endTime = new Date();
  var diffTime = endTime.getTime() - startTime.getTime();
  var useDir = dir;
  dir = null;

  if (diffTime < 200 && useDir) {
    return useDir;
  }
}

export function handleTouchMove(e) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/

    if (xDiff > 0) {
      /* left swipe */
      dir = { which: 39 };
      //create object so that handleRotate can access this same way as keyboard event
    } else {
      dir = { which: 37 };
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      dir = { which: 40 };
      /* up swipe */
    } else {
      dir = { which: 38 };
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}
