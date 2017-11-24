import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//links

export default class Top extends React.Component{
    constructor(props){
        super(props);
        this.dance = this.dance.bind(this);
    }

    render(){

        pageClass = this.props.disp;
            return (
                <div className={"pageHolder " + pageClass}>
                <div id="links">
                <h1>Find me Online</h1>

                <div className="content">
                <p><a href="https://github.com/emdap" className="link" target="_blank" >GitHub</a> • 
                <a href="https://jsfiddle.net/user/dapodev/fiddles/" className="link" target="_blank"> JSFiddle</a> • 
                <a hreft="https://chrome.google.com/webstore/search/dapodev" className="link"  target="_blank"> Google Chrome Developer</a></p>

                </div>
                </div>
                <h4><button onClick={()=>this.dance()}>Dance!</button></h4>
                </div>
                );
        
    }

    dance(){
        this.props.spinIt([Math.random() * 360,Math.random() * 360,Math.random() * 360], 'top', true);
        
        setTimeout(()=>{
            this.props.spinIt([Math.random() * 360,Math.random() * 360,Math.random() * 360], 'top', true);
        }, 1000);
        
        setTimeout(()=>{
            this.props.spinIt([Math.random() * 360,Math.random() * 360,Math.random() * 360], 'top', true);
        }, 2000);
        
        setTimeout(()=>{
            this.props.spinIt([-90,0,0], 'top', true);
        }, 3000);
    }


}



















