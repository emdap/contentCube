import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//about

export default class Front extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			hello: true, //declare all menu headings as a state, set to false initially
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'hello': 
				this.setState(()=>{
					return{
					hello: !this.state.hello

				}});


				break;
			}

	}


	render(){

		pageClass = this.props.disp;
			return (
				<div id="pageHolder" className={pageClass}>
				<div id="about">
			    <h1>Emma DaPonte</h1>
			    <h3>ecodapo@gmail.com • (416) 452 6279</h3>
			    <div id="pageMenu">
			    {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
			    <ClickingH activate={this.state.hello} trigger={"hello"} handleShow={this.handleMenuShow}>
			 	Hello!
			 	</ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.hello}>
			    <img border="0" className="portrait"
			    src="/images/face.jpg" />

			    <p> <strong>Thanks</strong> for visiting my website. I first found a love for coding back in the early 2000s designing pages for my Neopets. Now I have a <a className="link"onClick={()=>{this.handleRotate('school')}}>bachelor's degree</a> from the University of Toronto in Computer Science, and a year <a className="link"onClick={()=>{this.handleRotate('work')}}>experience working as a programmer</a> in a corporate environment. I'm always looking to learn more and prefer a hands-on approach by experimenting with new technologies to problem solve, as seen in some of my <a className="link"onClick={()=>{this.handleRotate('projects')}}>personal projects</a>. 
			    </p>
			    <p><strong>When</strong> I'm not coding you might find me biking around Toronto or enjoying a coffee with my sketch book at some local cafe. Other hobbies include cooking and fermenting and petting neighborhood cats.</p>
			    <p><strong>Feel</strong> free to get in touch via email or phone as listed at the top, or send an email through this website using the button below.</p>

			    </HidingDiv>
			    </div>
			    </div>

			    <h4><button onClick={this.props.handleEmail}>Email Me</button></h4>
			    </div>
				);
		
	}

	handleRotate(where){
		
		switch (where){
			case 'work':
				this.props.spinIt([-180, 0, 0], 'back', true, 'work');
				break;

			case 'school':
				this.props.spinIt([-180, 0, 0], 'back', true, 'school');
				break;

			case 'projects':
				this.props.spinIt([0, -90, 0], 'right', true, 'personal');
				break;
	
		}
	}

}



















