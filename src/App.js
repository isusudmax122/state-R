import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "Saber rbai",
      bio: "Tunisian singer,actor,and composer",
      imgSrc:
        "https://yt3.ggpht.com/a/AATXAJwraXTtDbAknRP8bPnqweXQp6_YmthSV3-flw=s900-c-k-c0xffffffff-no-rj-mo",
      profession: "Singer",
      shows: false,
      seconds: 0,
    };
  }

  componentDidMount() {
    if (this.state.shows) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
    this.setState({ seconds: 0 });
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  toggleShows = () => {
    this.setState(
      (prevState) => ({
        shows: !prevState.shows,
      }),
      () => {
        if (this.state.shows) {
          this.startTimer();
        } else {
          this.stopTimer();
        }
      }
    );
  };

  render() {
    return (
      <div className="App">
      <NavBar/> 
        <button onClick={this.toggleShows}>
          {this.state.shows ? "Hide" : "Show"}
        </button>
        {this.state.shows && (
          <div className="Person">
            <img src={this.state.imgSrc} alt="Person Image" />
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <p>{this.state.profession}</p>
          </div>
        )}
        <div>
          <h1>Timer</h1>
          <p>
            This component has been mounted for {this.state.seconds} seconds.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
