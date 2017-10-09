import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import Back from './pageComponents/backPage';
import Front from './pageComponents/frontPage';
import Top from './pageComponents/topPage';
import Bottom from './pageComponents/bottomPage';
import Left from './pageComponents/leftPage';
import Right from './pageComponents/rightPage';

export default class ExplodeContent extends React.Component{
	
	render(){
		thumbClass = (this.state.isMax ? 'hide' : 'show');
		contentClass = (this.state.isMax ? 'show' : 'hide');
	
		return(
			<div>
			{/* thumbnails */}
			<div id='thumbnail' className={thumbClass}>
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

			{/* pages */}
			<div id='content' className={contentClass}>
				<Front disp={this.state.frontDisp}/>

				<Back disp={this.state.backDisp}/>

				<Bottom disp={this.state.bottomDisp}/>

				<Top disp={this.state.topDisp}/>

				<Left disp={this.state.leftDisp}/>

				<Right disp={this.state.rightDisp}/>
		
			</div>
			</div>
			)
	}

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace,
			frontDisp: 'block',
			backDisp: 'none',
			rightDisp: 'none',
			leftDisp: 'none',
			topDisp: 'none',
			bottomDisp: 'none',
			isMax: this.props.isMax
		}
	}

	componentWillReceiveProps(nextProps){

		this.setState(() => { //set all to none
			return {
				frontDisp: 'none',			
				backDisp: 'none',			
				topDisp: 'none',		
				bottomDisp: 'none',			
				leftDisp: 'none',			
				rightDisp: 'none',
				isMax: nextProps.isMax
			}
		});
	

		switch(nextProps.curFace) { //set current side to display
			case 'front':
				this.setState(() => {
					return {
						frontDisp: 'block',
					}
				});
				break;
			case 'back':
				this.setState(() => {
					return {
						backDisp: 'block',
					}
				});
				break;
			case 'top':
				this.setState(() => {
					return {
						topDisp: 'block',
					}
				});
				break;
			case 'bottom':
				this.setState(() => {
					return {
						bottomDisp: 'block',
					}
				});
				break;
			case 'left':
				this.setState(() => {
					return {
						leftDisp: 'block',
					}
				});
				break;
			case 'right':
				this.setState(() => {
					return {
						rightDisp: 'block',
					}
				});
				break;
		}
	}

}