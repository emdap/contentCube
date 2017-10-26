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
			professional: false, //declare all menu headings as a state, set to false initially
			personal: false
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'professional': 
				this.setState(()=>{
					return{
					professional: !this.state.professional,
					personal: false,
					menu2: false,

				}});


				break;

			case 'personal': 
				this.setState(()=>{return{
					personal: !this.state.personal,
					professional: false,
					menu2: false,

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
			    <ClickingH activate={this.state.professional} trigger={"professional"} handleShow={this.handleMenuShow}>
			 	Professional
			 	</ClickingH>

			    <ClickingH activate={this.state.personal} initClass={"middleMenu"} trigger={"personal"} handleShow={this.handleMenuShow}>
			    Personal
			    </ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.professional}>
			    professional
			    </HidingDiv>

			    <HidingDiv trigger={this.state.personal}>
			    personal
			    </HidingDiv>

			    </div>
			    </div>

			    <h4></h4>
			    </div>
				);
		
	}

}



















