import React, { Component } from "react";

class ImageWithTextAndIconsBig extends Component {
  render() {
    return (
      <div className="w-full mt-8 mb-8">
        <div className="ctr md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col justify-between md:flex-row items-center md:items-start bg-white_smoke py-8">
          <div id="pgc-2-2-0" className="w-full md:w-3/5 mr-4 mb-8 md:mb-0">
            <div id="panel-2-2-0-0" className="" data-index="7">
              <div className="flex flex-col">
                <div className="">
                  <h1 className="text-4xl font-bold leading-8 pb-4 mb-4 text-primary_black">
                    Commercial Waste Collection
                  </h1>
                  <div className="ticks-container">
                    <p className="text-teritiary_grey text-base mb-3">
                      Our business clients can be from many different types of
                      company, including:
                    </p>
                    <ul className="list-none block sm:col-count-2 md:col-count-1 lg:col-count-2 relative text-teritiary_grey">
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Builders that produce heavy duty construction waste.
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Estate agents using our house rubbish clearance services
                        to clear unwanted furniture and junk left by previous
                        tenants/owners.
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Shop owners who use our regular waste removal services
                        to clear their cardboard, paper and glass bottles.
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Offices getting rid of old office furniture and outdated
                        IT equipment.
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Property maintenance companies clearing their estates
                        from clutter and fly tipping.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* second time */}
                <div className="mt-6">
                  <h1 className="text-4xl font-bold leading-8 pb-4 mb-4 text-primary_black">
                    Domestic Waste Collection
                  </h1>
                  <div className="ticks-container">
                    <p className="text-teritiary_grey text-base mb-3">
                      Our domestic clients usually use our Same Day Waste
                      Removal service to:
                    </p>
                    <ul className="list-none block sm:col-count-2 md:col-count-1 lg:col-count-2 text-teritiary_grey">
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Clear junk from lofts and basements
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Clear out space in garages and sheds.
                      </li>
                      <li className="tick-icon-before ml-4 mb-3 relative text-base">
                        Clear garden rubbish - a popular service in the Spring.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:w-2/5 pt-4 md:pt-0">
            <div className="" data-index="8">
              <div className="">
                <div className="">
                  <div className="">
                    <img
                      src="https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-768x576.jpg"
                      srcset="https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-768x576.jpg 768w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-200x150.jpg 200w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-300x225.jpg 300w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-1024x768.jpg 1024w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-555x416.jpg 555w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste-100x75.jpg 100w, https://localsiteservices.com/wp-content/uploads/2017/03/Shredded-Paper-Waste.jpg 1920w"
                      title="Shredded Paper Waste"
                      alt="Office Waste Removal"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* second time */}

            <div className="mt-4">
              <div className="">
                <div className="">
                  <div className="">
                    <img
                      src="https://localsiteservices.com/wp-content/uploads/2017/03/Skip-Local-Caged-Lorry.jpg"
                      srcset="https://localsiteservices.com/wp-content/uploads/2017/03/Skip-Local-Caged-Lorry.jpg 680w, https://localsiteservices.com/wp-content/uploads/2017/03/Skip-Local-Caged-Lorry-300x212.jpg 300w, https://localsiteservices.com/wp-content/uploads/2017/03/Skip-Local-Caged-Lorry-555x392.jpg 555w, https://localsiteservices.com/wp-content/uploads/2017/03/Skip-Local-Caged-Lorry-200x141.jpg 200w"
                      title="Local Site Services Caged Lorry"
                      alt="Caged Lorry Waste Removal"
                      class="w-full h-full"
                    />
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

export default ImageWithTextAndIconsBig;
