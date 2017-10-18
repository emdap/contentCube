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
				<div className={this.state.frontDisp}>
					A
				</div>

				<div className={this.state.backDisp}>
					E
				</div>
				<div className={this.state.bottomDisp}>
					H
				</div>

				<div className={this.state.topDisp}>
					L
				</div>

				<div className={this.state.leftDisp}>
					C
				</div>

				<div className={this.state.rightDisp}>
					P
				</div>	
			</div>

			{/* pages */}
			<div id='content' className={contentClass}>
				<Front disp={this.state.frontDisp}/>

				<Back disp={this.state.backDisp}/>

				<Bottom disp={this.state.bottomDisp} message={this.state.homeMessage} spinIt={this.props.handleRotate}/>

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
			frontDisp: 'pageClosed',
			backDisp: 'pageClosed',
			rightDisp: 'pageClosed',
			leftDisp: 'pageClosed',
			topDisp: 'pageClosed',
			bottomDisp: 'pageClosed',
			homeMessage: 'init', 
			isMax: this.props.isMax
		}
	}
	

	componentDidMount(){
		this.toggleCurFace(this.state.curFace);
	}
	

	componentWillReceiveProps(nextProps){

		this.setState(() => { //set all to none
			return {
				frontDisp: 'pageClosed',			
				backDisp: 'pageClosed',			
				topDisp: 'pageClosed',		
				bottomDisp: 'pageClosed',			
				leftDisp: 'pageClosed',			
				rightDisp: 'pageClosed',
				isMax: nextProps.isMax
			}
		});

		this.toggleCurFace(nextProps.curFace);
	}

	toggleCurFace(curFace){

		switch(curFace) { //set current side to display
			case 'front':
				this.setState(() => {
					return {
						frontDisp: 'pageOpen',
					}
				});
				break;
			case 'back':
				this.setState(() => {
					return {
						backDisp: 'pageOpen',
					}
				});
				break;
			case 'top':
				this.setState(() => {
					return {
						topDisp: 'pageOpen',
					}
				});
				break;
			case 'bottom':
				this.setState(() => {
					return {
						bottomDisp: 'pageOpen',
					}
				});
				break;
			case 'left':
				this.setState(() => {
					return {
						leftDisp: 'pageOpen',
					}
				});
				break;
			case 'right':
				this.setState(() => {
					return {
						rightDisp: 'pageOpen',
					}
				});
				break;
		}
	}

}
