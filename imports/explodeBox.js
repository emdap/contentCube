import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ExplodeBox extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isMax: true
		};
//		this.min = this.props.min;
		this.handleMinMax = this.handleMinMax.bind(this);
	}

	componentDidUpdate() {
	}

	render() {
		[dx, dy, dz] = this.props.angle;
		const rotation = {transform: `rotateX( ${dx}deg) rotateY(${dy}deg) rotateZ(${dz}deg) translateZ(100px)`}
		console.log(rotation);
		classes = this.props.explodeClass + ' ' + (this.state.isMax ? 'max' : 'min');

		return(
		<div key="main_div" id="explode" className={classes} style={rotation}>
		<MinMaxButton handleMinMax={this.handleMinMax}/>
		<MenuBar/>
	{/*
		<MenuContent handleMinMax={this.handleMinMax}/>
	*/}
		<div id="explodeContent"></div>
		</div>
		);
	}

	handleMinMax(){
		console.log('minmax' + this.state.isMax);
		this.setState((prevState, props) => {
			return {
				isMax: !prevState.isMax
			}
		});
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

class MenuBar extends React.Component{
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
			<button id='menubar' className={classes} onClick={this.handleState}>|||</button>
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
	}
}

class MenuContent extends React.Component{
	componentDidMount() {
		document.getElementById('nav' + this.props.explodeClass).className = 'bolded';
	}

	componentDidUpdate(){
		console.log('update content');
		document.getElementById('nav' + this.props.explodeClass).className = 'bolded';
		
		console.log(this.props.explodeClass);
	}

	render(){
		return(
		<span id='menucontent' >
		<span id='navfront'>front</span>/
		<span id='navback'>back</span>/
		<span id='navtop'>top</span>/
		<span id='navbottom'>bottom</span>/
		<span id='navleft'>left</span>/
		<span id='navright'>right</span>
		</span>
		);
	}
}


// ExplodeBox.propTypes = {
// 	explodeClass: PropTypes.string.isRequired,
// 	min: PropTypes.boolean.isRequired
// }



// MinMaxButton.propTypes = {
// 	explodeClass: PropTypes.string.isRequired,
// }
