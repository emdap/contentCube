import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class MenuContent extends React.Component{

	render(){
		return(
		<span>
		<span id='navfront' onClick={()=>this.props.handleRotate([0, 0, 0], 'front')} className={(this.props.highlight == 'front' ? 'bolded' : 'default')}>front</span>/
		<span id='navback' onClick={()=>this.props.handleRotate([180, 0, 0], 'back')} className={(this.props.highlight == 'back' ? 'bolded' : 'default')}>back</span>/
		<span id='navtop' onClick={()=>this.props.handleRotate([-90, 0, 0], 'top')} className={(this.props.highlight == 'top' ? 'bolded' : 'default')}>top</span>/
		<span id='navbottom' onClick={()=>this.props.handleRotate([90, 0, 0], 'bottom')} className={(this.props.highlight == 'bottom' ? 'bolded' : 'default')}>bottom</span>/
		<span id='navleft' onClick={()=>this.props.handleRotate([0, 90, 0], 'left')} className={(this.props.highlight == 'left' ? 'bolded' : 'default')}>left</span>/
		<span id='navright' onClick={()=>this.props.handleRotate([0, -90, 0], 'right')} className={(this.props.highlight == 'right' ? 'bolded' : 'default')}>right</span>
		</span>
		);
	}

}