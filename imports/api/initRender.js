import React from 'react';
import ReactDOM from 'react-dom';
import ExplodeCube from '/imports/ui/components/explodeCube';

export function initRender(face, coords, isMax, showMenu, renderEl){
	newCube = 
		ReactDOM.render(<ExplodeCube coords={coords} curFace={face} isMax={isMax} showMenu={showMenu}/>, renderEl);
	
	return newCube
}

//ReactDOM.render(<ExplodeCube curFace={curFace}/>, document.getElementById('app'));