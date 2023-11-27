import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shows: false,
    };
  }

  toggleShows = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <button onClick={this.toggleShows}>
          {this.state.shows ? "Hide" : "Show"}
        </button>
        {this.state.shows && <Profile />}
      </div>
    );
  }
}

export default App;
