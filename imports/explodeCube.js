import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuContent from './menuContent';

export default class ExplodeCube extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			curFace: this.props.curFace, //content window
			explodeClass: this.props.curFace, //classes for content window

			coords: this.props.coords, //rotation of cube
			delta: this.props.delta, //direction of movement

			isMax: false, //size of content window

			showMenu: false, //show any menu
			showInnerMenu: false, //show inner menu
			showTopMenu: false, //show top menu
		};

		this.handleMenuShow = this.handleMenuShow.bind(this);
		this.handleRotate = this.handleRotate.bind(this);
		this.handleMinMax = this.handleMinMax.bind(this);
		
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
		}

		if(nextProps.coords[0]==-1){ //default coords, mean has stopped rotating and is updating face
			this.setState((prevState, props) => {
				return {
					curFace: nextProps.curFace,
					explodeClass: nextProps.curFace,
					delta: [0,0,0]
				}
			});
		}
	}

	handleRotate(coords, face){ // rotation via menu button to [coords] which is the [face] of the cube
		console.log(face);
		const [x, y, z] = coords; //coords we're rotating to
		const [xCur, yCur, zCur] = this.state.coords; //coords at this moment
		this.setState((prevState, props) => {
			return {
				coords: coords,
				explodeClass: this.state.explodeClass + ' hide smooth',
				curFace: face,
				delta: [x - xCur, y - yCur, z - zCur] //flip content opposite way of cube
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

	handleMinMax(){
		if(this.state.isMax){ //downsize, hide inner menu no matter what
			this.setState((prevState, props) => {
				return {
					showInnerMenu: false,
					showTopMenu: prevState.showMenu
				}
			});
		
		} else { //up sizing
			this.setState((prevState, props) => {
				return {
					showInnerMenu: prevState.showMenu,
					showTopMenu: false,
				}
			});
		}

		this.setState((prevState, props) => {
			return {
				isMax: !prevState.isMax
			}
		});
	}

	handleMenuShow(){
		//showmenu states will be opposite of what it's turning to,
		//ismax will be correct
		if (this.state.isMax) { //max window	
			this.setState((prevState, props) => {
				return {
					showInnerMenu: !prevState.showMenu,
					showMenu: !prevState.showMenu
				}
			});	 
		} else { //downsized and want to hide menu 
			//set top menu to opposite of current menu state
			this.setState((prevState, props) => {
				return {
					showMenu: !prevState.showMenu,
					showTopMenu: !prevState.showMenu
				}
			});
		}
	}

	render() {
		
		//rotations
		const [x, y, z] = this.state.coords; //rotation for cube
		const [dx, dy, dz] = this.state.delta; //rotation for content (when hiding, 0 if showing)

		//rotations in css
		const rotation = {transform: `translateZ(-100px) rotateX( ${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`} 
		const deltaRotation = {transform: `rotateX( ${dx}deg) rotateY(${dy}deg) rotateZ(${dz}deg) translateZ(100px)`}

		//show or hide each menu based on state
		innerMenuClass = (this.state.showInnerMenu ? 'open' : 'closed'); //inner menu
		topMenuClass = (this.state.showTopMenu ? 'open' : 'closed'); //top menu
		menuClass = (this.state.showMenu ? 'open' : 'closed'); //menu icon
		
		//size of content window
		minMaxClass = (this.state.isMax ? 'open' : 'closed'); //minmax icon
		explodeClasses = this.state.explodeClass + ' ' + (this.state.isMax ? 'max' : 'min'); //resize content window by toggling class
		

		return(
			<div>
			<Cube rotation={rotation}/>
			<MenuContent menuID='topMenu' menuClass={topMenuClass} handleRotate={this.handleRotate} highlight={this.state.curFace}/>

			<div key="main_div" id="explode" className={explodeClasses} style={deltaRotation}>

				<MinMaxButton minMaxClass={minMaxClass} handleClick={this.handleMinMax}/>
			
				<MenuButton menuClass={menuClass} handleClick={this.handleMenuShow}/>
			
				<MenuContent menuID='innerMenu' menuClass={innerMenuClass} handleRotate={this.handleRotate} highlight={this.state.explodeClass}/>
			
				<div id="explodeContent"></div>
			
			</div>
			</div>

			);
	}

}

ExplodeCube.defaultProps = {
	delta: [0, 0, 0],
	coords: [-1, -1, -1],
	curFace: 'spinning'
}


class MinMaxButton extends React.Component{

	render(){
		return(
			<button id='minmaxbutt' className={this.props.minMaxClass} onClick={this.props.handleClick}>&#10005;</button>
			);
	}

}

class MenuButton extends React.Component{

	render(){
		return(
			<button id='menubutton' className={this.props.menuClass} onClick={this.props.handleClick}>|||</button>
			);
	}

}

class Cube extends React.Component {
	render(){
		return(
			<section className="container">
				  <div id="card" style={this.props.rotation}>
				    <figure className="front"></figure>
				    <figure className="back"></figure>   
				    <figure className="left"></figure>
				    <figure className="right"></figure>
				    <figure className="top"></figure>
				    <figure className="bottom"></figure>
				  </div>
			</section>
		);
	}
}

