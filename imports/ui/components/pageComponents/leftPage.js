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
			    <h1>Get in Touch</h1>

			    <div className="content">
			    <h3>Feel free to contact me with any opportunities or inquiries.</h3>
				<p><strong>Email:</strong> ecodapo@gmail.com</p>
				<p><strong>Phone:</strong> (416) 452 6279</p>
				<p className='subtitle'>Use the button at the bottom to send an email through contentCube using <a href="https://nodemailer.com/about/" className="link" target="_blank">nodemailer</a>.</p>
			    </div>
			    </div>

			    <h4><button onClick={this.props.handleEmail}>Email Me</button></h4>
			    </div>
				);
		
	}


}

