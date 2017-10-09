import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class MinMaxButton extends React.Component{

	render(){
		return(
			<button id='minmaxbutt' className={this.props.minMaxClass} onClick={this.props.handleClick}>&#10005;</button>
			);
	}

}