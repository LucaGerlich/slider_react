import React from "react";

export default function Button() {
  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("Button was pressed!!!")
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Start my trial</button>
    </div>
  );
}
