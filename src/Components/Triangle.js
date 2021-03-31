import React, { useState, useEffect } from "react";

const Triangle = (props) => {
  const [position, setPosition] = useState(0);

  const updatePosition = () => {
    if (props.xPosition.current) {
      let xi = props.xPosition;
      const object = xi.current.getBoundingClientRect();
      const x = object.x + object.width / 2 - 15;
      setPosition(x);
    }
  };

  useEffect(updatePosition, [props.xPosition, position]);

  useEffect(() => {
    window.addEventListener("resize", updatePosition, true);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position]);

  return (
    <>
      <div
        className="triangle"
        style={{
          marginLeft: position,
        }}
      />
    </>
  );
};

export default Triangle;
