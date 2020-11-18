import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="w-full h-full font-montserrat relative">
        <div className="w-full bg-primary_black text-white font-medium text-base lg:text-sm">
          <div className="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="flex justify-center lg:justify-end py-1">
              <div className="flex">
                <div className="">
                  <ul className="flex flex-wrap flex-row list-none first-border-none">
                    <li>
                      <a
                        className="font-bold text-primary_red px-2 border-l border-secondary_black"
                        href="https://localsiteservices.com/covid-19-update/"
                      >
                        Covid-19 Update
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        className="px-2 border-l border-secondary_black"
                        href="https://localsiteservices.com/about-us/"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="px-2 border-secondary_black border-l"
                        href="https://localsiteservices.com/reviews/"
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="px-2 border-secondary_black border-l"
                        href="https://localsiteservices.com/faq/"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        className="px-2 border-secondary_black border-l"
                        href="https://localsiteservices.com/locations/"
                      >
                        Locations
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        className="px-2 border-l border-secondary_black"
                        href="https://localsiteservices.com/licences/"
                      >
                        Licences
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="px-2 border-l border-secondary_black"
                        href="https://localsiteservices.com/privacy/"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="px-2 border-l border-secondary_black"
                        href="https://localsiteservices.com/terms-conditions/"
                        aria-current="page"
                      >
                        T&amp;C
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-primary_black text-white">
          <div className="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-between items-start">
            <div className="lg:-mt-4">
              <a href="https://localsiteservices.com">
                <img
                  src="https://localsiteservices.com/wp-content/uploads/2020/03/Local-Site-White-WEB.png"
                  alt="Local Site Services"
                  srcset="
                  https://localsiteservices.com/wp-content/uploads/2020/03/Local-Site-White-WEB.png,
                  https://localsiteservices.com/wp-content/uploads/2020/03/Local-Site-White-RET.png 2x
                "
                  className="max-w-full h-auto"
                  width="185"
                  height="112"
                />
              </a>
            </div>
            <div className="contact text-right">
              <div className="hidden lg:block">
                <div className="mr-4">
                  <h2 className="mt-0 mb-1 font-bold text-primary_yellow text-xl leading-none">
                    Call now to get a quote
                  </h2>
                  <div className="">
                    <h3 className="text-4xl -mt-1 -mb-1 font-bold leading-none">
                      <a href="tel:03303201425">0330&nbsp;320&nbsp;1425</a>
                    </h3>
                    <p className="text-primary_yellow text-xl tracking-widest">
                      Open 9am-5pm Mon-Fri
                    </p>
                  </div>
                </div>
              </div>
              <div className="block lg:hidden">
                <button
                  type="button"
                  className="flex items-center bg-primary_yellow px-3 py-2 text-primary_black font-bold text-sm rounded-sm mt-8 mb-1 hover:bg-white"
                >
                  <span className="mr-2">MENU</span>
                  <span className="align-middle ml-2 h-px-18 w-px-18 flex flex-col justify-around cursor-pointer hover:transform hover:rotate-90 ease-in duration-100">
                    <span className="bg-primary_black h-px-3 w-px-18"></span>
                    <span className="bg-primary_black h-px-3 w-px-18"></span>
                    <span className="bg-primary_black h-px-3 w-px-18"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 overflow-hidden lg:overflow-visible lg:h-auto lg:block w-full bg-primary_black text-white">
          <div
            className="ctr bg-primaryYellow lg:bg-transparent md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:-mb-10 z-50 relative"
            role="navigation"
          >
            <div className="w-full bg-primary_yellow z-40 lg:shadow-primary rounded-sm">
              <ul className="links-wrapper flex w-full justify-between lg:flex-row lg:px-16 xl:px-32  text-primary_black font-bold text-xl lg:text-sm">
                <li className="py-1 lg:py-4">
                  <a href="https://localsiteservices.com/">Home</a>
                </li>
                <li className="py-1 lg:py-4">
                  <a
                    className=""
                    href="https://localsiteservices.com/domestic-skip-hire/"
                  >
                    Domestic Skip Hire
                  </a>
                </li>
                <li className="submenu-parent sub-menu-hover-parent py-1 lg:py-4 lg:relative">
                  <a
                    className="icon-arrow-after-mobile lg:icon-arrow-after"
                    href="https://localsiteservices.com/commercial-skip-hire/"
                    aria-current="page"
                  >
                    Commercial Skip Hire
                  </a>
                  <ul className="submenu-child sub-menu-hover-child lg:absolute lg:bg-primary_black lg:top-13 lg:z-10 lg:border-primary_yellow lg:border-t-1 lg:border-solid lg:text-primary_yellow font-normal lg:w-48">
                    <li
                      id="menu-item-180"
                      className=" px-3 py-4 border-t-1 border-black"
                    >
                      <a
                        href="https://localsiteservices.com/commercial-skip-hire/"
                        aria-current="page"
                      >
                        Trade Skip Hire
                      </a>
                    </li>
                    <li
                      id="menu-item-179"
                      className=" px-3 py-4 border-t-1 border-black"
                    >
                      <a href="https://localsiteservices.com/trade-accounts/">
                        Trade Accounts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="py-1 lg:py-4">
                  <a href="https://localsiteservices.com/skip-sizes/">
                    Skip Sizes
                  </a>
                </li>
                <li className="submenu-parent sub-menu-hover-parent py-1 lg:py-4 lg:relative">
                  <a
                    className="icon-arrow-after-mobile lg:icon-arrow-after"
                    href="#"
                  >
                    Waste Services
                  </a>
                  <ul className="submenu-child sub-menu-hover-child lg:absolute lg:bg-primary_black lg:top-13 lg:z-10 lg:border-primary_yellow lg:border-t-1 lg:border-solid text-primary_yellow  font-normal w-48">
                    <li
                      id="menu-item-204"
                      className=" px-3 py-4 border-t-1 border-black"
                    >
                      <a href="https://localsiteservices.com/rubbish-removal/">
                        Rubbish Removal
                      </a>
                    </li>
                    <li
                      id="menu-item-4135"
                      className=" px-3 py-4 border-t-1 border-black"
                    >
                      <a href="https://localsiteservices.com/fly-tipping-removal/">
                        Fly Tipping Removal
                      </a>
                    </li>
                    <li
                      id="menu-item-213"
                      className="px-3 py-4 border-t-1 border-black"
                    >
                      <a href="https://localsiteservices.com/grab-hire/">
                        Grab Hire
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="py-1 lg:py-4">
                  <a href="https://localsiteservices.com/arrange-collection/">
                    Arrange Collection
                  </a>
                </li>
                <li className="py-1 lg:py-4">
                  <a href="https://localsiteservices.com/contact-us/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:hidden w-full bg-primary_black text-white pt-4 pb-4">
          <div className="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full">
            <div className="contact text-center">
              <div className="">
                <div className="mr-4">
                  <h2 className="mt-0 mb-1 font-bold text-primary_yellow text-xl leading-none">
                    Call now to get a quote
                  </h2>
                  <div className="">
                    <h3 className="text-4xl -mt-1 -mb-1 font-bold leading-none">
                      <a href="tel:03303201425">0330&nbsp;320&nbsp;1425</a>
                    </h3>
                    <p className="text-primary_yellow text-xl tracking-widest">
                      Open 9am-5pm Mon-Fri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
