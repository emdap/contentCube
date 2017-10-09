import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuContent from './menuContent';
import ExplodeContent from './explodeContent';
import MenuButton from './menuButton';
import MinMaxButton from './minMaxButton';
import Cube from './cube';

export default class ExplodeCube extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			curFace: this.props.curFace, //content window
			explodeClass: this.props.curFace, //classes for content window
			contentFace: this.props.curFace, //which content page to show, delayed update during menu navigation

			coords: this.props.coords, //rotation of cube
			delta: this.props.delta, //direction of movement

			isMax: false, //size of content window

			showMenu: true, //show any menu
			showInnerMenu: false, //show inner menu
			showTopMenu: true, //show top menu
			menuHighlight: this.props.curFace
		};

		this.rotateCalls = 0;

		this.handleMenuShow = this.handleMenuShow.bind(this);
		this.handleMenuRotate = this.handleMenuRotate.bind(this);
		this.handleMinMax = this.handleMinMax.bind(this);
			
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
		
		// console.log(this.state.contentFace);
		// if(this.state.isMax){
		// 	console.log('cont');
		// 	explodeContent = <ExplodeContent curFace={this.state.contentFace}/>;
		// } else {
		// 	console.log('thumb');
		// 	explodeContent = <ExplodeThumbnail curFace={this.state.contentFace}/>;
		// }

		return(
			<div>
			<Cube rotation={rotation}/>
			<MenuContent menuID='topMenu' menuClass={topMenuClass} handleRotate={this.handleMenuRotate} highlight={this.state.menuHighlight}/>

			<div key="main_div" id="explode" className={explodeClasses} style={deltaRotation}>

				<MinMaxButton minMaxClass={minMaxClass} handleClick={this.handleMinMax}/>
			
				<MenuButton menuClass={menuClass} handleClick={this.handleMenuShow}/>
			
				<MenuContent menuID='innerMenu' menuClass={innerMenuClass} handleRotate={this.handleMenuRotate} highlight={this.state.menuHighlight}/>
			
				<ExplodeContent curFace={this.state.contentFace} isMax={this.state.isMax}/>
			
			</div>
			</div>

			);
	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.curFace=='spinning'){ //default face, means only rotation info received
			this.setState((prevState, props) => {
				return {
					menuHighlight: 'none',
					coords: nextProps.coords,
					explodeClass: this.state.curFace + ' hide smooth',
					delta: nextProps.delta
				}
			});
		}

		if(nextProps.coords[0]==-1){ //default coords, mean has stopped rotating and is updating face
			this.setState((prevState, props) => {
				return {
					menuHighlight: nextProps.curFace,
					curFace: nextProps.curFace,
					contentFace: nextProps.curFace,
					explodeClass: nextProps.curFace,
					delta: [0,0,0]
				}
			});
		}
	}

	handleMenuRotate(coords, face){ // rotation via menu button to [coords] which is the [face] of the cube
		const [x, y, z] = coords; //coords we're rotating to
		const [xCur, yCur, zCur] = this.state.coords; //coords at this moment
		const [xFinal, yFinal, zFinal] = [Math.sin((x - xCur)*(Math.PI/180)) * Math.abs(x - xCur) , Math.sin((y - yCur)*(Math.PI/180)) * Math.abs(y - yCur), Math.sin((z - zCur)*(Math.PI/180)) * Math.abs(z - zCur)];
		this.setState((prevState, props) => {
			return {
				coords: coords,
				explodeClass: this.state.explodeClass + ' hide smooth',
				curFace: face,
				menuHighlight: face,
				delta: [xFinal, yFinal, zFinal] //flip content opposite way of cube
			}
		});
		this.rotateCalls += 1;
		setTimeout(()=>{ //wait 1 second for rotation to finish before updating curface and re-rendering
			this.rotateCalls -= 1;
			if(this.rotateCalls==0){ //only update curface when done spinning/getting rotate calls
				this.setState((prevState, props) => {
					return {
						explodeClass: face,
						contentFace: face,
						delta: [0, 0, 0]
					}
				});
			}
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


}

ExplodeCube.defaultProps = {
	delta: [0, 0, 0],
	coords: [-1, -1, -1],
	curFace: 'spinning'
}




