import React from "react";

export default class SecretMover extends React.Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
    this.handleInc = this.handleInc.bind(this);
    this.state = {
      coords: [0, 0, 0],
      class: "hide",
    };
  }

  render() {
    return (
      <div id="cubeMover" className={this.state.class}>
        <input id="xRot" type="text" placeholder="X" />
        <input id="yRot" type="text" placeholder="Y" />
        <input id="zRot" type="text" placeholder="Z" />

        <button
          id="xyzInc"
          onClick={() => {
            this.handleInc();
          }}
        >
          Increment by input
        </button>
        <button
          onClick={() => {
            this.handleMove();
          }}
        >
          Rotate to input
        </button>

        <button onClick={this.props.reset}>Go Back</button>

        <div id="rotInfo">
          Current Rotation:
          <p>
            X = {this.state.coords[0]}, Y = {this.state.coords[1]}, Z ={" "}
            {this.state.coords[2]}
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return {
          class: "show",
        };
      });
    }, 50);
  }

  handleInc() {
    const [x, y, z] = [
      this.state.coords[0] + document.getElementById("xRot").value * 1,
      this.state.coords[1] + document.getElementById("yRot").value * 1,
      this.state.coords[2] + document.getElementById("zRot").value * 1,
    ];

    this.setState(() => {
      return {
        coords: [x, y, z],
      };
    });

    this.props.handleRotate([x, y, z]);
  }

  handleMove() {
    const [x, y, z] = [
      document.getElementById("xRot").value * 1,
      document.getElementById("yRot").value * 1,
      document.getElementById("zRot").value * 1,
    ];

    this.setState(() => {
      return {
        coords: [x, y, z],
      };
    });

    this.props.handleRotate([x, y, z]);
  }
}
