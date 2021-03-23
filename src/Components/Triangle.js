import React, { useState, useEffect } from "react";

const Triangle = (props) => {
  const [position, setPosition] = useState(0);
  console.log(props.xPosition);

  useEffect(() => {
    if (props.xPosition.current) {
      let xi = props.xPosition;
      const object = xi.current.getBoundingClientRect();
      const x = object.x + object.width / 2 - 15;
      setPosition(x);
      console.log(x);
    }
  }, [props.xPosition, position]);

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
