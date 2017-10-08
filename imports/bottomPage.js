import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Bottom extends React.Component{
	render(){
		return(
		<div style={{display : `${this.props.disp}`}}>
    Here's some random text.
    <h1>bottom</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."
    </div>
);
	}
}





