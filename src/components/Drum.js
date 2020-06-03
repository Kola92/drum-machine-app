import React, { Component } from "react";
import Box from "./Box";

const sounds = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4",
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open HH",
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick_n_Hat",
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed HH",
  },
];

export default class Drum extends Component {


  render() {
    // const { pads } = this.state;
    return (
      <div id="drum-machine">
        <div className="drum-container">
          {sounds.map((sound, index) => (
            <Box
              text={sound.key}
              key={index}
              className="drum-pad"
              audio={sound.mp3}
              audioId={sound.name}
            />
          ))}
        </div>
        <div className="control-container">
          <div id="display" className="display-box"></div>
        </div>
      </div>
    );
  }
}
