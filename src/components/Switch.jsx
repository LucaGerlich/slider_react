import React from "react";
import "./Card.scss";

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div>
      <label className="toggle">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span class="toggleslider"></span>
      </label>
    </div>
  );
};

export default Switch;
