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

			    heyo heyo heyo
			    
			    </HidingDiv>
			    </div>
			    </div>

			    <h4><button onClick={this.props.handleEmail}>Email Me</button></h4>
			    </div>
				);
		
	}

}



















