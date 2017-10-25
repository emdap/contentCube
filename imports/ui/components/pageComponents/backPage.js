import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//experience

export default class Back extends React.Component{


	constructor(props) {
		super(props);
		this.state = {
			work: false, //declare all menu headings as a state, set to false initially
			school: false,
			personal: false
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'work': 
				this.setState(()=>{
					return{
					work: !this.state.work,
					personal: false,
					school: false,

				}});


				break;
			case 'school': 
				this.setState(()=>{return{
					school: !this.state.school,
					work: false,
					personal: false,


				}});


				break;
			case 'personal': 
				this.setState(()=>{return{
					personal: !this.state.personal,
					work: false,
					school: false,

				}});

				break;
			}

	}



	render(){

		pageClass = this.props.disp;
		
		return(


	       <div id="pageHolder" className={pageClass}>
				<div id="experience">
			    <h1>Relevant Experience</h1>
			    <div id="pageMenu">
			    {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
			    <ClickingH activate={this.state.work} trigger={"work"} handleShow={this.handleMenuShow}>
			 	Work
			 	</ClickingH>

			    <ClickingH activate={this.state.school} initClass={"middleMenu"} trigger={"school"} handleShow={this.handleMenuShow}>
			    School
			    </ClickingH>

			    <ClickingH activate={this.state.personal} trigger={"personal"} handleShow={this.handleMenuShow}>
			    Personal
			    </ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.work}>
			    work
			    </HidingDiv>

			    <HidingDiv trigger={this.state.school}>
			    school
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

















