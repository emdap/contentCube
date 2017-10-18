import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Bottom extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
			intro: (props.message == 'init' ? 'in' : 'out')
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleRotate = this.handleRotate.bind(this);

	}

	handleRotate(){
		this.props.spinIt([450,0,0], 'bottom', true);
		this.changeMessage();
	}

	handleClick(){
		this.setState(()=>{return{intro: 'out'}});
		
		setTimeout(()=>{
			this.setState(()=> {return {message: 'else'}});
		}, 500);
		
		setTimeout(()=>{
			this.setState(()=> {return {intro: 'in'}});
		}, 900);
	}

	renderInterior(){
		if(this.state.message == 'init' && pageClass == 'pageOpen'){
			console.log('in');
			return(
				<div id="intro" key="introDiv" className={pageClass + ' ' + this.state.intro}>

			    <h1>Welcome to contentCube!</h1>
			    <h2>Wondering where the cube is? <button onClick={()=>{this.handleRotate()}}>Click here!</button></h2>
				<h4>Or <button onClick={this.handleClick}>here</button> to skip.</h4>

				</div>
			);
		} else {
			console.log('out');
			return (
				<div id="outro" key="outroDiv" className={pageClass + ' ' + this.state.intro}>

			    <h1>Welcome back!</h1>

			    <h2>What's here?</h2>
			    <p>well, what is it?</p>

			    <h2>Controls</h2>
			    <li>control</li>
			    <li>control</li>
			    <li>control</li>

			    <h2>How it's made</h2>
			    <p>description goes here</p>

			    </div>
				);
		}
	}

	render(){
		pageClass = this.props.disp;

		
		return(
		<div className={pageClass}>


	       {this.renderInterior()}

	    </div>


		);
	}

	componentWillReceiveProps(nextProps){
		if (this.state.message == 'init' && nextProps.disp != 'pageOpen'){
			this.changeMessage();
		}

		this.setState(()=>{return{intro: (nextProps.message == 'init' ? 'in' : 'out')}});

	}

	changeMessage(){ //remove first message 1 sec after display change so that new message visible until after transition finishes
		setTimeout(()=>{
			this.setState(() => {return {message: 'default'}});	
		}, 1000)
	}
}

Bottom.defaultProps = {
	message: 'init'
}







