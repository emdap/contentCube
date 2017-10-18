import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Back extends React.Component{

	render(){
		pageClass = this.props.disp;

		return(<div className={pageClass}>

		   <h1>back</h1>

		</div>
		);
}
}






