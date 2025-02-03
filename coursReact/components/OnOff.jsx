import React, { Component } from "react";

class OnOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  onOff = () => {
    this.setState((prevState) => ({ isOn: !prevState.isOn }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>{this.state.isOn ? "On" : "Off"}</p>
        <button onClick={this.onOff}>
          {this.state.isOn ? "Turn Off" : "Turn On"}
        </button>
      </div>
    );
  }
}

export default OnOff;
