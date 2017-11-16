import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import Back from './pageComponents/backPage';
import Front from './pageComponents/frontPage';
import Top from './pageComponents/topPage';
import Bottom from './pageComponents/bottomPage';
import Left from './pageComponents/leftPage';
import Right from './pageComponents/rightPage';
import EmailWindow from './emailWindow';

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
				
				<Front disp={(this.state.curFace == 'front' ? "pageOpen" : "pageClosed")} spinIt={this.handleRotate} handleEmail={this.showEmail}/>
				
				<Back disp={(this.state.curFace == 'back' ? "pageOpen" : "pageClosed")} toggleColor={this.props.handleColor}/>
				
				<Top disp={(this.state.curFace == 'top' ? "pageOpen" : "pageClosed")} spinIt={this.props.handleRotate}/>
				
				<Bottom disp={(this.state.curFace == 'bottom' ? "pageOpen" : "pageClosed")} 
					message={this.state.homeMessage} spinIt={this.props.handleRotate} showMade={this.state.showBottomMade} showControls={(this.state.showBottomMade ? false : true)}/>
				
				<Left disp={(this.state.curFace == 'left' ? "pageOpen" : "pageClosed")} handleEmail={this.showEmail}/>
				<Right disp={(this.state.curFace == 'right' ? "pageOpen" : "pageClosed")} secret={this.props.handleSecret} spinIt={this.handleRotateTrigger}/>

			</div>
			<EmailWindow trigger={this.state.showEmail} handleEmail={this.showEmail}/>
			</div>
			)
	}

	constructor(props){
		super(props)
		this.state = {
			curFace: this.props.curFace, //current page
			isMax: this.props.isMax, //content size
			homeMessage: 'init', //for which version of home page to show (init is initial, 'where's the cube' message)
			showBottomMade: false, //show 'how it's made' div on bottom (home) page
			showEmail: false
		}

		this.handleRotateTrigger = this.handleRotateTrigger.bind(this);
		this.showEmail = this.showEmail.bind(this);
	}
	

	// componentDidMount(){
	// 	this.toggleCurFace(this.state.curFace);
	// }

	handleRotateTrigger(coords, page, force, trigger){ //for handling a rotate which also triggers a certain hidingDiv to show on the page rotated to
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

	showEmail(){
		this.setState(() => {
			return{
				showEmail: !this.state.showEmail
			}
		});

		this.props.handleEmail(); //changes state in contentCube, so that onkeydown listener turned off
	}


}
