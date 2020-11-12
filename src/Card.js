import React from "react";
import "./Card.scss";
import prac from "./prac.jpg";

function Card(props) {
  return (
    <div class="image_grid">
      <div className="card-container">
        <div className="image-container">
          <img src="/test.jpg" />
        </div>
        <div className="content-container">
          {/* <div className="content-title">Hello Hey There</div> */}
          {/* <div className="content-desc">
            ajsdklasjdl asjdklasjdlasd dshajskldhkajsdh kaldshakd
          </div> */}
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src="/test.jpg" />
        </div>
        <div className="content-container">
          {/* <div className="content-title">Hello Hey There</div> */}
          {/* <div className="content-desc">
            ajsdklasjdl asjdklasjdlasd dshajskldhkajsdh kaldshakd
          </div> */}
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src="/test.jpg" />
        </div>
        <div className="content-container">
          {/* <div className="content-title">Hello Hey There</div> */}
          {/* <div className="content-desc">
            ajsdklasjdl asjdklasjdlasd dshajskldhkajsdh kaldshakd
          </div> */}
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src="/test.jpg" />
        </div>
        <div className="content-container">
          {/* <div className="content-title">Hello Hey There</div> */}
          {/* <div className="content-desc">
            ajsdklasjdl asjdklasjdlasd dshajskldhkajsdh kaldshakd
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
