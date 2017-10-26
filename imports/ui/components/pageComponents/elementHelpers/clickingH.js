import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ClickingH extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			initClass: this.props.initClass,
			allClass: this.props.initClass + ' ' + (this.props.activate ? 'active' : 'inactive'),
			clicked: this.props.activate
		}

		this.handleShow = this.handleShow.bind(this);
	}

	render(){
		return(

		
		    <h2 className={this.state.allClass} onClick={()=>{this.handleShow()}}>
		    {this.props.children}
		    </h2>
		    );
	}

	handleShow(){
		this.setState(()=>{return{
			clicked: !this.state.clicked,
			allClass: this.state.initClass + ' ' + (!this.state.clicked ? 'active' : 'inactive')
		}});

		this.props.handleShow(this.props.trigger);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.activate == false){
			this.setState(()=>{
				return{
					clicked: false,
					allClass: this.state.initClass + ' inactive'
				}});
		}
	}
}

ClickingH.defaultProps = {
	initClass: 'default'
}



