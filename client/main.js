import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(() => {
var y = 0;
var x = 0;
var z = 0;

$('#reset').click(function() {
	y = 0;
	x = 0;
	z = 0;
	$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
	dispCoords();		
})

$(document).keydown(function(e) {
	switch(e.which){
		case 38: //up
			x -= 90;
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;

		case 40: //down
			x += 90;
			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;

		case 37: //left
			if (Math.abs(x) % 180 == 90){
				if  ( x > 0 ){z -= 90;} else {z += 90;}
				if (Math.abs(y) % 180 == 90){
					if (x == y){x += 90;}
					if (x >= 0){y += 90;} else {y -= 90;}
				}
			} else {	
				if ((x) % 180 == (z) % 180 || x==0 ){y += 90;} else {y -= 90;}
			}

			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			
			break;

		case 39: //right
			if (Math.abs(x) % 180 == 90){
				if ( x > 0 ){z += 90;} else {z -= 90;}
				if (Math.abs(y) % 180 == 90){
					if (x == y){x -= 90;}
					if (x >= 0){y -= 90;} else {y += 90;}
				}
			} else {	
				if ((x) % 180 == (z) % 180 || x==0 ){y -= 90;} else {y += 90;}
			}

			$('#card').css({'transform' : 'translateZ( -100px ) rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)' });
			break;
	}
	dispCoords();
})

function dispCoords(){
	$('#dispCoords').html('x: ' + x + ', y: ' + y + ', z: ' + z);
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
