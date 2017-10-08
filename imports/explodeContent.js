import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import Back from './backPage';
import Front from './frontPage';
import Top from './topPage';
import Bottom from './bottomPage';
import Left from './leftPage';
import Right from './rightPage';

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
	render(){

	
		return(
			<div>
			<Front disp={this.state.frontDisp}/>

			<Back disp={this.state.backDisp}/>

			<Bottom disp={this.state.bottomDisp}/>

			<Top disp={this.state.topDisp}/>

			<Left disp={this.state.leftDisp}/>

			<Right disp={this.state.rightDisp}/>
		
			</div>
			)
	}
}
