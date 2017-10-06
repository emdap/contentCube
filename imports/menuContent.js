import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class MenuContent extends React.Component{
	componentDidMount() {
		//document.getElementById('nav' + this.props.explodeClass).className = 'bolded';
	}

	componentDidUpdate(){
		// console.log('update content');
		// document.getElementById('nav' + this.props.explodeClass).className = 'bolded';
		
		// console.log(this.props.explodeClass);
	}

	render(){
		console.log(this.props.highlight);
		return(
		<span>
		<span id='navfront' className={(this.props.highlight == 'front' ? 'bolded' : 'default')}>front</span>/
		<span id='navback' className={(this.props.highlight == 'back' ? 'bolded' : 'default')}>back</span>/
		<span id='navtop' className={(this.props.highlight == 'top' ? 'bolded' : 'default')}>top</span>/
		<span id='navbottom' className={(this.props.highlight == 'bottom' ? 'bolded' : 'default')}>bottom</span>/
		<span id='navleft' className={(this.props.highlight == 'left' ? 'bolded' : 'default')}>left</span>/
		<span id='navright' className={(this.props.highlight == 'right' ? 'bolded' : 'default')}>right</span>
		</span>
		);
	}
}