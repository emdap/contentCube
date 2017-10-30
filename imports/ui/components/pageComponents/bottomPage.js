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
			showControls: true, //same, set to true so auto displays on first render
			showMade: false, //same
		}
		this.currRot = 0;
		this.handleClick = this.handleClick.bind(this);
		this.handleRotate = this.handleRotate.bind(this);
		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleRotate(where){
		
		switch (where){
			case 'intro':
				this.props.spinIt([225,45,315], 'bottom', true);
				setTimeout(()=>{
					this.props.spinIt([90,0,0], 'bottom', true);
					this.changeMessage();
				}, 1000);
				
				break;
			case 'about':
				this.props.spinIt([0, 0, 0], 'front', true);
				break;
		}
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
				}});


				break;
			case 'controls': //index 1
				this.setState(()=>{return{
					showControls: !this.state.showControls,
					showHere: false,
					showMade: false,
				}});

				break;
			case 'made': //index 2
				this.setState(()=>{return{
					showMade: !this.state.showMade,
					showHere: false,
					showControls: false,
				}});

				break;
			}

	}


	renderInterior(){
		if(this.state.message == 'init' && pageClass == 'pageOpen'){
			return(
				<div id="pageHolder" className={pageClass + ' ' + this.state.intro}>
				<div id="home">
			    <h1>Welcome to contentCube!</h1>
			    <h3><button onClick={()=>{this.handleRotate('intro')}}>
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


			    <ClickingH activate={this.state.showControls} trigger={'controls'} handleShow={this.handleMenuShow}>
			    	Controls
			    </ClickingH>

			    <ClickingH activate={this.state.showHere}  initClass={"middleMenu"} trigger={"here"} handleShow={this.handleMenuShow}>
			 		What's Here
			 	</ClickingH>

			    <ClickingH activate={this.state.showMade} trigger={'made'} handleShow={this.handleMenuShow}>
			    	How it Works
			    </ClickingH>

			    </div>
			    <div id="pHolder">


			    <HidingDiv trigger={this.state.showControls}>
			    <h5>Navigation</h5>
			    <ul className="controlsList">
			    <li><strong>Turn</strong> the cube using the arrow keys.</li>
			    <li><strong>Toggle</strong> min/max mode using the "ESC" key, or clicking the "X" in the upper left hand corner.</li>
			    <li><strong>Toggle</strong> the visibility of the menu using the "m" key, or clicking the "|||" next to the "X" in the upper left hand corner.</li>
			    <li><strong>Go</strong> to a specific page using the menu.</li>
			    <li><strong>On</strong> each page, show different content by clicking the tabs underneath the header (the "Controls", "What's Here" ... tabs on this page).</li>
		    	<li><strong>Whichever</strong> tab is opened on a given page will stay open even if navigating to a new page.</li>
		    	</ul>

			    <h5>Modes</h5>
			    <ul className="controlsList">
			    <li><strong>Currently,</strong> the cube is in max mode with the menu visible.</li>
			    <li><strong>Navigation</strong> works the same in both maximized and minimized modes.</li>
			    <li><strong>The</strong> size of the cube window and visibility of the menu will only change if it is specifically toggled, for example going between min/max mode will not affect menu visibility.</li>
			    </ul>

			    <h5>Page Specific Buttons</h5>
			    <ul className="controlsList">
			    <li><strong>Sometimes</strong> a unique feature button can be found on a page.</li>
			    <li><strong>If</strong> some text has a hover effect, it is likely (but not always) such a button.</li>
			    <li><strong>There</strong> is one at the bottom of this page ... keep an eye out for more!</li> 
			    </ul>
		
			    </HidingDiv>

			    <HidingDiv trigger={this.state.showHere}>
			    {/* what's here? */}
			    <h5>Now</h5>
			    <p><strong>Currently</strong> this contentCube is serving as the personal webpage for Emma DaPonte. Check out <a className="link" onClick={()=>{this.handleRotate('about')}}>other pages</a> for more specific information on Emma without the third person narrative.
			    </p>
			    <h5>Future</h5>
			    <p><strong>Eventually</strong> this contentCube will serve as more of a portfolio where each side can showcase a web app. In its current state it has a lot of redundant and needlessly spread out information, which is not the end goal. Come back for updates!
			    </p>

			    </HidingDiv>

			    <HidingDiv trigger={this.state.showMade}>
				<h5>High Level</h5>
				<p><strong>
					contentCube </strong> is made with React components and uses CSS transform properties to look 3-dimensional. In addition to interactive buttons within these React components to manipulate the cube, there's a Javascript <span className="italic">onkeydown</span> listener that re-renders the React components when functional keys are pressed (the arrow keys, "ESC", and "m"). <a className="link" href="https://desandro.github.io/3dtransforms/docs/cube.html">This tutorial</a> is helpful for creating a 3D css cube, and was used for the basis of this project's 3D cube.
				</p>

				<h5>The Cube, the Content, and the App</h5>
				<p><strong>
					There </strong> are two main parent components: the 3D cube that is seen when changing pages or in minimized mode (the cube), and the larger window that this text is inside (the content window). The cube and the content window are actually separate entities, but they communicate with eachother to give the illusion that the content window launches from the cube. 
				</p>
				<p><strong>
					The </strong> cube and the content window are both contained within one component, the app. When a button is pressed or a keyboard event triggered, the app recieves new props which it uses to update its states that track cube positioning and size. This triggers a re-rendering of all children components, and the updated states are passed down to the children via props. 
				</p>

				<p><strong>When</strong> rotating, the content window rotates itself in the same direction as the cube before disappearing. When it reappears, it has the page matching the facing side of the cube. The content window contains an individual React component for every page, but only the page that matches the facing side of the cube is ever visible. The other pages exist in the DOM at all times but stay hidden until their side of the cube is shown. This ensures that the same React component isn't constantly being added and then removed from the DOM. Having each page be a React component makes it easier to add unique functionality to each page.
				</p>
				<p><strong>
					Another </strong> way the cube and the content window communicate are by passed down functions from the app. For example, the function to rotate the cube is contained within the app component, and is passed down to the content window via a prop. If the position of the cube is toggled using buttons within the content window (by clicking the menu) instead of by keyboard events, the content window is able to use the app's rotating function, which will update the app's state, and trigger a re-rendering of the cube along with all other children.
				</p>

				<h5>Why Separate Components?</h5>
				<p>
					<strong>The</strong> content window is kept separate from the cube to allow for unrestricted cube rotations, and to easily maintain correct orientation for the content window. CSS 3D transforms use the x, y, and z axis, and so the cube can be flipped and flopped in any direction, including upside down. If the content window was contained within the cube, it would likewise get turned over or to the side at the user's whim. Keeping the content window separate from the cube prevents it from losing its upright orientation without extra calculations or transforms, and without restricting how much the user can rotate the cube.
					</p>

				<h5>Other Components</h5>
				<p><strong>
					The </strong> min/max button, the menu button, the clickable tabs on each page, and the div this text is within are all React components. Perhaps the most interesting is the menu. The menu seen when the cube is minimized (the top menu) and maximized (the inner menu) are generated from the same React component. The top menu component is declared from within the app, while the inner menu is declared from within the content window. The menu component assigns class based on a prop, making the appearance easily changed while retaining all of the same functionality.
				</p>

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
		if (nextProps.message != 'init'){ //change from greeting home page to actual home page if prop changes from init
			this.changeMessage();
			this.setState(()=>{return{intro: 'in'}});
		}


	}

	changeMessage(){ //remove first message 1 sec after display change so that new message visible until after transition finishes
		setTimeout(()=>{this.setState(() => {return {message: 'default'}});}, 500); //delay changing so that new homepage not visible while cube is still spinning
	}
}

Bottom.defaultProps = {
	message: 'init'
}







