import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//contact


export default class Left extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			menu1: false, //declare all menu headings as a state, set to false initially
			menu2: false,
			menu3: false
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'menu1': 
				this.setState(()=>{
					return{
					menu1: !this.state.menu1,
					menu3: false,
					menu2: false,

				}});


				break;
			case 'menu2': 
				this.setState(()=>{return{
					menu2: !this.state.menu2,
					menu1: false,
					menu3: false,


				}});


				break;
			case 'menu3': 
				this.setState(()=>{return{
					menu3: !this.state.menu3,
					menu1: false,
					menu2: false,

				}});

				break;
			}

	}


	
	render(){

		pageClass = this.props.disp;

			return (
				<div id="pageHolder" className={pageClass}>
				<div id="contact">
			    <h1>Header</h1>
			    <div id="pageMenu">
			    {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
			    <ClickingH activate={this.state.menu1} trigger={"menu1"} handleShow={this.handleMenuShow}>
			 	</ClickingH>

			    <ClickingH activate={this.state.menu2} initClass={"middleMenu"} trigger={"menu2"} handleShow={this.handleMenuShow}>
			    </ClickingH>

			    <ClickingH activate={this.state.menu3} trigger={"menu3"} handleShow={this.handleMenuShow}>
			    </ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.menu1}>
			    </HidingDiv>

			    <HidingDiv trigger={this.state.menu2}>
			    </HidingDiv>

			    <HidingDiv trigger={this.state.menu3}>
			    </HidingDiv>

			    </div>
			    </div>

			    <h4>bottom header</h4>
			    </div>
				);
		
	}

}

