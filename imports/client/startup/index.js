import {Meteor} from 'meteor/meteor';
import {initRender} from '/imports/api/initRender'
import {handleRender} from '/imports/api/handleRender'

//import {getSwipe} from '/imports/api/swipes'


Meteor.startup(() => {
//initial side to show
//var firstFace = 'bottom'; //make dictionary with default coords = face name for future

//initial values
const firstFace = 'bottom'; //needs to match initCoords
const initCoords = [90, 0, 0];
const isMax = true;
const showMenu = true;
const renderEl = document.getElementById('app');

var myCube = initRender(firstFace, initCoords, isMax, showMenu, renderEl);

document.onkeydown = (e) =>  handleRender(e, myCube, renderEl);

});