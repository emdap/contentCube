import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class MenuButton extends React.Component{

	render(){
		return(
			<button id='menubutton' className={this.props.menuClass} onClick={this.props.handleClick}>|||</button>
			);
	}

}
