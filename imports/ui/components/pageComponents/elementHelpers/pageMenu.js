import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingP from './elementHelpers/hidingP';
import ClickingH from './elementHelpers/clickingH';


export default class PageMenu extends React.Component{

	generateTabs(){
		const tabList = this.props.tabList;
		return(
			tabList.map( x => )
		);
	}
	render(){

		return(
			    <div id="pageMenu">

{this.props.children}

			    </div>
			)
	}
}