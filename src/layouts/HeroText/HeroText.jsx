import React, { Component } from "react";

class HeroText extends Component {
  render() {
    return (
      <>
        <div className="text-white z-20 pl-6 pr-10 sm:pl-12 sm:pr-24 lg:pl-24 lg:pr-32 xl:pl-40 xl:pr-48 font-libre-baskerville">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-6-5xl max-w-4-5xl leading-tight">
            We are a Chesneys premier dealer
          </h1>
          <div className="flex flex-col sm:flex-row mb-4 mt-2">
            <div className=" sm:pr-8 sm:border-r-2 text-lg sm:text-xl border-white">
              <span className="text-tfcYellow">Call Us:</span>
              01892 664813
            </div>

            <div className="sm:ml-8 text-lg sm:text-xl ">
              <span className="text-tfcYellow">Email Us: </span>
              <a href="mailto:sales@the-fireplace.co.uk">
                sales@the-fireplace.co.uk
              </a>
            </div>
          </div>
          <p className="max-w-xl text-base sm:text-lg mb-8">
            We have over 20 years experience providing bespoke heating and
            outdoor living solutions for the South East of England. Based in
            Crowborough, East Sussex, our showroom showcases a wide range of
            fireplaces, wood burning stoves, gas fires &amp; stoves, electric
            fires &amp; stoves and fireside accessories from brands including
            Chesneys, Stovax &amp; Gazco and Rais.
          </p>
          <a href="https://the-fireplace.jdsx.app/home/">
            <button className="border-2 border-tfcYellow px-4 py-1">
              <span className="">VIEW OUR COLLECTIONS</span>
            </button>
          </a>
        </div>
      </>
    );
  }
}

export default HeroText;
