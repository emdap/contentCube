import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuContent from './menuContent';
import ExplodeContent from './explodeContent';
import MenuButton from './menuButton';
import MinMaxButton from './minMaxButton';
import Cube from './cube';
import SecretMover from './secretMover';
import EmailWindow from './emailWindow';

export default class ExplodeCube extends React.Component{
	//renders rotation coords and current face separately
	//js used to determine current face after rotation, 1 sec delay between renders
	constructor(props){
		super(props);

		this.state = {
			curFace: this.props.curFace, //content window
			explodeClass: this.props.curFace, //classes for content window
			contentFace: this.props.curFace, //which content page to show, delayed update during menu navigation

			coords: this.props.coords, //rotation of cube
			delta: this.props.delta, //direction of movement

			menuHighlight: this.props.curFace,
			showMenu: this.props.showMenu,
			showInnerMenu: (this.props.showMenu && this.props.isMax),
			showTopMenu: (this.props.showMenu && !this.props.isMax),

			isMax: this.props.isMax,
			preSpinMax: 'ready', //so that isMax can be toggled during cube spin but retain value from pre-spin on next render that updates curFace
		
			customMode: this.props.customMode, //for secret code function
			customCoords: [0, 0, 0],

			custStyle: {}, //toggle random color
			custStyleSet: false,

			ready: true
		};

		this.rotateCalls = 0;

		this.handleMenuShow = this.handleMenuShow.bind(this);
		this.handleMenuRotate = this.handleMenuRotate.bind(this);
		this.handleMinMax = this.handleMinMax.bind(this);
		this.simpleRotate = this.simpleRotate.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.mount = true;
		this.triggerCustom = this.triggerCustom.bind(this);
		this.showEmail = this.showEmail.bind(this);
		this.toggleColor = this.toggleColor.bind(this);
	}

	render() {

		if(this.state.customMode){
			return this.specialRender(); 
		}

		//normal mode

		//rotations
		const [x, y, z] = this.state.coords; //rotation for cube
		const [dx, dy, dz] = this.state.delta; //rotation for content (when hiding, 0 if showing)

		//rotations in css
		const rotation = {transform: `translateZ(-100px) rotateX( ${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`} 
		const deltaRotation = {transform: `rotateX( ${dx}deg) rotateY(${dy}deg) rotateZ(${dz}deg) translateZ(100px)`}

		const custColor = (this.state.curFace == "back" ? this.state.custStyle : {}); //use custom color for backpage if that's the current face

		console.log(custColor);
		console.log(this.state.custStyle);
		//show or hide each menu based on state
		innerMenuClass = (this.state.showInnerMenu ? 'open' : 'closed'); //inner menu
		topMenuClass = (this.state.showTopMenu ? 'open' : 'closed'); //top menu
		menuClass = (this.state.showMenu ? 'open' : 'closed'); //menu icon
		
		//size of content window
		minMaxClass = (this.state.isMax ? 'open' : 'closed'); //minmax icon
		explodeClasses = this.state.explodeClass + ' ' + (this.state.isMax ? 'max' : 'min'); //resize content window by toggling class
			

		return(
			<div id="appHolder">
			<Cube rotation={rotation} backColor={this.state.custStyle}/>
			<MenuContent menuID='topMenu' menuClass={topMenuClass} handleRotate={this.handleMenuRotate} highlight={this.state.menuHighlight}/>

			<div key="main_div" id="explode" className={explodeClasses} style={deltaRotation, custColor}>

				<MinMaxButton minMaxClass={minMaxClass} handleClick={this.handleMinMax}/>
			
				<MenuButton menuClass={menuClass} handleClick={this.handleMenuShow}/>
			
				<MenuContent menuID='innerMenu' menuClass={innerMenuClass} handleRotate={this.handleMenuRotate} highlight={this.state.menuHighlight}/>
			
				<ExplodeContent curFace={this.state.contentFace} isMax={this.state.isMax} handleRotate={this.handleMenuRotate} handleSecret={this.triggerCustom}
					handleEmail={this.showEmail}
					handleColor={this.toggleColor}/>
			
			</div>
			</div>

				);
	}

	showEmail(){
		this.setState(()=>{
			return{
				ready: !this.state.ready
			}
		})
	}

	toggleColor(newColor){ //toggles background to random color, for button on 'experience' page

		if(this.state.custStyleSet){//remove cust style so original class shows
			this.setState(()=>{return{
				custStyle: {},
				custStyleSet: false
			}});

		} else {
			this.setState(()=>{return{
				custStyle: {background: newColor},
				custStyleSet: true
			}});
		}
	}

	triggerCustom(){//custom rotate option

		this.setState(()=>{ //transition to 0 0 0 and hidden so that smooth transition to custom mode
			return{ 
				explodeClass: this.state.explodeClass + ' hide smooth',
				isMax: false,
				coords: [0, 0, 0],
				delta: [-1 * this.state.coords[0], -1 * this.state.coords[1], -1 * this.state.coords[2]]
			}
		});

		setTimeout(()=>{ //delay before dismounting
			this.setState(()=>{
				return{
					customMode: true
				}
			});
		}, 1000);
	}

	specialRender(){ //render when in custom mode
		const [x, y, z] = this.state.customCoords;
		const rotation = {transform: `translateZ(-100px) rotateX( ${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`} 
		return(
		<div id="appHolder">
		<Cube rotation={rotation}/>
		<SecretMover reset={this.handleReset} handleRotate={this.simpleRotate}/>
		</div>
		);
	}

