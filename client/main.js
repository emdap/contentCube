//wait until cube has stopped spinning before generating
//use thumbnail if in min mode instead of content (do on this side when injecting to innerHTML, not to react element)

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import ExplodeCube from './../imports/explodeCube';

import './main.html';

Meteor.startup(() => {

var myCube = ReactDOM.render(<ExplodeCube coords={[0,0,0]} curFace={'front'}/>, document.getElementById('app'));

var facingCalls = 0;

function getFacing(){
	[x, y, z] = myCube.state.coords; //current rotation
	$('#dispCoords').html('x: ' + x % 360 + ', y: ' + y % 360 + ', z: ' + z % 360);

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

			if (curFace){
				myCube = ReactDOM.render(<ExplodeCube curFace={curFace}/>, document.getElementById('app'));
				faceContent = curFace + 'Face';
			}
		}
	}, 1000);

}

document.onkeydown = function(e) {

	if(e.which <= 40 && e.which >= 37){
		[x, y, z] = myCube.state.coords;
		var deltaX = 0;
		var deltaY = 0;
		var deltaZ = 0;

		switch(e.which){
			case 38: //up
				deltaX = -90;
				x -= 90;
				break;

			case 40: //down
				deltaX = 90
				x += 90;
				break;

			case 37: //left
				deltaY = 90;
				if (Math.abs(x) % 180 == 90){
					if ( Math.abs(x) % 360 == 270) {
	          			if ( x > 0 ){z += 90;} else {z -= 90;}
	        		} else if ( x > 0 ){z -= 90;} else {z += 90;}
					if (Math.abs(y) % 180 == 90){
						if (x == y){x += 90;}
						if (x >= 0){y += 90;} else {y -= 90;}
					}
				} else {	
	      			if(x!=0){
	      				if ( Math.abs(x) % 360 == 180){
	        				if ((z) % 180 == 0 || x % 180 == 0){y -=  90;} 
	          				else {y += 90;}
	        			} 
	       				else if ((z) % 180 == 0){y += 90;} 
	        			else {y -= 90;}
					} else {y += 90}	
	      		}
				break;

			case 39: //right
				deltaY = -90;
				if (Math.abs(x) % 180 == 90){
	      			if ( Math.abs(x) % 360 == 270) {
	          			if ( x > 0 ){z -= 90;} else {z += 90;}      
	        		} else if ( x > 0 ){z += 90;} else {z -= 90;}
					if (Math.abs(y) % 180 == 90){
						if (x == y){x -= 90;}
						if (x >= 0){y -= 90;} else {y += 90;}
					}
				} else {	
	      			if(x!=0){
	      				if ( Math.abs(x) % 360 == 180){
	        				if ((z) % 180 == 0 || x % 180 == 0){y += 90;} 
	          				else {y -= 90;}
	       				} 
	       				else if ((z) % 180 == 0){y -= 90;}
	        			else {y += 90;}
					} else {y -= 90}	
	    		}
	    		if (x % 360 == 0){ x = 0; }
				if (y % 360 == 0){ y = 0; }
				if (z % 360 == 0){ z = 0; }
			}

		myCube = ReactDOM.render(<ExplodeCube coords={[x, y, z]} delta={[deltaX, deltaY, deltaZ]}/>, document.getElementById('app'));
		getFacing();

	}

}



});