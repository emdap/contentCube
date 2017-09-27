import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(() => {

//$('.explode').hide();

var y = 0;
var x = 0;
var z = 0;

var prevElm;

$('#reset').click(function() {
	y = 0;
	x = 0;
	z = 0;
	$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
	dispCoords();		
})

$('.explode').hide();

$(document).keydown(function(e) {
	//$('.explode').hide();
	if(e.which <= 40 && e.which >= 37){
		recede(prevElm);
	
	switch(e.which){
		case 38: //up
			//if (Math.abs(x) == 270){ x = 0; }
			//else{
				x -= 90;
				//}
			break;

		case 40: //down
			//if (Math.abs(x) == 270){ x = 0; }
			//else{
				x += 90;
				//}
			break;

		case 37: //left
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

   //    		if (x % 360 == 0){ x = 0; }
			// if (y % 360 == 0){ y = 0; }
			// if (z % 360 == 0){ z = 0; }

			
			break;

		case 39: //right
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

		dispCoords();

	}
	$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
});

function explode(elm){
	$('.explode').hide();
	$(elm).css({height : '200px', width : '200px', margin : 'calc(20rem - 100px) calc(25rem - 100px)'});
	$(elm).show();
	$(elm).animate({height : '40rem', width : '50rem', margin : '0', opacity : '1'}, 700);
	//$(elm).toggle('scale');
}

function recede(elm){
	$(elm).animate({height : '0px', width : '0px', margin : '20rem 25rem', opacity : '.5'}, 500);
	setTimeout(function() {
		$(elm).hide();
	}, 500);
}

function dispCoords(){
	$('#dispCoords').html('x: ' + x + ', y: ' + y + ', z: ' + z);

	cur360 = 'x360: ' + x % 360 +', y360: ' + y % 360 +', z360: ' + z % 360;

	setTimeout(function() {
	if(document.querySelector("figure.front").getBoundingClientRect().height > 199 && document.querySelector("figure.front").getBoundingClientRect().width > 199 ){
		curFace = 'front';
		explode($('#front'));
	} else if (document.querySelector("figure.back").getBoundingClientRect().height > 199 && document.querySelector("figure.back").getBoundingClientRect().width > 199 ){
		curFace = 'back';
		explode($('#back'));
	} else if (document.querySelector("figure.bottom").getBoundingClientRect().height > 199 && document.querySelector("figure.bottom").getBoundingClientRect().width > 199 ){
		curFace = 'bottom';
		explode($('#bottom'));
	} else if (document.querySelector("figure.top").getBoundingClientRect().height > 199 && document.querySelector("figure.top").getBoundingClientRect().width > 199 ){
		curFace = 'top';
		explode($('#top'));
	} else if (document.querySelector("figure.left").getBoundingClientRect().height > 199 && document.querySelector("figure.left").getBoundingClientRect().width > 199 ){
		curFace = 'left';
		explode($('#left'));
	} else if (document.querySelector("figure.right").getBoundingClientRect().height > 199 && document.querySelector("figure.right").getBoundingClientRect().width > 199 ){
		curFace = 'right';
		explode($('#right'));
	}

	prevElm = '#' + curFace;

	$('#curFace2').html(curFace);
}, 1000);

	$('#curFace').html(cur360);




}

});

/*

	if ((Math.sign(x) == Math.sign(z)) || x==0 || z==0){y -= 90;} else {y += 90;}
			

$(document).keydown(function(e) {
	switch(e.which){
		case 38: //up
			$('#card').toggleClass('showTrans', true);
			x -= 90;
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;

		case 40: //down
			$('#card').toggleClass('showTrans', true);
			x += 90;
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;

		case 37: //left
			if (Math.abs(x) % 180 == 90){
				if ((x > 0 && !(y <= 0)) || (x < 0 && y <= 0 )){z += 90;} else {z -= 90;}
				if (Math.abs(y) % 180 == 90){
					if (x == y){x += 90;}
					if (x >= 0){y += 90;} else {y -= 90;};
				}
			} else {	
				if ((x > 0 && !(z <= 0)) || (x < 0 && z < 0 )){y -= 90;} else {y += 90;};
			}
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			
			break;

		case 39: //right
			if (Math.abs(x) % 180 == 90){
				if ((x > 0 && !(y <= 0)) || (x < 0 && y <= 0 )){z -= 90;} else {z += 90;}
				if (Math.abs(y) % 180 == 90){
					if (x == y){x -= 90;}
					if (x >= 0){y -= 90;} else {y += 90;};	
				}
			} else {	
				if ((x > 0 && !(z <= 0)) || (x < 0 && z < 0 )){y += 90;} else {y -= 90;};
			}
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;
	}
})
*/


/*
	xmod = x % 360;
	ymod = y % 360;
	zmod = z % 360;

	if (
		(xmod == 90 && ymod == 0 && zmod == 0) ||
		(xmod == 90 && ymod == -90 && zmod == 0) ||
		(xmod == 270 && ymod == -180 && zmod == -180) ||
		(xmod == -90 && ymod == 0 && zmod == -180) ||
		(xmod == 270 && ymod == 0 && zmod == 180) ||
		(xmod == 180 && ymod == -90 && zmod == 90) ||
		(xmod == -270 && ymod == 180 && zmod == 0) ||
		(xmod == -270 && ymod == 0 && zmod == 0) ||
		(xmod == -270 && ymod == -90 && zmod == 0) ||
		(xmod == 0 && ymod == 270 && zmod == -90) ||
		(xmod == -90 && ymod == -180 && zmod == -180) ||
		(xmod == 270 && ymod == 0 && zmod == -180) ||
		(xmod == 90 && ymod == -180 && zmod == 0) ||
		(xmod == -180 && ymod == 90 && zmod == -90) ||
		(xmod == 180 && ymod == 270 && zmod == 90) ||
		(xmod == -180 && ymod == 270 && zmod == -270) ||
		(xmod == 0 && ymod == 270 && zmod == 270) ||
		(xmod == 90 && ymod == 90 && zmod == 0) ||
		(xmod == 180 && ymod == 90 && zmod == -90) ||
		(xmod == -270 && ymod == 90 && zmod == 0) ||
		(xmod == 90 && ymod == 180 && zmod == 0) ||
		(xmod == 90 && ymod == 270 && zmod == 0) ||
		(xmod == -270 && ymod == 270 && zmod == 0) ||
		(xmod == -270 && ymod == -180 && zmod == 0) ||
		(xmod == 90 && ymod == -270 && zmod == 0) ||
		(xmod == -270 && ymod == -270 && zmod == 0) ||
		(xmod == -90 && ymod == 0 && zmod == 180) ||
		(xmod == -90 && ymod == 180 && zmod == -180) ||
		(xmod == -90 && ymod == 180 && zmod == 180) ||
		(xmod == 0 && ymod == -90 && zmod == 270) ||
		(xmod == 0 && ymod == -270 && zmod == 90) ||
		(xmod == 0 && ymod == 90 && zmod == 90) ||
		(xmod == -90 && ymod == -180 && zmod == 180) ||
		(xmod == 270 && ymod == -180 && zmod == 180)
		){curFace = 'bottom';}
	else if (
		(xmod == 180 && ymod == 0 && zmod == 0) ||
		(xmod == 0 && ymod == -180 && zmod == 0) ||
		(xmod == 0 && ymod == -180 && zmod == -180) ||
		(xmod == -180 && ymod == 0 && zmod == 90) ||
		(xmod == -180 && ymod == 0 && zmod == 0) ||
		(xmod == 0 && ymod == 180 && zmod == 0) ||
		(xmod == -180 && ymod == 0 && zmod == -90) ||
		(xmod == 180 && ymod == 0 && zmod == 90) || 
		(xmod == 0 && ymod == 180 && zmod == -180) ||
		(xmod == 180 && ymod == 0 && zmod == -90) ||
		(xmod == 0 && ymod == 180 && zmod == -90) ||
		(xmod == -180 && ymod == 0 && zmod == -180) ||
		(xmod == -180 && ymod == 0 && zmod == -270) ||
		(xmod == 0 && ymod == 180 && zmod == 270) ||
		(xmod == -180 && ymod == 0 && zmod == 270) ||
		(xmod == 180 && ymod == 0 && zmod == 270) ||
		(xmod == 0 && ymod == -180 && zmod == 270) ||
		(xmod == 0 && ymod == -180 && zmod == 90) ||
		(xmod == 0 && ymod == 180 && zmod == 90) ||
		(xmod == 180 && ymod == 0 && zmod == 180) ||
		(xmod == -180 && ymod == 0 && zmod == 180) ||
		(xmod == 0 && ymod == -180 && zmod == 180)
		){curFace = 'back';}	
	else if (
		(xmod == 270 && ymod == 0 && zmod == 0) ||
		(xmod == 270 && ymod == -90 && zmod == 0) ||
		(xmod == 0 && ymod == -270 && zmod == -90) ||
		(xmod == -90 && ymod == 0 && zmod == 0) ||
		(xmod == -90 && ymod == 180 && zmod == 0) ||
		(xmod == 180 && ymod == -270 && zmod == 90) ||
		(xmod == -270 && ymod == 180 && zmod == -180) ||
		(xmod == -270 && ymod == 0 && zmod == -180) ||
		(xmod == -90 && ymod == -90 && zmod == 0) ||
		(xmod == 90 && ymod == 0 && zmod == -180) ||
		(xmod == -90 && ymod == 270 && zmod == 0) ||
		(xmod == 0 && ymod == 90 && zmod == -90) ||
		(xmod == -90 && ymod == -180 && zmod == 0) ||
		(xmod == -90 && ymod == 90 && zmod == 0) ||
		(xmod == 90 && ymod == 0 && zmod == 180) ||
		(xmod == 90 && ymod == -180 && zmod == 180) ||
		(xmod == -180 && ymod == -270 && zmod == -90) ||
		(xmod == 180 && ymod == 90 && zmod == 90) ||
		(xmod == -180 && ymod == -90 && zmod == -90) ||
		(xmod == -270 && ymod == 0 && zmod == 180) ||
		(xmod == -180 && ymod == 90 && zmod == -270) ||
		(xmod == -270 && ymod == 180 && zmod == 180) ||
		(xmod == 0 && ymod == 90 && zmod == 270) ||
		(xmod == 180 && ymod == 270 && zmod == -90) ||
		(xmod == 270 && ymod == 90 && zmod == 0) ||
		(xmod == 270 && ymod == 180 && zmod == 0) ||
		(xmod == 270 && ymod == 270 && zmod == 0) ||
		(xmod == 270 && ymod == -270 && zmod == 0) ||
		(xmod == -90 && ymod == -270 && zmod == 0) ||
		(xmod == 0 && ymod == -270 && zmod == 270) ||
		(xmod == 0 && ymod == -90 && zmod == 90) ||
		(xmod == 0 && ymod == 270 && zmod == 90) ||
		(xmod == -270 && ymod == -180 && zmod == 180)
		){curFace = 'top';}
	else if (
		(xmod == 0 && ymod == 0 && zmod == 0) ||
		(xmod == 0 && ymod == 0 && zmod == -90) ||
		(xmod == 180 && ymod == -180 && zmod == 0) ||
		(xmod == 0 && ymod == 0 && zmod == 90) ||
		(xmod == -180 && ymod == 180 && zmod == 90) || 
		(xmod == 0 && ymod == 0 && zmod == -180) ||
		(xmod == 180 && ymod == 180 && zmod == 0) ||
		(xmod == 180 && ymod == -180 && zmod == 90) ||
		(xmod == -180 && ymod == 180 && zmod == -90) ||
		(xmod == 180 && ymod == 180 && zmod == 90) ||
		(xmod == -180 && ymod == 180 && zmod == -270) ||
		(xmod == 0 && ymod == 0 && zmod == 270) ||
		(xmod == 180 && ymod == 180 && zmod == -90) ||
		(xmod == -180 && ymod == 180 && zmod == 0) ||
		(xmod == -180 && ymod == -180 && zmod == 0) ||
		(xmod == 0 && ymod == 0 && zmod == 180) ||
		(xmod == -180 && ymod == -180 && zmod == 180) ||
		(xmod == 180 && ymod == -180 && zmod == 180)
		){curFace = 'front';}
	else if (
		(xmod == 0 && ymod == -90 && zmod == 0) ||
		(xmod == 270 && ymod == -180 && zmod == 0) ||
		(xmod == 0 && ymod == -270 && zmod == -180) ||
		(xmod == 90 && ymod == 0 && zmod == 90) ||
		(xmod == 270 && ymod == 0 && zmod == -90) ||
		(xmod == -90 && ymod == 0 && zmod == -90) ||
		(xmod == 270 && ymod == 0 && zmod == 270) ||
		(xmod == 0 && ymod == 270 && zmod == 0) ||
		(xmod == -90 && ymod == 180 && zmod == -90) ||
		(xmod == -270 && ymod == 180 && zmod == 90) ||
		(xmod == -270 && ymod == 180 && zmod == -270) ||
		(xmod == -180 && ymod == 90 && zmod == 0) ||
		(xmod == -270 && ymod == 0 && zmod == -270) ||
		(xmod == 0 && ymod == 90 && zmod == -180) ||
		(xmod == 90 && ymod == 0 && zmod == -270) ||
		(xmod == -90 && ymod == -180 && zmod == -90) ||
		(xmod == 180 && ymod == 90 && zmod == 0) ||
		(xmod == 90 && ymod == -180 && zmod == 90) ||
		(xmod == -270 && ymod == 0 && zmod == 90) ||
		(xmod == -180 && ymod == -270 && zmod == 0) ||
		(xmod == 180 && ymod == -270 && zmod == 0) ||
		(xmod == -90 && ymod == 0 && zmod == 270) ||
		(xmod == -90 && ymod == 180 && zmod == 270)
		){curFace = 'right';}
	else if (
		(xmod == 0 && ymod == -270 && zmod == 0) ||
		(xmod == 90 && ymod == -270 && zmod == -90) ||
		(xmod == 180 && ymod == -90 && zmod == 0) ||
		(xmod == -90 && ymod == 0 && zmod == 90) ||
		(xmod == 0 && ymod == 90 && zmod == 0) || 
		(xmod == 270 && ymod == 0 && zmod == 90) || 
		(xmod == -90 && ymod == 180 && zmod == 90) ||
		(xmod == -270 && ymod == 180 && zmod == -90) ||
		(xmod == -270 && ymod == 0 && zmod == -90) ||
		(xmod == 0 && ymod == -90 && zmod == -180) ||
		(xmod == -180 && ymod == -90 && zmod == 0) ||
		(xmod == 90 && ymod == 0 && zmod == -90) ||
		(xmod == -90 && ymod == -180 && zmod == -270) ||
		(xmod == -90 && ymod == 0 && zmod == -270) ||
		(xmod == 90 && ymod == 0 && zmod == 270) ||
		(xmod == 180 && ymod == 270 && zmod == 0) ||
		(xmod == 270 && ymod == 0 && zmod == -270) ||
		(xmod == 90 && ymod == -180 && zmod == 270) ||
		(xmod == -270 && ymod == 0 && zmod == 270) ||
		(xmod == -270 && ymod == 180 && zmod == 270) ||
		(xmod == -180 && ymod == 270 && zmod == 0) ||
		(xmod == -90 && ymod == 180 && zmod == -270)
		){curFace = 'left';}

		*/
