import React from "react";
import Toggle from "react-toggle";
import { useState } from "react";
import { Slider } from "./Slider";
import Slidernew from "./Slidernew";
import Button from "./Button";
import "../assets/icon-check.svg";

import "../components/Toggle.scss";
import "./Card.scss";

function Card() {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="card">
      <div className="uppertext">
        <div className="price">
          <span className="number">${Math.round(8 + 28 * sliderValue)}</span>
          <span className="month"> /month</span>
        </div>
        <div className="pageviews">
          <span className="views_number">
            {Math.round(10 + 200 * sliderValue)}K
          </span>
          <span className="views_text"> pageviews</span>
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
      </div>
      <div className="spacer"></div>
      <div className="features">
        <div className="list">
          <ul className="list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>{" "}
              Unlimited Websites
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>{" "}
              100% data ownership
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>{" "}
              Email reports
            </li>
          </ul>
        </div>
        <Button className="trial-button"></Button>
      </div>
    </div>
  );
}

export default Card;
