import React from "react";
import ClickingH from "../components/clickingH";
import HidingDiv from "../components/hidingDiv";
//about

export default class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: true, //declare all menu headings as a state, set to false initially
    };

    this.handleMenuShow = this.handleMenuShow.bind(this);
  }

  handleMenuShow(which) {
    switch (which) {
      case "hello":
        this.setState(() => {
          return {
            hello: !this.state.hello,
          };
        });

        break;
    }
  }

  render() {
    const pageClass = this.props.disp;
    return (
      <div className={"pageHolder " + pageClass}>
        <div id="about">
          <h1>Emma DaPonte</h1>
          <h3>emma.daponte@mail.utoronto.ca • (416) 452 6279</h3>
          <div className="pageMenu">
            {/* create ClickingH for each menu item, activate/trigger corresponds to state/name of header */}
            <ClickingH
              activate={this.state.hello}
              trigger={"hello"}
              handleShow={this.handleMenuShow}
            >
              Hello!
            </ClickingH>
          </div>

          <div className="pHolder">
            {/* create HidingDiv for each menu, displays content when corresponding ClickingH clicked, trigger corresponds to state */}
            <HidingDiv trigger={this.state.hello}>
              <img border="0" className="portrait" src="/images/face.jpg" />
              <p>
                <strong>No longer maintained.</strong>
              </p>
              <p>
                I created this website in 2017 when I was still starting out as
                a software developer. I had never made or deployed a website by
                myself, so I took some online crash courses in React, and this
                was the result. If you want to see something more recent I've
                created, head over to the{" "}
                <a href="https://css-garden.fly.dev/" className="link">
                  CSS Garden
                </a>
                .
              </p>
              <p>
                {" "}
                <strong>Thanks</strong> for visiting my website. I first found a
                love for coding back in the early 2000s designing pages for my
                Neopets. Now I have a{" "}
                <a
                  className="link"
                  onClick={() => {
                    this.handleRotate("school");
                  }}
                >
                  bachelor's degree
                </a>{" "}
                from the University of Toronto in Computer Science, and a year{" "}
                <a
                  className="link"
                  onClick={() => {
                    this.handleRotate("work");
                  }}
                >
                  experience working as a programmer
                </a>{" "}
                in a corporate environment. I'm always looking to learn more and
                prefer a hands-on approach by experimenting with new
                technologies to problem solve, as seen in some of my{" "}
                <a
                  className="link"
                  onClick={() => {
                    this.handleRotate("projects");
                  }}
                >
                  personal projects
                </a>
                . You can download my resume{" "}
                <a
                  href="/Emma-DaPonte_Resume-2019.pdf"
                  className="link"
                  download
                >
                  here
                </a>
                . Or send me an email by{" "}
                <span onClick={this.props.handleEmail}>clicking here!</span>
              </p>
              <p>
                <strong>When</strong> I'm not coding you might find me biking
                around Toronto or enjoying a coffee with my sketch book. Other
                hobbies include fermenting food, collecting plants, and petting
                neighborhood cats.
              </p>
              <p>
                <strong>Feel</strong> free to get in touch via email or phone as
                listed at the top, or send an email through this website using
                the button below.
              </p>
            </HidingDiv>
          </div>
        </div>

        <h4>
          <button>
            <a className="noLink" href="/Emma-DaPonte_Resume-2019.pdf" download>
              Download Resume
            </a>
          </button>
        </h4>
      </div>
    );
  }

  handleRotate(where) {
    switch (where) {
      case "work":
        this.props.spinIt([-180, 0, 0], "back", true, "work");
        break;

      case "school":
        this.props.spinIt([-180, 0, 0], "back", true, "school");
        break;

      case "projects":
        this.props.spinIt([0, -90, 0], "right", true, "personal");
        break;
    }
  }
}
