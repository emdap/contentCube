import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Cube extends React.Component {
	render(){
		return(
			<section className="container">
				  <div id="card" style={this.props.rotation}>
				    <figure className="front"></figure>
				    <figure className="back"></figure>   
				    <figure className="left"></figure>
				    <figure className="right"></figure>
				    <figure className="top"></figure>
				    <figure className="bottom"></figure>
				  </div>
			</section>
		);
	}
}