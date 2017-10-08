import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ExplodeBox from './explodeBox';
import MenuContent from './menuContent';

export default class Cube extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			curFace: this.props.curFace,
			showMenu: true,
			coords: this.props.coords,
			explodeClass: this.props.curFace,
			delta: this.props.delta
		};

		this.handleShow = this.handleShow.bind(this);
		this.handleRotate = this.handleRotate.bind(this);
	}

	componentWillReceiveProps(nextProps) {

		
		if(nextProps.curFace=='spinning'){ //default face, means only rotation info received
			this.setState((prevState, props) => {
				return {
					coords: nextProps.coords,
					explodeClass: this.state.curFace + ' hide smooth',
					delta: nextProps.delta
				}
			});
			//this.showDelta = true;
		}

		if(nextProps.coords[0]==-1){ //default coords, mean has stopped rotating and is updating face
			this.setState((prevState, props) => {
				return {
					curFace: nextProps.curFace,
					explodeClass: nextProps.curFace,
					delta: [0,0,0]
				}
			});
			//this.showDelta = false;
			this.explodeStyle = {transform: `translateZ(-100px) rotateX( 0deg) rotateY(0deg) rotateZ(0deg)`}

		}
	}
	render() {
		const [x, y, z] = this.state.coords;
		const rotation = {transform: `translateZ(-100px) rotateX( ${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`}
		menuClasses = (this.state.showMenu ? 'show' : 'hide')
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
			<span id='menucontentouter' className={menuClasses}>
			<MenuContent handleRotate={this.handleRotate} highlight={this.state.curFace}/>
			</span>
			  <ExplodeBox explodeClass={this.state.explodeClass} angle={this.state.delta} handleMenu={this.handleShow}/>
			  </div>

			);
	}

	handleShow(showMenu){
		this.setState((prevState, props) => {
			return {
				showMenu: showMenu
			}
		});
	}

	handleRotate(coords, face){
		console.log(face);
		const [x, y, z] = coords;
		const [xCur, yCur, zCur] = this.state.coords;
		this.setState((prevState, props) => {
			return {
				coords: coords,
				explodeClass: this.state.explodeClass + ' hide smooth',
				curFace: face,
				delta: [x - xCur, y - yCur, z - zCur]
			}
		});

		setTimeout(()=>{ //wait 1 second for rotation to finish before updating curface and re-rendering
			this.setState((prevState, props) => {
				return {
					explodeClass: face,
					delta: [0, 0, 0]
				}
			});
		}, 1000);
	}

}

Cube.defaultProps = {
	delta: [0, 0, 0],
	coords: [-1, -1, -1],
	curFace: 'spinning'
}