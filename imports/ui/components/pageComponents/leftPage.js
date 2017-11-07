import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//contact


export default class Left extends React.Component{
	
	render(){

		pageClass = this.props.disp;

			return (
				<div id="pageHolder" className={pageClass}>
				<div id="contact">
			    <h1>Contact</h1>


			    <div id="pHolder">
			    <HidingDiv>
				hello
				</HidingDiv>
			    </div>
			    </div>

			    <h4><button onClick={this.props.handleEmail}>Email Me</button></h4>
			    </div>
				);
		
	}


}

