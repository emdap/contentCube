import {handleCode} from './secretCode' //it's for an easter egg not literally to handle all code don't worry

export function handleRotate(e, cube, renderEl) {
	if(cube.state.ready){
		if(e.which == 66){
			handleCode('b');
		} else if(e.which == 65){
			handleCode('a');
		} else if(e.which == 13){
			handleCode('enter', cube, renderEl);
		} else if(e.which == 27){
			
			return(['keyRender', 27]);

		} else if (e.which == 77){
			
			return(['keyRender', 77]);

		} else if (e.which <= 40 && e.which >= 37){

			[x, y, z] = cube.state.coords;
			var deltaX = 0;
			var deltaY = 0;
			var deltaZ = 0;

			switch(e.which){
				case 38: //up
					deltaX = -90;
					x -= 90;
					handleCode('up');
					break;

				case 40: //down
					deltaX = 90
					x += 90;
					handleCode('down');
					break;
//3d rotations make the y and z axes change places, below is a hacky attempt at handling this rather than sitting down and figuring out an equation
				case 37: //left
					handleCode('left');
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
					handleCode('right');
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
		          				else {y -= Math.cos(x*(Math.PI/180))*90;}
		       				} 
		       				else if ((z) % 180 == 0){y += Math.cos(z*(Math.PI/180))*90;}
		        			else {y -= Math.sin(z*(Math.PI/180))*90;}
						} else {y -= 90}	
		    		}
				} 


			return([[x,y,z], [deltaX, deltaY, deltaZ]]);

	}

	return(null);

	}

}