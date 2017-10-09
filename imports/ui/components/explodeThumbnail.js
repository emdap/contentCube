import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ExplodeContent extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace,
			frontDisp: 'block',
			backDisp: 'none',
			rightDisp: 'none',
			leftDisp: 'none',
			topDisp: 'none',
			bottomDisp: 'none'
		}
	}

	render(){

		return(
			<div style={{width : '200px'}}>
			<div style={{display : `${this.state.frontDisp}`}}>
				F
			</div>

			<div style={{display : `${this.state.backDisp}`}}>
				Ba
			</div>
			<div style={{display : `${this.state.topDisp}`}}>
				T
			</div>

			<div style={{display : `${this.state.bottomDisp}`}}>
				Bo
			</div>

			<div style={{display : `${this.state.leftDisp}`}}>
				L
			</div>

			<div style={{display : `${this.state.rightDisp}`}}>
				R
			</div>		
			</div>
			);
	}

	componentWillReceiveProps(nextProps){
		switch(this.state.curFace) {
			case 'front':
				this.setState(() => {
					return {
						frontDisp: 'none'
					}
				});
				break;
			case 'back':
				this.setState(() => {
					return {
						backDisp: 'none'
					}
				});
				break;
			case 'top':
				this.setState(() => {
					return {
						topDisp: 'none'
					}
				});
				break;
			case 'bottom':
				this.setState(() => {
					return {
						bottomDisp: 'none'
					}
				});
				break;
			case 'left':
				this.setState(() => {
					return {
						leftDisp: 'none'
					}
				});
				break;
			case 'right':
				this.setState(() => {
					return {
						rightDisp: 'none'
					}
				});
				break;
		}

		switch(nextProps.curFace) {
			case 'front':
				this.setState(() => {
					return {
						frontDisp: 'block',
						curFace: 'front'
					}
				});
				break;
			case 'back':
				this.setState(() => {
					return {
						backDisp: 'block',
						curFace: 'back'
					}
				});
				break;
			case 'top':
				this.setState(() => {
					return {
						topDisp: 'block',
						curFace: 'top'
					}
				});
				break;
			case 'bottom':
				this.setState(() => {
					return {
						bottomDisp: 'block',
						curFace: 'bottom'
					}
				});
				break;
			case 'left':
				this.setState(() => {
					return {
						leftDisp: 'block',
						curFace: 'left'
					}
				});
				break;
			case 'right':
				this.setState(() => {
					return {
						rightDisp: 'block',
						curFace: 'right'
					}
				});
				break;
		}
	}

}