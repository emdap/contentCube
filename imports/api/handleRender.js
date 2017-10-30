import React from 'react';
import ReactDOM from 'react-dom';
import ExplodeCube from '/imports/ui/components/explodeCube';
import {getFacing} from './getFacing';
import {handleRotate} from './handleRotate';

export function handleRender(e, cube, renderEl){
	const results = handleRotate(e, cube, renderEl); //get rotation angles for cube and content window
	
	if(results){
		if (results[0] == 'keyRender'){
		
			cube = ReactDOM.render(<ExplodeCube keyRender={results[1]}/>, renderEl);
		
		} else {
					
			cube = ReactDOM.render(<ExplodeCube coords={results[0]} delta={results[1]}/>, renderEl); //re-render cube with new coords

			curFace = getFacing(); //get new face after cube stops spinning (1sec delay on getFacing return)

			setTimeout(function() { //wait 1sec for curFace to get value
				if(curFace){
					cube = ReactDOM.render(<ExplodeCube curFace={curFace}/>, renderEl); //re-render cube with new face
					}
			}, 1000);
		}
	}
}
