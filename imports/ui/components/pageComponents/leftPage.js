import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Left extends React.Component{
	render(){
		pageClass = this.props.disp;
		return(<div className={pageClass}>

    Here's some random text.
    <h1>left</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."
</div>
);
}
}

