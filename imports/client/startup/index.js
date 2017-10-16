import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import {getFacing} from '/imports/api/getFacing'
//import {getSwipe} from '/imports/api/swipes'
import ExplodeCube from '/imports/ui/components/explodeCube';

Meteor.startup(() => {
//initial side to show
var firstFace = 'right';

var myCube = ReactDOM.render(<ExplodeCube coords={[0, -90, 0]} curFace={firstFace} isMax={true}/>, document.getElementById('app'));

document.onkeydown = function(e) {


	if(e.which == 27){
		myCube = ReactDOM.render(<ExplodeCube keyRender={27}/>, document.getElementById('app'));
	} else if (e.which == 77){
		myCube = ReactDOM.render(<ExplodeCube keyRender={77}/>, document.getElementById('app'));
	} else if (e.which <= 40 && e.which >= 37){
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

		curFace = getFacing();

		setTimeout(function() {
			if(curFace){
				myCube = ReactDOM.render(<ExplodeCube curFace={curFace}/>, document.getElementById('app'));
				}
			}, 1000);
		

	}

}

});