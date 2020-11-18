import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div class="relative bg-primary_yellow pt-12 pb-8 text-center ">
        <div class="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <h1 class="text-3xl lg:text-5xl text-primary_black font-bold">
            Welcome to Local Site Services
          </h1>
        </div>
      </div>
    );
  }
}

export default Banner;
