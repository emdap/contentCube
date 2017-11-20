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
		this.handleColor = this.handleColor.bind(this);

	}

	componentWillReceiveProps(props){
		if(props.changeH){
			this.setState(()=>{return{
				work: props.showWork,
				school: props.showSchool
			}});
		}
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
			    <span className="italic">July 2016 - August 2017</span>
			    <p><strong>During</strong> my time at Amec Foster Wheeler I worked in the Project Planning department, where I did full stack software development and provided technical support.
			    </p>
			    <p><strong>My</strong> main focus was creating automated Excel reports and automating pre-existing Excel reports. The automated reports used data both from SQL Server databases and human generated reports. This was a great opportunity to learn about working with large amounts of data, and also for handling human error in manual reports. The reports that I automated greatly reduced error and saved company time, allowing for more advanced analysis on the same data. When the automated reports required some human input (like importing files), I created user friendly interfaces with in-depth logs and error descriptions for maximum ease and efficiency.</p>

			    <p><strong>I was</strong> also responsible for optimizing, debugging, and documenting pre-existing code/programs. I hold my code to a high standard and imparted this on the company programs I worked with to ensure that they would be maintainable by future developers.</p>

			    <p><strong>Otherwise,</strong> I fulfilled ad hoc requests to add features to other programs or reports, full stack web development and website maintenance, and helping people both in and outside of my department solve technical issues.</p>

			    <p><strong>The</strong> biggest project I completed was an ETL process for analyzing the accuracy of financial reports provided by our vendors. I created it using Microsoft Access and Excel. The analysis results were presented in a fully automated dashboard for each vendor which incorporated various graphs and metrics. The automated dashboard needed to be created once a month, and the input for each vendor was four reports spanning two months. I completed all technical aspects of the project myself and structured the database with the analysis queries in mind. There had been a prototype database structure developed previously but I completely overhauled this and was able to cut querying time in half. I also designed a user interface for importing the reports that, when encountering a formatting issue (such as the vendor name location not following the official template), would alert the user to exactly where the issue occured, the information that was not able to be extracted and why, and instructions on how to fix the issue. Good error handling was very important since the process was meant for someone without programming knowledge who couldn't just debug the program if something unexpected happened.</p>


			    <h6>Key Technologies</h6>
			    <ul className="inner">
			    <li>FileZilla</li>
			    <li>HTML/CSS and Bootstrap</li>
			    <li>Javascript</li>
			    <li>jQuery</li>
			    <li>Microsoft Access</li>
			    <li>Microsoft Excel</li>
			    <li>Primavera P6</li>
			    <li>SQL Server Managment Studio</li>
			    <li>Talend</li>
			    <li>VBA</li>	
			   	</ul>

			    </HidingDiv>

			    <HidingDiv trigger={this.state.school}>
			    
			    <h5>University of Toronto</h5>
			    <span className="italic">Sept 2011 - Jan 2016</span>
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
			    <p><strong>I took</strong> a course at <a className="link" href="http://www.udemy.com" target="_blank">Udemy</a> on Meteor and React. Currently I'm working through a course on app development using Swift.</p>

			    </HidingDiv>

			    </div>
			</div>
			<h4><button onClick={this.handleColor}>Random Background</button></h4>
		</div>



		);
	}

	handleColor(){
		var red = Math.round(255 * Math.random());
		var green = Math.round(255 * Math.random());
		var blue = Math.round(255 * Math.random());

		var newColor = "rgb(" + red + "," + green + "," + blue + ")";

		this.props.toggleColor(newColor);
	}

}

















