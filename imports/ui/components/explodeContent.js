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
				<Bottom disp={(this.state.curFace == 'bottom' ? "pageOpen" : "pageClosed")} 
					message={this.state.homeMessage} spinIt={this.props.handleRotate} showMade={this.state.showBottomMade} showControls={(this.state.showBottomMade ? false : true)}/>
				<Left disp={(this.state.curFace == 'left' ? "pageOpen" : "pageClosed")}/>
				<Right disp={(this.state.curFace == 'right' ? "pageOpen" : "pageClosed")} secret={this.props.handleSecret} spinIt={this.handleRotateTrigger}/>
			</div>
		
			</div>
			)
	}

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace, 
			isMax: this.props.isMax,
			homeMessage: 'init',
			showBottomMade: false
		}

		this.handleRotateTrigger = this.handleRotateTrigger.bind(this);
	}
	

	// componentDidMount(){
	// 	this.toggleCurFace(this.state.curFace);
	// }

	handleRotateTrigger(coords, page, force, trigger){
		if(trigger == 'made'){
			this.setState(()=>{return{
				showBottomMade: true,
				curFace: page,
				isMax: true
			}});
		}

		this.props.handleRotate(coords, page, force);
	}
	

	componentWillReceiveProps(nextProps){
		this.setState(() => { 
			return {
				curFace: nextProps.curFace,
				isMax: nextProps.isMax,
				homeMessage: (this.state.curFace != nextProps.curFace ? 'default' : this.state.homeMessage) //keep as same message if new curface is same as last curface (prevents changing message when component rerendered due to menu opening)
			}
		});
	}


}
