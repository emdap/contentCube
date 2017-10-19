import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Bottom extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
			intro: (props.message == 'init' ? 'in' : 'out'),
			showHere: false, //class for dropdown under 'what's here'
			showControls: false, //same, these states are toggled when 
			showMade: false //clicking their header
		}
		this.currRot = 0;
		this.handleClick = this.handleClick.bind(this);
		this.handleRotate = this.handleRotate.bind(this);

	}

	handleRotate(){
		this.currRot += 360;
		this.props.spinIt([90,0,this.currRot], 'bottom', true);
		this.changeMessage();
	}

	handleClick(){
		newMessage = (this.state.message == 'init' ? 'else' : 'init');

		this.setState(()=>{return{intro: 'out'}});
		
		setTimeout(()=>{
			this.setState(()=> {return {message: newMessage}});
		}, 500);
		
		setTimeout(()=>{
			this.setState(()=> {return {intro: 'in'}});
		}, 900);
	}

	handleShow(which){
		switch (which){
			case 'here':
				this.setState(()=>{return{showHere: !this.state.showHere}});
				break;
			case 'controls':
				this.setState(()=>{return{showControls: !this.state.showControls}});
				break;
			case 'made':
				this.setState(()=>{return{showMade: !this.state.showMade}});
				break;
			}

	}


	renderInterior(){
		if(this.state.message == 'init' && pageClass == 'pageOpen'){
			console.log('in');
			return(
				<div id="home" key="introDiv" className={pageClass + ' ' + this.state.intro}>
			    <h1>Welcome to contentCube!</h1>
			    <h3><button onClick={()=>{this.handleRotate()}}>Wondering where the cube is? Click here!</button></h3>
				<h4><button onClick={this.handleClick}>Skip intro</button></h4>
				</div>
			);
		} else {
			console.log('out');
			return (
				<div id="home" key="outroDiv" className={pageClass + ' ' + this.state.intro}>
			    <h1>Welcome back!</h1>

			    <h2 onClick={()=>{this.handleShow('here')}}>What's here?</h2>
			    <p className={(this.state.showHere ? 'show' : 'hide')}>well, what is it?</p>

			    <h2 onClick={()=>{this.handleShow('controls')}}>Controls</h2>
			    <p className={(this.state.
			    	showControls ? 'show' : 'hide')}>
			    <li>control</li>
			    <li>control</li>
			    <li>control</li>
			    </p>
			    <h2 onClick={()=>{this.handleShow('made')}}>How it's made</h2>
			    <p className={(this.state.showMade ? 'show' : 'hide')}>description goes here</p>
			    <h4><button onClick={this.handleClick}>Replay intro</button></h4>
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







