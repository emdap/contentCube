//wait until cube has stopped spinning before generating

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import ExplodeBox from './../imports/explodeBox';

import './main.html';

Meteor.startup(() => {

//$('.explode').hide();

var y = 0;
var x = 0;
var z = 0;
var lastTime = new Date();


var prevElm;


getFacing();

function recede(elm){
	elm = elm.slice(1);

	document.getElementById('explode').className =  elm + ' smooth hide';
}



function getFacing(){
	$('#dispCoords').html('x: ' + x % 360 + ', y: ' + y % 360 + ', z: ' + z % 360);

	setTimeout(function() {
	if(document.querySelector("figure.front").getBoundingClientRect().height > 199 && document.querySelector("figure.front").getBoundingClientRect().width > 199 ){
		curFace = '.front';
	} else if (document.querySelector("figure.back").getBoundingClientRect().height > 199 && document.querySelector("figure.back").getBoundingClientRect().width > 199 ){
		curFace = '.back';
	} else if (document.querySelector("figure.bottom").getBoundingClientRect().height > 199 && document.querySelector("figure.bottom").getBoundingClientRect().width > 199 ){
		curFace = '.bottom';
	} else if (document.querySelector("figure.top").getBoundingClientRect().height > 199 && document.querySelector("figure.top").getBoundingClientRect().width > 199 ){
		curFace = '.top';
	} else if (document.querySelector("figure.left").getBoundingClientRect().height > 199 && document.querySelector("figure.left").getBoundingClientRect().width > 199 ){
		curFace = '.left';
	} else if (document.querySelector("figure.right").getBoundingClientRect().height > 199 && document.querySelector("figure.right").getBoundingClientRect().width > 199 ){
		curFace = '.right';
	}
	

	if(document.getElementById('explode')){
		if(document.getElementById('explode').getAttribute('state') == 'min'){
			prevElm2 = curFace;
			state = 'min';
		} else{
			state = 'max';
			prevElm2 = curFace;
		}
	} else {
		state = 'max';	
	}

	prevElm = curFace;

	$('#curFace2').html(curFace);
	if (curFace){
		ReactDOM.render(<ExplodeBox explodeClass={curFace} state={state}/>, document.getElementById('content'));
		faceContent = curFace.slice(1) + 'Face';
		document.getElementById('innerContent').innerHTML = document.getElementById(faceContent).innerHTML
		explode(curFace);
	}
}, 1000);

}


function explode(elm){
	document.getElementById('explode').style.transform = 'rotateX( 0deg ) rotateY( 0deg) rotateZ( 0deg) translateZ( 0 )';
	curElm = '#explode' + elm;

	elm = elm.slice(1);
	if(document.getElementById('explode').getAttribute('state') == 'min'){
		document.getElementById('explode').className =  elm + ' min';	
	} else {
		document.getElementById('explode').className =  elm + ' max';
	}
}

$(document).keydown(function(e) {
	var deltaX = 0;
	var deltaY = 0;
	var deltaZ = 0;

	//$('.explode').hide();
	if(e.which <= 40 && e.which >= 37){
		recede(prevElm);
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

		getFacing();
	}
	// deltaX = x - origX;
	// deltaY = y - origY;
	// deltaZ = z - origZ;
	if ( document.getElementById('explode') && Math.floor((new Date() - lastTime)/6000) > 0 ) {
    	document.getElementById('explode').className = prevElm.slice(1) + ' smooth min';
		lastTime =  new Date();
	} else {
    // get from url
    	lastTime =  new Date();
	}
	document.getElementById('explode').style.transform = 'rotateX(' + deltaX + 'deg ) rotateY(' + deltaY + 'deg) rotateZ(' + deltaZ + 'deg) translateZ( 100px )';

	document.getElementById('card').style.transform = 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' ;
});



});