import React, { useEffect, useState } from "react";

const TransitionFade = (props) => {
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(true);
    }, props.delay * 1000);
  }, []);

  return (
    <>
      {opacity ? (
        <div className="visible">{props.children}</div>
      ) : (
        <div className="hidden">{props.children}</div>
      )}
    </>
  );
};

export default TransitionFade;
