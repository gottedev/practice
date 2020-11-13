import React, { Component } from "react";
import HeroText from "../HeroText/HeroText";
import Nav from "../Nav/Nav";

class Hero extends Component {
  render() {
    return (
      <div className="relative">
        <div className="absolute bg-blac-tfc-overlay w-full h-full top-0 left-0 z-10"></div>
        <Nav />
        <div
          className="h-screen w-screen bg-cover-important flex items-center "
          style={{
            background:
              "url(https://the-fireplace.jdsx.app/wp-content/uploads/2020/11/bg.png) center center no-repeat",
          }}
        >
          <HeroText />
        </div>
      </div>
    );
  }
}

export default Hero;