	handleReset(secretMover){ //go back to normal
		//eventually switch on previous curFace and correct coords
		if(this.state.curFace == 'right'){ //accessed from projects page, return here
			resetFace = 'right';
			resetCoords = [0, -90, 0];
		} else {
		//reset to homepage maximized, showmenu
		resetFace = 'bottom';
		resetCoords = [90, 0, 0];
		}

		resetMax = true;
		resetMenu = true;

		document.getElementById("cubeMover").classList.remove('show');
		document.getElementById("cubeMover").classList.add('hide');

		setTimeout(()=>{
			this.setState(()=>{
				return{ 
					customMode: false,
					customCoords: [0,0,0],
					curFace: resetFace,
					coords: resetCoords,
					delta: [0,0,0],
					explodeClass: resetFace + ' hide',
					contentFace: resetFace,
					menuHighlight: resetFace,
					isMax: false,
					showMenu: resetMenu,
					showInnerMenu: (resetMax && resetMenu ? true : false),
					showTopMenu: (!resetMax && resetMenu ? true : false),
					preSpinMax: 'ready'
				}
			});

			setTimeout(()=>{
				this.setState(()=>{
					return{
						explodeClass: resetFace,
						isMax: true
					}
				});
			}, 100);

		}, 500);
	}

	simpleRotate(coords){ //for rotations in custom mode
		this.setState(()=>{return{
			customCoords: coords
		}});

	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.customMode == true){
			this.setState(()=>{return{
				customMode: true
			}});
		} else if(nextProps.keyRender == 27){ //keyboard event toggle size on rerender
			this.handleMinMax();
		} else if (nextProps.keyRender == 77){ //keyboard event toggle menu on rerender
			this.handleMenuShow();
		} else { // a lot is assumed using default props, but only want to do this if this wasn't a keyRender
			if(nextProps.curFace=='spinning'){ //default face, means only rotation info received
					this.setState((prevState, props) => {
						return {
							menuHighlight: 'none',
							coords: nextProps.coords,
							explodeClass: this.state.curFace + ' hide smooth',
							delta: nextProps.delta,
							isMax: false
						}
					});

					if (this.state.preSpinMax == 'ready'){
						this.setState((prevState, props) => {
							return {preSpinMax: this.state.isMax}
						});
					}
				}
			if(nextProps.coords[0]==-1){ //default coords, mean has stopped rotating and is updating face
				this.setState((prevState, props) => {
					return {
						menuHighlight: nextProps.curFace,
						curFace: nextProps.curFace,
						contentFace: nextProps.curFace,
						explodeClass: nextProps.curFace,
						delta: [0,0,0],
						isMax: this.state.preSpinMax,
						preSpinMax: 'ready'
					}
				});
			}
		}
		
	}

	handleMenuRotate(coords, face, forceRot){ // rotation via menu button to [coords] which is the [face] of the cube
	if (face != this.state.contentFace || this.rotateEv > 0 || forceRot == true){ 
		if(forceRot){ //toggle ready state on forcerot so that user can't mess up sequence with arrow keys
			this.setState(()=>{
				return{
					ready: false
				}
			});
			setTimeout(()=>{
				this.setState(()=>{
					return{
						ready: true
					}
				});
			}, 1000);
		}
	//only alter states if we're actually moving/did move
		//force rotate even if same face if force is true
		const [x, y, z] = coords; //coords we're rotating to
		const [xCur, yCur, zCur] = this.state.coords; //coords at this moment

		const [xFinal, yFinal, zFinal] = [Math.sin((x - xCur)*(Math.PI/180)) * Math.abs(x - xCur) , Math.sin((y - yCur)*(Math.PI/180)) * Math.abs(y - yCur), Math.sin((z - zCur)*(Math.PI/180)) * Math.abs(z - zCur)];

			this.setState((prevState, props) => {
				return {
					coords: coords,
					explodeClass: this.state.explodeClass + ' hide smooth',
					curFace: face,
					menuHighlight: face,
					delta: [xFinal, yFinal, zFinal], //flip content opposite way of cube
					isMax: false,
					preSpinMax: (prevState.preSpinMax == 'ready' ? this.state.isMax : prevState.preSpinMax)
				}
			});


			// if (this.state.preSpinMax == 'wait'){
			// 	this.setState((prevState, props) => {
			// 		return {preSpinMax: this.state.isMax}
			// 	});
			// }

			this.rotateEv = 1;
			this.rotateCalls += 1;
			setTimeout(()=>{ //wait 1 second for rotation to finish before updating curface and re-rendering
				this.rotateCalls -= 1;
				if(this.rotateCalls==0){ //only update curface when done spinning/getting rotate calls
					this.rotateEv = 0;
					this.setState((prevState, props) => {
						return {
							explodeClass: face,
							contentFace: face,
							delta: [0, 0, 0],
							isMax: prevState.preSpinMax,
							preSpinMax: 'ready'
						}
					});
				}
			}, 1000);
		}

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
	curFace: 'spinning',

	isMax: false, //size of content window

	showMenu: false, //show any menu
	showInnerMenu: false, //show inner menu
	showTopMenu: false, //show top menu

	keyRender: 0,

	customMode: false
}





