import React, { Component } from "react";

class SimCardImage extends Component {
  render() {
    return (
      <div className="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col md:flex-row mt-8 mb-8">
        <div className="panel-grid-cell w-full mb-8 md:mb-0 md:w-7/12 mr-4">
          <div className="relative h-full sim-card-style-after">
            <div data-index="0">
              <div className="bg-primary_yellow p-8 rounded-sm">
                <h3 className="border-b-2 border-dashed border-teritiary_yellow font-bold capitalize text-3xl mt-0 relative mb-4 pb-4 text-primary_black">
                  Local Skip Hire Nationwide
                </h3>
                <div className="w-full">
                  <ul className="list-none">
                    <li className="tick-icon-before ml-4 mb-3 text-primary_black text-base">
                      Local Skip Hire
                    </li>
                    <li className="tick-icon-before ml-4 mb-3 text-primary_black text-base">
                      We can arrange road permits for you
                    </li>
                    <li className="tick-icon-before ml-4 mb-3 text-primary_black text-base">
                      Perfect for domestic use and construction
                    </li>
                    <li className="tick-icon-before ml-4 mb-3 text-primary_black text-base">
                      Competitive prices
                    </li>
                  </ul>
                  <p className="pt-3 pb-3 pl-3 pr-10 mt-6 text-base bg-primary_black w-full h-full items-center relative flex justify-between">
                    <a
                      className="bg-primary_black  text-white uppercase font-bold border-2 border-transparent  tracking-wider"
                      href="/quote"
                    >
                      Call our Skip Hire Hotline: 0330 320 1425
                    </a>
                    <i className="simcard-arrow fa fa-phone text-white text-4xl"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-grid-cell w-full mb-8 md:mb-0 md:w-5/12 mr-4">
          <div className="sim-card-style-after relative">
            <img
              src="https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-768x576.jpg"
              srcset="https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-768x576.jpg 768w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-300x225.jpg 300w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-1024x768.jpg 1024w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-555x416.jpg 555w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-100x75.jpg 100w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal-200x150.jpg 200w, https://localsiteservices.com/wp-content/uploads/2018/10/Rubbish-Removal.jpg 1440w"
              title="Rubbish Removal"
              alt="Waste Clearance"
              class="w-full h-full"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SimCardImage;
