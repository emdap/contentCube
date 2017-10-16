var facingCalls = 0;

export function getFacing(){
	//[x, y, z] = myCube.state.coords; //current rotation
	//$('#dispCoords').html('x: ' + x % 360 + ', y: ' + y % 360 + ', z: ' + z % 360);

	facingCalls += 1; //keep track of how many updates requested

	setTimeout(function() {
		facingCalls -= 1; //call being answered, subtract from count
		if (facingCalls == 0){ //only find current face of cube if this is the last call made
			if(document.querySelector("figure.front").getBoundingClientRect().height > 199 && document.querySelector("figure.front").getBoundingClientRect().width > 199 ){
				curFace = 'front';
			} else if (document.querySelector("figure.back").getBoundingClientRect().height > 199 && document.querySelector("figure.back").getBoundingClientRect().width > 199 ){
				curFace = 'back';
			} else if (document.querySelector("figure.bottom").getBoundingClientRect().height > 199 && document.querySelector("figure.bottom").getBoundingClientRect().width > 199 ){
				curFace = 'bottom';
			} else if (document.querySelector("figure.top").getBoundingClientRect().height > 199 && document.querySelector("figure.top").getBoundingClientRect().width > 199 ){
				curFace = 'top';
			} else if (document.querySelector("figure.left").getBoundingClientRect().height > 199 && document.querySelector("figure.left").getBoundingClientRect().width > 199 ){
				curFace = 'left';
			} else if (document.querySelector("figure.right").getBoundingClientRect().height > 199 && document.querySelector("figure.right").getBoundingClientRect().width > 199 ){
				curFace = 'right';
			}
			return curFace;
		}
	}, 1000);

}