import React from "react";
//contact

export default class Left extends React.Component {
  render() {
    const pageClass = this.props.disp;

    return (
      <div className={"pageHolder " + pageClass}>
        <div id="contact">
          <h1>Get in Touch</h1>

          <div className="content">
            <h3>
              Feel free to contact me with any opportunities or inquiries.
            </h3>
            <p>
              <strong>Email:</strong> ecodapo@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}
