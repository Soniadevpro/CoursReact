// import  { Component } from "react";

// class OnOff extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOn: false,
//     };
//   }

//   onOff = () => {
//     this.setState((prevState) => ({ isOn: !prevState.isOn }));
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <p>{this.state.isOn ? "On" : "Off"}</p>
//         <button onClick={this.onOff}>
//           {this.state.isOn ? "Turn Off" : "Turn On"}
//         </button>
//       </div>
//     );
//   }
// }

// export default OnOff;


// import { useState } from "react";

// function ToggleSwitch() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <>
//       <p>{isOn ? "On" : "Off"}</p>
//       <button onClick={() => setIsOn(!isOn)}>Toggle</button>
//     </>
//   );
// }

// export default ToggleSwitch;
import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      {isOn ? "On" : "Off"} <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
};

export default ToggleSwitch;
