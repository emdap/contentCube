import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import recede from './../client/main.js';

export default class ExplodeBox extends React.Component{
	getCleaned(){
		return this.props.explodeClass.slice(1);
	}

	render() {	
		return(
		<div key="main_div" id="explode" state={this.props.state} className={this.getCleaned()}>
		<MinMaxButton explodeClass={this.getCleaned()}/>
		<MenuBar explodeClass={this.getCleaned()}/>
		<MenuContent/>
		<div id="explodeContent"></div>
		</div>
		);
	}

}


class MinMaxButton extends React.Component{
	render(){
		this.changeState = this.MinMax.bind(this);
		return(
			<button id='minmaxbutt' className='default' onClick={this.changeState}>&#10005;</button>
			);
	}

	MinMax(e) {
		console.log(this.props.explodeClass);
		if (document.getElementById('minmaxbutt').className == 'min'){
			setTimeout(function() {document.getElementById('minmaxbutt').className = 'default'}, 1000);
			document.getElementById('explode').className =  this.props.explodeClass + ' max';
			document.getElementById('explode').setAttribute('state', 'max');
		} else {
			setTimeout(function() {document.getElementById('minmaxbutt').className = 'min'}, 1000);
			document.getElementById('explode').className =  this.props.explodeClass + ' min';
			document.getElementById('explode').setAttribute('state', 'min');
		}
	}
}

class MenuBar extends React.Component{
	render(){
		this.changeState = this.UpDown.bind(this);
		document.getElementById('nav' + this.props.explodeClass).className = 'bolded'
		return(
			<button id='menubar' className='up' onClick={this.changeState}>|||</button>
			);
	}

	UpDown(e){
		if (document.getElementById('menubar').className == 'up'){
			document.getElementById('menubar').className = 'down';
			document.getElementById('menucontent').style.visibility = 'visible';
		} else {
			document.getElementById('menubar').className = 'up';
			document.getElementById('menucontent').style.visibility = 'hidden';
		}
	}
}

class MenuContent extends React.Component{
	render(){
		return(
		<span id='menucontent' style={{visibility: 'hidden'}}>
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


ExplodeBox.propTypes = {
	explodeClass: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired
}



MinMaxButton.propTypes = {
	explodeClass: PropTypes.string.isRequired,
}
