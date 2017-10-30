import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CubeMover extends React.Component{
	constructor(props){
		super(props);
		this.handleMove = this.handleMove.bind(this);
		this.handleInc = this.handleInc.bind(this);
		this.state = {
			coords: [0,0,0]
		}
	}

	render(){
		return(
			<div id="cubeMover">
			
			<input id="xRot" type="text" placeholder="X"/>
			<input id="yRot" type="text" placeholder="Y"/>
			<input id="zRot" type="text" placeholder="Z"/>
			
			<button id="xyzInc" onClick={() => {this.handleInc()}}>
			Increment X, Y, Z by input
			</button>
			<button onClick={() => {this.handleMove()}}>
			Rotate cube to X, Y, Z input
			</button>

			<button onClick={this.props.reset}>
			Go Back
			</button>
			
			<div id="rotInfo">
			Current Rotation: 
			<p>X = {this.state.coords[0]}, Y = {this.state.coords[1]}, Z = {this.state.coords[2]}
			</p>
			</div>
			</div>
			);
	}

	handleInc(){

		const [x, y, z] = [this.state.coords[0] + (document.getElementById("xRot").value * 1), this.state.coords[1] + (document.getElementById("yRot").value * 1), this.state.coords[2] + (document.getElementById("zRot").value * 1)];
		console.log([x,y,z]);

		this.setState(()=>{return{
			coords: [x, y, z]
		}});

		this.props.handleRotate([x, y, z]);

	}

	handleMove(){
		
		const [x, y, z] = [document.getElementById("xRot").value * 1, document.getElementById("yRot").value * 1, document.getElementById("zRot").value * 1];
		console.log([x,y,z]);

		this.setState(()=>{return{
			coords: [x, y, z]
		}});

		this.props.handleRotate([x, y, z]);
	}
}