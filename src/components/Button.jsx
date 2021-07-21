import React from "react";

export default function Button() {
  const handleButtonClick = (event) => {
    event.preventDefault();
    alert("Clam down it's just a sample");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Start my trial</button>
    </div>
  );
}
