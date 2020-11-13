import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="flex justify-between items-center">
          <img
            src="https://the-fireplace.jdsx.app/wp-content/themes/the-fireplace/img/logos/tfc_logo_white.svg"
            alt="#"
            className=" mr-4 lg:mr-8 w-48 sm:w-64"
          />
          <div className="hidden xl:block first-border-none text-white">
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              About
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              Showroom
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              Our Work
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              Brands
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              News
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              Brouchure
            </a>
            <a className="no-underline px-4 border-l-2 border-white" href="#">
              Contact Us
            </a>
          </div>
          <div className="xl:hidden relative block w-8 h-5">
            <span className="absolute h-1 w-6  bg-white top-0"></span>
            <span className="absolute h-1 w-6  bg-white top-4"></span>
            <span className="absolute h-1 w-6  bg-white top-8"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
