import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import recede from './../client/main.js';

export default class ExplodeBox extends React.Component{
	getCleaned(){
		return this.props.explodeClass.slice(1);
	}

	render() {
		console.log('rendering');
		return(
		<div key="main_div" id="explode" state={this.props.state} className={this.getCleaned()}>
		<MinMaxButton explodeClass={this.getCleaned()}/>
		<div id="innerContent"></div>
		</div>
		);
	}

}


class MinMaxButton extends React.Component{
	render(){
		this.changeState = this.MinMax.bind(this);
		return(
			<button id='minmaxbutt' className='default' onClick={this.changeState}>+</button>
			);
	}

	MinMax(e) {
		console.log(this.props.explodeClass);
		if (document.getElementById('minmaxbutt').className == 'min'){
			document.getElementById('minmaxbutt').className = 'default';
			document.getElementById('explode').className =  this.props.explodeClass + ' max';
			document.getElementById('explode').setAttribute('state', 'max');
		} else {
			document.getElementById('minmaxbutt').className = 'min';
			document.getElementById('explode').className =  this.props.explodeClass + ' min';
			document.getElementById('explode').setAttribute('state', 'min');
		}
	}
}


ExplodeBox.propTypes = {
	explodeClass: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired
}



MinMaxButton.propTypes = {
	explodeClass: PropTypes.string.isRequired,
}
