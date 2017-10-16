import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HandleAccounts from '../users/handleAccounts';

export default class Right extends React.Component{
	render(){
		return(<div style={{display : `${this.props.disp}`}}>
			<HandleAccounts/>
		</div>);
	}

}



