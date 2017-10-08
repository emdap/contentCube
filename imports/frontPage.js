import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Front extends React.Component{
	render(){
	//	console.log(this.props.disp);
		return(
			<div style={{display : `${this.props.disp}`}}>
		    Here's some random text.
		    <h1>front</h1>
		    And quotes too, or as one man said, "These are quotes, but
		    'these' are quotes too."
		    </div>
		);
	}
}





