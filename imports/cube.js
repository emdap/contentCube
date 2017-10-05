import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ExplodeBox from './explodeBox';

export default class Cube extends React.Component{
	constructor(props){
		super(props);
		this.curFace = this.props.curFace;
		this.coords = this.props.coords;
	}

	componentWillReceiveProps(nextProps) {

		
		if(nextProps.curFace=='spinning'){
			this.curFace = this.props.curFace;
			this.coords = nextProps.coords;
			this.explodeClass = this.curFace + ' hide smooth';
			this.showDelta = true;
		}

		if(nextProps.coords[0]==-1){
			this.coords = this.props.coords;
			this.showDelta = false;
			this.curFace = nextProps.curFace;
			this.explodeClass = this.curFace;
			this.explodeStyle = {transform: `translateZ(-100px) rotateX( 0deg) rotateY(0deg) rotateZ(0deg)`}

		}
	}
	render() {
		const [x, y, z] = this.coords;
		const rotation = {transform: `translateZ(-100px) rotateX( ${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`}
		return(
			<div>
			<section className="container">
			  <div id="card" style={rotation}>
			    <figure className="front"></figure>
			    <figure className="back"></figure>   
			    <figure className="left"></figure>
			    <figure className="right"></figure>
			    <figure className="top"></figure>
			    <figure className="bottom"></figure>
			  </div>
			</section>

			  <ExplodeBox explodeClass={this.explodeClass} angle={this.props.delta}/>
			  </div>

			);
	}

}

Cube.defaultProps = {
	delta: [0, 0, 0],
	coords: [-1, -1, -1],
	curFace: 'spinning'
}