import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class HidingDiv extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			class: 'hide'
		}
	}

	render(){
		return(
			<div className={this.state.class}>
			{this.props.children}
			</div>
			);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.trigger){ //is next to be displayed, push in

			this.setState(()=>{return{
				class: 'show'
			}});

		} else { //currently open, push out
			
			this.setState(()=>{return{
				class: 'hide'
			}});
			
		}
			
		


		
	}
}