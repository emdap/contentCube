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
				{this.toggleThumbnail(this.state.curFace)}
			</div>

			{/* pages */}
			<div id='content' className={contentClass}>

			{this.toggleCurFace(this.state.curFace)}		
		
			</div>
			</div>
			)
	}

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace,
			// frontDisp: 'pageClosed',
			// backDisp: 'pageClosed',
			// rightDisp: 'pageClosed',
			// leftDisp: 'pageClosed',
			// topDisp: 'pageClosed',
			// bottomDisp: 'pageClosed',
			// homeMessage: 'init', 
			isMax: this.props.isMax
		}
	}
	

	// componentDidMount(){
	// 	this.toggleCurFace(this.state.curFace);
	// }
	

	componentWillReceiveProps(nextProps){

		this.setState(() => { //set all to none
			return {
				// frontDisp: 'pageClosed',			
				// backDisp: 'pageClosed',			
				// topDisp: 'pageClosed',		
				// bottomDisp: 'pageClosed',			
				// leftDisp: 'pageClosed',			
				// rightDisp: 'pageClosed',
				curFace: nextProps.curFace,
				isMax: nextProps.isMax,
				homeMessage: 'default'
			}
		});
	}

	toggleThumbnail(curFace){
		switch(curFace) {
			case 'front':
				return(
					<div className={"pageOpen"}>
						A
					</div>
				);
				break;

			case 'back':
				return(
					<div className={"pageOpen"}>
						E
					</div>
				);
				break;

			case 'top':

				return(
					<div className={"pageOpen"}>
						L
					</div>
				);
				break;

			case 'bottom':
				return(
					<div className={"pageOpen"}>
						H
					</div>
				);
				break;

			case 'left':
				return(
					<div className={"pageOpen"}>
						C
					</div>
				);
				break;

			case 'right':
				return(
					<div className={"pageOpen"}>
						P
					</div>
				);
				break;
		}
	}

	toggleCurFace(curFace){

		switch(curFace) { //set current side to display
			case 'front':
				return (
					<Front disp={"pageOpen"}/>
				);
				break;

			case 'back':
				// this.setState(() => {
				// 	return {
				// 		backDisp: 'pageOpen',
				// 	}
				// });
				return (
					<Back disp={"pageOpen"}/>
				);
				break;

			case 'top':
				// this.setState(() => {
				// 	return {
				// 		topDisp: 'pageOpen',
				// 	}
				// });
				return(
					<Top disp={"pageOpen"}/>
				);
				break;

			case 'bottom':
				// this.setState(() => {
				// 	return {
				// 		bottomDisp: 'pageOpen',
				// 	}
				// });
				return (
					<Bottom disp={"pageOpen"} message={this.state.homeMessage} spinIt={this.props.handleRotate}/>
				);
				break;

			case 'left':
				// this.setState(() => {
				// 	return {
				// 		leftDisp: 'pageOpen',
				// 	}
				// });
				return(
					<Left disp={"pageOpen"}/>
				);
				break;
	
			case 'right':
				// this.setState(() => {
				// 	return {
				// 		rightDisp: 'pageOpen',
				// 	}
				// });
				return(
					<Right disp={"pageOpen"}/>
				);
				break;
		}
	}

}
