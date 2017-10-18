import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class Top extends React.Component{
	render(){
        pageClass = this.props.disp;
        return(<div className={pageClass}>

    Here's some random text.
    <h1>top</h1>
    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."    And quotes too, or as one man said, "These are quotes, but
    'these' are quotes too."
</div>
);
}
}



