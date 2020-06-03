import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();

    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  componentDidMount(evt) {
    window.document.addEventListener('keydown', this.handleKeyDown);
    this.audio.current.addEventListener('ended', () => {
      const parent = this.audio.current.parentNode;
      parent.classList.remove('playing');
    });
  }

  componentWillUnmount(){
    window.document.removeEventListener("keydown", this.handleKeyDown);
  }

  playSoundColor = (evt) => {

    this.audio.current.play();
    this.audio.current.currentTime = 0;
    const parent = this.audio.current.parentNode;
    const display = document.getElementById("display");
    const audioClipTag = this.props.audioId;
    
    display.textContent = audioClipTag;
    
    parent.classList.add('playing');
    const body = document.querySelector("body");

    const randomize1 = Math.floor(256 * Math.random());
    const randomize2 = Math.floor(256 * Math.random());
    const randomize3 = Math.floor(256 * Math.random());

    body.style.backgroundColor = `rgb(${randomize1}, ${randomize2}, ${randomize3})`;
  };

  handleKeyDown(e) {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    const keyText = this.props.text;
    const audioClipTag = this.props.audioId;
    if (id === keyText) {
      const parent = audio.parentNode;
      parent.classList.add('playing');

      this.audio.current.play();

      const body = document.querySelector("body");
      const display = document.getElementById('display');

      display.textContent = audioClipTag;

      const randomize1 = Math.floor(256 * Math.random());
      const randomize2 = Math.floor(256 * Math.random());
      const randomize3 = Math.floor(256 * Math.random());

      body.style.backgroundColor = `rgb(${randomize1}, ${randomize2}, ${randomize3})`;

      audio.addEventListener('ended', () => {
        parent.classList.remove('playing');
      });
    }

    
  }

  render() {
    const { audioId, text, audio } = this.props;

    return (
      <div>
        <div className="drum-pad" onClick={this.playSoundColor} id={`drum-${text}`} >
          {text}
          <audio ref={this.audio} src={audio} className="clip" id={text} />
          <p id={audioId}></p>
        </div>
      </div>
    );
  }
}

export default Box;
