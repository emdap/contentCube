import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';

export default class Bottom extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
			intro: 'in',
			showHere: false, //class for dropdown under 'what's here'
			showControls: false, //same, these states are toggled when 
			showMade: false, //clicking their header
			lastPIndex: -1, //tracking last hiddenP shown
			curPIndex: -1 //tracking current hiddenP shown
		}
		this.currRot = 0;
		this.handleClick = this.handleClick.bind(this);
		this.handleRotate = this.handleRotate.bind(this);
		this.handleMenuShow = this.handleMenuShow.bind(this);

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

	handleMenuShow(which){

		switch (which){
			case 'here': //index 0
				this.setState(()=>{
					return{
					showHere: !this.state.showHere,
					showControls: false,
					showMade: false,

					lastPIndex: this.state.curPIndex,
					curPIndex: (!this.state.showHere ? 0 : -1)
				}});

				console.log('here ' + this.state.curPIndex + (!this.state.showHere ? 0 : -1))

				break;
			case 'controls': //index 1
				this.setState(()=>{return{
					showControls: !this.state.showControls,
					showHere: false,
					showMade: false,


					lastPIndex: this.state.curPIndex,
					curPIndex: (!this.state.showControls ? 1 : -1)
				}});

					console.log('controls ' + this.state.curPIndex + (!this.state.showControls ? 1 : -1))

				break;
			case 'made': //index 2
				this.setState(()=>{return{
					showMade: !this.state.showMade,
					showHere: false,
					showControls: false,


					lastPIndex: this.state.curPIndex,
					curPIndex: (!this.state.showMade ? 2 : -1)
				}});

					console.log('made ' + this.state.curPIndex + (!this.state.showMade ? 2 : -1))

				break;
			}

	}


	renderInterior(){
		if(this.state.message == 'init' && pageClass == 'pageOpen'){
			return(
				<div id="pageHolder" className={pageClass + ' ' + this.state.intro}>
				<div id="home">
			    <h1>Welcome to contentCube!</h1>
			    <h3><button onClick={()=>{this.handleRotate()}}>
			    What cube?
			    </button></h3>
			    </div>
				<h4><button onClick={this.handleClick}>Skip intro</button></h4>
				</div>
			);
		} else {
			return (
				<div id="pageHolder" className={pageClass + ' ' + this.state.intro}>
				<div id="home">
			    <h1>Welcome back!</h1>
			    <div id="pageMenu">

			    <ClickingH activate={this.state.showHere} trigger={"here"} handleShow={this.handleMenuShow}>
			 		What's here?
			 	</ClickingH>

			    <ClickingH activate={this.state.showControls} initClass={"middleMenu"} trigger={'controls'} handleShow={this.handleMenuShow}>
			    	Controls
			    </ClickingH>

			    <ClickingH activate={this.state.showMade} trigger={'made'} handleShow={this.handleMenuShow}>
			    	How it's made
			    </ClickingH>

			    </div>
			    <div id="pHolder">
			    <HidingDiv trigger={this.state.showHere}>
			    well, what is it?
			    </HidingDiv>

			    <HidingDiv trigger={this.state.showControls}>

			    
			        Here's some random text.
    <h1>left</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    Here's some random text.
    <h1>left</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    Here's some random text.
    <h1>left</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    Here's some random text.
    <h1>left</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."


			    <li>control</li>
			    <li>control</li>
			    <li>control</li>
			    </HidingDiv>

			    <HidingDiv trigger={this.state.showMade}>
				heyo

			    </HidingDiv>
			    </div>
			    </div>

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
		if (this.state.message == 'init'){
			this.changeMessage();
		}

		this.setState(()=>{return{intro: 'in'}});

	}

	changeMessage(){ //remove first message 1 sec after display change so that new message visible until after transition finishes
		
	setTimeout(()=>{this.setState(() => {return {message: 'default'}});}, 500);
	}
}

Bottom.defaultProps = {
	message: 'init'
}







