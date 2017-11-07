import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const nodemailer = require('nodemailer');
const keydown = document.onkeydown;

export default class EmailWindow extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			class: 'hide',
			result: '',
			showResult: 'hide',
			resultType: ''
		}
	}

	render(){

		return(
			<div id="emailWindow" className={this.state.class}>
			<p id="result" className={this.state.showResult + ' ' + this.state.resultType}>{this.state.result}</p>
			<p>Your Email</p>
			<textarea id="emailCC"/>
			<p>Email Subject</p>
			<textarea id="emailSubject"/>
			<p>Email Body</p>
			<textarea id="emailText"/>
			<button id="emailSend" onClick={()=>{this.sendMail()}}>Send</button>
			<button id="emailClear" onClick={()=>{this.clear()}}>Clear</button>
			<button id="emailClose" onClick={()=>{this.close()}}>Close</button>
			</div>
			)
	}

	sendMail(){
		var sub = document.getElementById('emailSubject').value;
		var msg = "The following message was sent using the contentCube email feature: \n \n" + document.getElementById('emailText').value;
		var cc = document.getElementById('emailCC').value;
		console.log(sub);
		if(sub != '' && msg != '' && cc != ''){
			Meteor.call('handleMail', sub, msg, cc, function(error, result){
				var msg = result;
			});
			if(msg){
				this.toggleMessage('Message Sent', 'success');
				setTimeout(()=>{
					this.clear();
					this.close();
				}, 1000);
			} else {
				this.toggleMessage('Error', 'error')
			}
		} else {
			this.toggleMessage('Please fill out all fields', 'error');
		}
		
	}

	toggleMessage(msg, restype){
		this.setState(()=>{
			return{
				result: msg,
				showResult: 'show',
				resultType: restype
			}
		});

		setTimeout(()=>{this.setState(()=>{
			return{
				showResult: 'hide',
				resultType: ''
			}
			});		

		}, 1000);
	}

	close(){
		this.setState(()=>{
			return{
				class: 'hide'
			}
		});
		this.clear();
		this.props.handleEmail();
	}

	clear(){
		document.getElementById('emailText').value = '';
		document.getElementById('emailSubject').value = '';
		document.getElementById('emailCC').value = '';
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.trigger){
			this.setState(()=>{
				return{
					class: 'show'
				}
			});
		} else {
			this.setState(()=>{
				return{
					class: 'hide'
				}
			});
		}
	}
 
}