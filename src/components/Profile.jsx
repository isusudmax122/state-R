import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Saber rbai",
      bio: "Tunisian singer,actor,and composer",
      imgSrc:
        "https://yt3.ggpht.com/a/AATXAJwraXTtDbAknRP8bPnqweXQp6_YmthSV3-flw=s900-c-k-c0xffffffff-no-rj-mo",
      profession: "Singer",
      seconds: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
  }
  render() {
    return (
      <div className="Person">
        <img src={this.state.imgSrc} alt="Person Image" />
        <h1>{this.state.fullName}</h1>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
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
