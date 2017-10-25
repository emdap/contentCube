import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class MenuContent extends React.Component{

	render(){
		return(
		<div id={this.props.menuID} className={this.props.menuClass}>

		<div id='navbottom' onClick={()=>this.props.handleRotate([90, 0, 0], 'bottom')} className={(this.props.highlight == 'bottom' ? 'bottom bolded' : 'default')}>Home</div>•

		<div id='navfront' onClick={()=>this.props.handleRotate([0, 0, 0], 'front')} className={(this.props.highlight == 'front' ? 'front bolded' : 'default')}>About</div>•

		<div id='navright' onClick={()=>this.props.handleRotate([0, -90, 0], 'right')} className={(this.props.highlight == 'right' ? 'right bolded' : 'default')}>Projects</div>•

		<div id='navback' onClick={()=>this.props.handleRotate([180, 0, 0], 'back')} className={(this.props.highlight == 'back' ? 'back bolded' : 'default')}>Experience</div>•

		<div id='navleft' onClick={()=>this.props.handleRotate([0, 90, 0], 'left')} className={(this.props.highlight == 'left' ? 'left bolded' : 'default')}>Contact</div>•

		<div id='navtop' onClick={()=>this.props.handleRotate([-90, 0, 0], 'top')} className={(this.props.highlight == 'top' ? 'top bolded' : 'default')}>Links</div>
	</div>
		);
	}

}