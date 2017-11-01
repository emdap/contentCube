import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HidingDiv from './elementHelpers/hidingDiv';
import ClickingH from './elementHelpers/clickingH';
//experience

export default class Back extends React.Component{


	constructor(props) {
		super(props);
		this.state = {
			work: true, //declare all menu headings as a state, set to false initially
			school: false
		}

		this.handleMenuShow = this.handleMenuShow.bind(this);

	}

	handleMenuShow(which){

		switch (which){
			case 'work': 
				this.setState(()=>{
					return{
					work: !this.state.work,
					school: false
				}});


				break;
			case 'school': 
				this.setState(()=>{return{
					school: !this.state.school,
					work: false
				}});


				break;
			}

	}



	render(){

		pageClass = this.props.disp;
		
		return(


	       <div id="pageHolder" className={pageClass}>
				<div id="experience">
			    <h1>Relevant Experience</h1>
			    <div id="pageMenu">
			    {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
			    <ClickingH activate={this.state.work} trigger={"work"} handleShow={this.handleMenuShow}>
			 	Work
			 	</ClickingH>

			    <ClickingH activate={this.state.school} initClass={"middleMenu"} trigger={"school"} handleShow={this.handleMenuShow}>
			    School
			    </ClickingH>

			    </div>

			    <div id="pHolder">
			{/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
			    <HidingDiv trigger={this.state.work}>
			    <h5>Programmer/Technician • Amec Foster Wheeler</h5>
			    <h7><span className="italic">July 2016 - August 2017</span></h7>
			    <p><strong>During</strong> my time at Amec Foster Wheeler I worked in the Project Planning department, where I did full stack software development and provided technical support.
			    </p>
			    <p><strong>My</strong> main focus was creating automated Excel reports and automating pre-existing Excel reports, which greatly reduced error and saved company time. Additionally, I would revise the code structure and create documentation for pre-existing programs, which improved usability and trouble shooting. Otherwise, I fulfilled ad hoc requests to add features to other programs or reports, full stack web development and website maintenance, and helping people both in and outside of my department solve technical issues.</p>
			    <p><strong>The</strong> biggest project I completed was creating an ETL process for analyzing financial information supplied by the company's vendors. I created it using Microsoft Access and Excel. The end result was a fully automated dashboard for every vendor, which included multiple graphs and metrics to show the accuracy of their reporting.</p>
			    <h6>Key Technologies</h6>
			    <ul className="inner">
			    <li>HTML/CSS and Bootstrap</li>
			    <li>Javascript</li>
			    <li>jQuery</li>
			    <li>FileZilla</li>
			    <li>Microsoft Access</li>
			    <li>Microsoft Excel</li>
			    <li>SQL Server Managment Studio</li>
			    <li>Talend</li>
			    <li>VBA</li>	
			   	</ul>

			    </HidingDiv>

			    <HidingDiv trigger={this.state.school}>
			    
			    <h5>University of Toronto</h5>
			    <h7><span className="italic">Sept 2011 - Jan 2016</span></h7>
			    <p><strong>I received</strong> an Honors Bachelor of Science from the University of Toronto and majored in <span className="bold">Computer Science</span> and <span className="bold">Math</span>, in addition to a minor in Philosophy.
			    </p>
			    <h6>Favorite Classes</h6>
			    <ul className="inner">
			    <li>Machine Learning, Fall 2015</li>
			    <p className="inner">Neural networks, logistic regression, conducted experiments, cross-validation to optimize parameters</p>
			    
			    <li>Intro to Visual Computing, Winter 2015</li>
			    <p className="inner">Python, NumPy, SciPy, manipulating images programmatically</p>

			    <li>System Programming, Fall 2014</li>
			    <p className="inner">C, memory allocation, Unix
			    </p>

			    <li>Software Design, Summer 2014</li>
			    <p className="inner">Java, Subversion, unit and regression testing, the SCRUM model for projects</p>	
			   	</ul>
			   	<span className="break"/>

			   	<h5>Udemy</h5>
			    <p><strong>I took</strong> a course at <a className="link" href="www.udemy.com">Udemy</a> on Meteor and React. Currently I'm working through a course on app development using Swift.</p>

			    </HidingDiv>

			    </div>
			</div>
		</div>



		);
	}
}

















