import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//about


export default class Front extends React.Component{
	render(){
	//	console.log(this.props.disp);
		return(
			<div className='page' id='aboutPage' style={{display : `${this.props.disp}`}}>
		   <h1>Hello World</h1>
		   Welcome to my website! 
		    </div>
		);
	}
}





