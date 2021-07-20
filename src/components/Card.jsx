import React from "react";
import Toggle from "react-toggle";
import { useState } from "react";
import { Slider } from "./Slider";

import "../components/Toggle.scss";
import "./Card.scss";

function Card() {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="card">
      <div className="uppertext">
        <div className="pageviews">100K pageviews</div>
        <div className="price">
          <span className="number">${Math.round(100 * sliderValue)}</span>
          <span className="month"> /month</span>
        </div>
      </div>
      <Slider
        onChange={(sliderValue) => {
          setSliderValue(sliderValue);
        }}
        steps={5}
      ></Slider>
      <div className="switch">
        <span className="month-billing">Monthly Billing</span>
        <div className="switchbutton">
          <label>
            <Toggle defaultChecked={true} icons={false} onChange={false} />
          </label>
        </div>
        <span className="year-billing">Yearly Billing</span>
        <div className="discountbox">
          <span className="discount">25% dicount</span>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="features">
        <div className="list">
          <ul>Unlimited Websites</ul>
          <ul>100% data ownership</ul>
          <ul>Email reports</ul>
        </div>
        <div className="button">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
