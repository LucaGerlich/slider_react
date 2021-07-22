import React from "react";
import Toggle from "react-toggle";
import ToggleTech from "./ToggleTech";
import { useState } from "react";
import { Slider } from "./Slider";
import Slidernew from "./Slidernew";
import Button from "./Button";
import "../assets/icon-check.svg";

import "../components/Toggle.scss";
import "./Card.scss";

const prices = [
  {
    pageViews: "10K",
    price: 8,
  },
  {
    pageViews: "50K",
    price: 12,
  },
  {
    pageViews: "100K",
    price: 16,
  },
  {
    pageViews: "500K",
    price: 24,
  },
  {
    pageViews: "1M",
    price: 36,
  },
];
function setPrice() {
  console.log(prices);
}

function Card() {
  const [sliderValue, setSliderValue] = useState(0);
  const [toggleBool, setToggleBool] = useState(false);

  console.log(toggleBool, setToggleBool);
  return (
    <div className="card">
      <div className="uppertext">
        <div className="pageviews">
          <span className="views_number">
            {prices[sliderValue * (prices.length - 1)].pageViews}
          </span>
          <span className="views_text"> PAGEVIEWS</span>
        </div>
        <div className="price">
          <span className="number">
            ${prices[sliderValue * (prices.length - 1)].price}.00
          </span>
          <span className="month"> / month</span>
        </div>
      </div>
      <Slider
        onChange={(sliderValue) => {
          setSliderValue(sliderValue);
        }}
        steps={prices.length - 1}
      ></Slider>
      <div className="switch">
        <span className="month-billing">Monthly Billing</span>
        <div className="switchbutton">
          <label>
            <ToggleTech></ToggleTech>
          </label>
        </div>
        <span className="year-billing">Yearly Billing</span>
      </div>
      <div className="spacer"></div>
      <div className="features">
        <div className="list">
          <ul className="list-items">
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
