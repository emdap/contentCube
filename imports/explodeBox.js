import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuContent from './menuContent';

export default class ExplodeBox extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isMax: true,
			showMenu: false,
			showInnerMenu: false,
			showTopMenu: false
		};
//		this.min = this.props.min;
		this.handleMinMax = this.handleMinMax.bind(this);

		this.handleShow = this.handleShow.bind(this);
	}

	componentDidUpdate() {
	}

	render() {
		[dx, dy, dz] = this.props.angle;
		const rotation = {transform: `rotateX( ${dx}deg) rotateY(${dy}deg) rotateZ(${dz}deg) translateZ(100px)`}
		explodeClasses = this.props.explodeClass + ' ' + (this.state.isMax ? 'max' : 'min');
		menuClasses = (this.state.showInnerMenu ? 'show' : 'hide')
		return(
		<div key="main_div" id="explode" className={explodeClasses} style={rotation}>
		<MinMaxButton handleMinMax={this.handleMinMax}/>
		<MenuButton handleShow={this.handleShow}/>
		<span id='menucontentinner' className={menuClasses}>
		<MenuContent highlight={this.props.explodeClass}/>
		</span>
		<div id="explodeContent"></div>
		</div>
		);
	}

	handleMinMax(){
		console.log(this.state.showMenu);

		if(this.state.isMax){ //downsize, hide inner menu no matter what
			this.setState((prevState, props) => {
				return {
					showInnerMenu: false,
					showTopMenu: prevState.showMenu
				}
			});
		
			this.props.handleMenu(this.state.showMenu);
		
		} else { //up sizing
			this.setState((prevState, props) => {
				return {
					showInnerMenu: prevState.showMenu,
					showTopMenu: false
				}
			});

			this.props.handleMenu(false);

		}
		
		this.setState((prevState, props) => {
			return {
				isMax: !prevState.isMax
			}
		});

	}

	handleShow(){
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
			this.props.handleMenu(!this.state.showMenu); 
			this.setState((prevState, props) => {
				return {
					showMenu: !prevState.showMenu,
					showTopMenu: !prevState.showMenu
				}
			});

		}

	}

}


class MinMaxButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			r: true
		};
		this.handleState = this.handleState.bind(this);
	}

	render(){
		classes = (this.state.r ? 'default' : 'min');
		return(
			<button id='minmaxbutt' className={classes} onClick={this.handleState}>&#10005;</button>
			);
	}

	// MinMax(e) {
	// 	if (document.getElementById('minmaxbutt').className == 'min'){
	// 		setTimeout(function() {document.getElementById('minmaxbutt').className = 'default'}, 1000);
	// 		document.getElementById('explode').className =  this.props.explodeClass + ' max';
	// 		document.getElementById('explode').setAttribute('state', 'max');
	// 	} else {
	// 		setTimeout(function() {document.getElementById('minmaxbutt').className = 'min'}, 1000);
	// 		document.getElementById('explode').className =  this.props.explodeClass + ' min';
	// 		document.getElementById('explode').setAttribute('state', 'min');
	// 	}
	// }

	handleState() {
		this.setState((prevState, props) => {
			return {
				r: !prevState.r
			}
		});

		this.props.handleMinMax();
	}
}

class MenuButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
		this.handleState = this.handleState.bind(this);
	}
	render(){
		classes = (this.state.open ? 'open' : 'closed');
		return(
			<button id='menubutton' className={classes} onClick={this.handleState}>|||</button>
			);
	}

	// UpDown(e){
	// 	if (document.getElementById('menubar').className == 'up'){
	// 		document.getElementById('menubar').className = 'down';
	// 		document.getElementById('menucontent').style.visibility = 'visible';
	// 	} else {
	// 		document.getElementById('menubar').className = 'up';
	// 		document.getElementById('menucontent').style.visibility = 'hidden';
	// 	}
	// }

	handleState() {
		this.setState((prevState, props) => {
			return {
				open: !prevState.open
			}
		});

		this.props.handleShow();
	}
}




// ExplodeBox.propTypes = {
// 	explodeClass: PropTypes.string.isRequired,
// 	min: PropTypes.boolean.isRequired
// }



// MinMaxButton.propTypes = {
// 	explodeClass: PropTypes.string.isRequired,
// }
