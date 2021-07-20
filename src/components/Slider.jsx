import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Card.scss";

export const Slider = ({ onChange, steps = 0 }) => {
  const handle = useRef(null);
  const track = useRef(null);
  const fillLevelRef = useRef(null);
  const sliderData = useRef({
    start: {
      x: 0,
      y: 0,
    },
    move: {
      x: 0,
      y: 0,
    },
  });
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(positionX / track.current.offsetWidth);
    }
  }, [positionX, onChange]);

  const handleMove = useCallback(
    (e) => {
      console.log("MOVE");

      sliderData.current.move.x = e.clientX;
      sliderData.current.move.y = e.clientY;
      const movement = Math.max(
        0,
        Math.min(
          track.current.offsetWidth,
          positionX + sliderData.current.move.x - sliderData.current.start.x
        )
      );
      handle.current.style.transform = `translateX(${movement}px)`;
      fillLevelRef.current.style.width = `${movement}px`;
    },
    [positionX]
  );

  const handleDragEnd = useCallback(() => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleDragEnd);

    const newPos = Math.max(
      0,
      Math.min(
        track.current.offsetWidth,
        positionX + sliderData.current.move.x - sliderData.current.start.x
      )
    );

    if (steps !== 0) {
      const relVal = newPos / track.current.offsetWidth;
      const target = Math.round(relVal / (1 / steps));

      setPositionX(track.current.offsetWidth * ((target * 1) / steps));
    } else {
      setPositionX(newPos);
    }

    console.log("END");
  }, [handleMove, positionX, steps]);

  const handleMouseDown = useCallback(
    (e) => {
      console.log("START");
      sliderData.current.start.x = e.clientX;
      sliderData.current.start.y = e.clientY;

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleDragEnd);
    },
    [handleMove, handleDragEnd]
  );

  return (
    <div className="slider">
      <div className="track" ref={track}>
        <div
          className="fill-level"
          ref={fillLevelRef}
          style={{ width: `${positionX}px` }}
        ></div>
      </div>
      <div
        className="handle"
        onMouseDown={handleMouseDown}
        ref={handle}
        style={{ transform: `translateX(${positionX}px)` }}
      ></div>
    </div>
  );
};
