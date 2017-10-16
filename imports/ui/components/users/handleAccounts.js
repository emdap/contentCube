import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Users} from '../../../api/users';

export default class HandleAccounts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: '',
			loggedIn: false,
			message: 'Account required to use this page.',
			messageState: 'neutral'
		}
	}

	render(){
		totalUsers = Users.find().count();
		if (!this.state.loggedIn){
			return(
				<div >
				<div id="accountMessage" className={this.state.messageState}> 
				{this.state.message}
				</div>
				<div id='userContainer'>
				<LoginBox handleRegister={this.handleRegister.bind(this)} handleLogin={this.handleLogin.bind(this)}/>
				</div>
				</div>
			);
		} else {
			return(
				<div id="accountMessage" className={this.state.messageState}> 
				{this.state.message}
				<p> Total Users: {totalUsers} </p>
				<button onClick={this.logOut.bind(this)}> Logout
				</button>
				<button onClick={this.delAcc.bind(this)}> Delete Account
				</button>
				</div>
				);
		}
	}
	logOut(){
		this.setState({loggedIn:false, user: '', message: 'Account required to use this page.', messageState: 'neutral'});
	}

	delAcc(){
		var toDel = Users.find({user: this.state.user}).fetch();
		Users.remove({_id: toDel[0]._id});
		this.setState({loggedIn:false, user: '', message: 'Account required to use this page.', messageState: 'neutral'});

	}

	handleRegister(user, pass){
		console.log('register');
		if(user.length < 4 || pass.length < 4){
			this.setState({message: 'Minimum 4 characters for each username and password', messageState: 'fail'});
		}
		else if(Users.findOne({user: user})){
			this.setState({message: 'Username taken, please try another', messageState: 'fail'});
		} else {
			Users.insert({user: user, pass: pass});
			this.setState({user: user, message: 'Current User: ' + user, messageState: 'success', loggedIn: true});
		}

	}

	handleLogin(user, pass){

		console.log('login');
		if(Users.findOne({user: user, pass: pass})){
			this.setState({user: user, message: 'Current User: ' + user, messageState: 'success', loggedIn: true});
		} else {
			this.setState({message: 'Account credentials not valid, please try again', messageState: 'fail'});
		}
	}
}


HandleAccounts.defaultProps = {
	login: true,
	register: false
}



class LoginBox extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			user: '',
			pass: ''
		}

		this.handleUserChange = this.handleUserChange.bind(this);

		this.handlePassChange = this.handlePassChange.bind(this);

		this.handleLogin = this.handleLogin.bind(this);

		this.handleRegister = this.handleRegister.bind(this);
	}
	render(){

		return(
			<form>
			<div className="inputContainer">
			<input type="text" value={this.state.user} onChange={this.handleUserChange} placeholder="Username"/>
			<input type="password"  value={this.state.pass} onChange={this.handlePassChange} placeholder="Password"/>
			</div>
			<button className="accountForm" type="submit" onClick={this.handleLogin} value="Login">Login</button>
			<button className="accountForm" type="submit" onClick={this.handleRegister}>Register New User</button>
			</form>
			);
	}

	handleLogin(e){
		e.preventDefault();
		this.props.handleLogin(this.state.user, this.state.pass);
	}

	handleRegister(e){
		e.preventDefault();
		this.props.handleRegister(this.state.user, this.state.pass);
	}


	handleUserChange(e){
		this.setState({user: e.target.value});
	}

	handlePassChange(e){
		this.setState({pass: e.target.value});
	}
}


LoginBox.defaultProps = {
	user: '',
	pass: ''
}
