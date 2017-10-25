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
					<div className={(this.state.curFace == 'front' ? "pageOpen" : "pageClosed")}>
						A
					</div>
					<div className={(this.state.curFace == 'back' ? "pageOpen" : "pageClosed")}>
						E
					</div>
					<div className={(this.state.curFace == 'top' ? "pageOpen" : "pageClosed")}>
						L
					</div>
					<div className={(this.state.curFace == 'bottom' ? "pageOpen" : "pageClosed")}>
						H
					</div>
					<div className={(this.state.curFace == 'left' ? "pageOpen" : "pageClosed")}>
						C
					</div>
					<div className={(this.state.curFace == 'right' ? "pageOpen" : "pageClosed")}>
						P
					</div>

			</div>

			{/* pages */}	

			<div id='content' className={contentClass}>
				<Front disp={(this.state.curFace == 'front' ? "pageOpen" : "pageClosed")}/>
				<Back disp={(this.state.curFace == 'back' ? "pageOpen" : "pageClosed")}/>
				<Top disp={(this.state.curFace == 'top' ? "pageOpen" : "pageClosed")}/>
				<Bottom disp={(this.state.curFace == 'bottom' ? "pageOpen" : "pageClosed")}/>
				<Left disp={(this.state.curFace == 'left' ? "pageOpen" : "pageClosed")}/>
				<Right disp={(this.state.curFace == 'right' ? "pageOpen" : "pageClosed")}/>
			</div>
		
			</div>
			)
	}

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace, 
			isMax: this.props.isMax
		}
	}
	

	// componentDidMount(){
	// 	this.toggleCurFace(this.state.curFace);
	// }
	

	componentWillReceiveProps(nextProps){

		this.setState(() => { //set all to none
			return {
				curFace: nextProps.curFace,
				isMax: nextProps.isMax,
				homeMessage: 'default' //used for bottom page, tracks when has been visited mroe than once
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
					<div id='content' className={contentClass}>
						<Front disp={"pageOpen"}/>
						<Back disp={"pageClosed"}/>
						<Top disp={"pageClosed"}/>
						<Bottom disp={"pageClosed"}/>
						<Left disp={"pageClosed"}/>
						<Right disp={"pageClosed"}/>
					</div>
				);
				break;

			case 'back':
				// this.setState(() => {
				// 	return {
				// 		backDisp: 'pageOpen',
				// 	}
				// });
				return (
					<div id='content' className={contentClass}>
						<Back disp={"pageOpen"}/>
						<Top disp={"pageClosed"}/>
						<Bottom disp={"pageClosed"}/>
						<Left disp={"pageClosed"}/>
						<Right disp={"pageClosed"}/>
						<Front disp={"pageClosed"}/>
					</div>
				);
				break;

			case 'top':
				// this.setState(() => {
				// 	return {
				// 		topDisp: 'pageOpen',
				// 	}
				// });
				return(
					<div id='content' className={contentClass}>
						<Top disp={"pageOpen"}/>
						<Bottom disp={"pageClosed"}/>
						<Left disp={"pageClosed"}/>
						<Right disp={"pageClosed"}/>
						<Front disp={"pageClosed"}/>
						<Back disp={"pageClosed"}/>
					</div>
				);
				break;

			case 'bottom':
				// this.setState(() => {
				// 	return {
				// 		bottomDisp: 'pageOpen',
				// 	}
				// });
				return (
					<div id='content' className={contentClass}>
						<Bottom disp={"pageOpen"} message={this.state.homeMessage} spinIt={this.props.handleRotate}/>
						<Left disp={"pageClosed"}/>
						<Right disp={"pageClosed"}/>
						<Front disp={"pageClosed"}/>
						<Back disp={"pageClosed"}/>
						<Top disp={"pageClosed"}/>
					</div>
				);
				break;

			case 'left':
				// this.setState(() => {
				// 	return {
				// 		leftDisp: 'pageOpen',
				// 	}
				// });
				return(
					<div id='content' className={contentClass}>
						<Left disp={"pageOpen"}/>
						<Right disp={"pageClosed"}/>
						<Front disp={"pageClosed"}/>
						<Back disp={"pageClosed"}/>
						<Top disp={"pageClosed"}/>
						<Bottom disp={"pageClosed"}/>
					</div>
				);
				break;
	
			case 'right':
				// this.setState(() => {
				// 	return {
				// 		rightDisp: 'pageOpen',
				// 	}
				// });
				return(

					<div id='content' className={contentClass}>
						<Right disp={"pageOpen"}/>
						<Front disp={"pageClosed"}/>
						<Back disp={"pageClosed"}/>
						<Top disp={"pageClosed"}/>
						<Bottom disp={"pageClosed"}/>
						<Left disp={"pageClosed"}/>
					</div>
				);
				break;
		}

	}

}
