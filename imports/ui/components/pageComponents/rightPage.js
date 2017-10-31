import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//projects

export default class Right extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			personal: false, //declare all menu headings as a state, set to false initially
			school: false,
			linkPreview: false
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);
		this.handleRotate = this.handleRotate.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'personal': 
				this.setState(()=>{
					return{
					personal: !this.state.personal,
					school: false

				}});

				break;

			case 'school': 
				this.setState(()=>{return{
					school: !this.state.school,
					personal: false

				}});

				break;

			case 'linkPreview':
				this.setState(()=>{return{
					linkPreview: !this.state.linkPreview
				}});

				break;
			}

	}

	render(){

		pageClass = this.props.disp;
			return (
				<div id="pageHolder" className={pageClass}>
				<div id="projects">
			    <h1>Programming Projects</h1>
			    <div id="pageMenu">
			    {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
			    <ClickingH activate={this.state.personal} trigger={"personal"} handleShow={this.handleMenuShow}>
			    Personal Projects
			 	</ClickingH>

			    <ClickingH activate={this.state.school} initClass={"middleMenu"} trigger={"school"} handleShow={this.handleMenuShow}>
			    School Projects
			    </ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.personal}>
			    <h5>Link Preview</h5>
			    <p><strong>Link Preview</strong> is an extension for Google Chrome that allows the user to see certain information from a link on a webpage, without having to actually click on the link. It generates a div which follows the mouse (the preview window) to show this information, and only creates the preview window when hovering over specific HTML elements (as opposed to creating a preview window for all links). The information that the preview window shows is specific to each website (as opposed to showing the next webpage in its entirety). Currently, Link Preview only works on Kijji.ca. You can download it <a href="https://chrome.google.com/webstore/detail/link-preview/bjoabjghhaegfioipdfaggpecmegfelp?" className="link">here</a>.
			    </p>


			    <h6>Technologies Used</h6>
			    <ul className="inner">
			    <li>Javascript</li>
			    <li>jQuery</li>
			    <li>JSON</li>
			    </ul>
			    <ClickingH activate={this.state.linkPreview} initClass={"inner"} trigger={'linkPreview'} handleShow={this.handleMenuShow}>More Info</ClickingH>
			    <HidingDiv initClass={"inner"} trigger={this.state.linkPreview}>
			    <p><strong>Link Preview</strong> was inspired by two things: extensions I've used in the past with similar functionality, and Kijiji.ca's lack luster location information. When searching for 'stuff' on Kijiji.ca, the exact address of the item is not shown in the advert, only a (frequently uninformative) general location; the only way to see the exact location is to click through. I wanted to be able to get this exact address without having to open every single ad. There are lots of Google Chrome extensions that generate same-window previews for links, but none that are individually tailored to the website to only show specific content. Link Preview does just that, and for the Kijiji.ca iteration, it gets the exact address and shows the user a clickable Google Map (in addition to other information only visible on the ad's actual page). This saves the user time browsing, and the different states of the preview window make it easy to compare multiple ads at once (more info on the different states below).
			    </p>

			     <p>The preview window responds to keyboard commands and has three states:</p>
			    	<ul className="standard">
			    	<li><strong>Active:</strong> The default state, the preview window follows the mouse. There can only be one active preview window.</li>
			    	<li><strong>Paused:</strong> The preview window no longer follows the mouse and  stays in one place, and its content does not update. Its position can be moved by dragging and dropping, and its relative position on the screen is maintained during scrolling. The active preview window will enter this state when the user presses the "shift" key. There can be unlimited paused windows.</li>
			    	<li><strong>Fixed:</strong> Equivalent to the paused state with one exception: the content of a fixed preview window <span className="italic">will</span> continue to update as the user mouses over eligible links. The active preview window will enter this state when the user presses the "f" key. There can be unlimited fixed windows.</li>
			    	</ul>
			    <p>Additional commands and documentation for Link Preview can be found <a href="https://github.com/emdap/LinkPreview" className="link">here</a>.</p>

			    <p><strong>The</strong> Link Preview extension is easy for a developer to adjust for new websites by creating 2 new files/functions. One that returns a jQuery object pointing to the HTML element that should trigger the preview window, and another that takes the source code of the link for which to generate the preview window as a parameter, extracts the needed data, and then returns a string of HTML to populate the preview window with. So, one function for the HTML elements that generate the preview window, and one for the actual preview window content. These new files/functions will be loaded when visiting the intended webpage by adding another 'content_script' to the extension's manifest.json file that matches to the intended website.</p>
			    <ClickingH activate={this.state.linkPreview} initClass={"inner short"} trigger={'linkPreview'} handleShow={this.handleMenuShow}>Hide</ClickingH>

			    </HidingDiv>


			    <h5>contentCube</h5>
			    <p><strong>contentCube</strong> is a ... oh wait, you're already here! I created this project to get hands-on experience using React and to try out CSS's transform properties. Read more about how it works <a className="link" onClick={()=>{this.handleRotate('bottom','made')}}>here</a>.</p>

			    <h6>Technologies Used</h6>
			    <ul className="inner">
			    <li>Meteor</li>
			    <li>Heroku</li>
			    <li>React</li>
			    <li>Javascript</li>
			    </ul>
			    <h2 className="inner"/>

			    </HidingDiv>

			    <HidingDiv trigger={this.state.school}>
			    </HidingDiv>

			    </div>
			    </div>

			    <h4><button id="projectSecret" onClick={this.props.secret}>Custom Cube Mode</button></h4>
			    </div>
				);
		
	}

	handleRotate(where, trigger){
		
		switch (where){
			case 'bottom':
				this.props.spinIt([90, 0, 0], where, true, trigger);
				break;
		}
	}


}



















