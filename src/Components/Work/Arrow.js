import React from "react";
import { ReactComponent as ArrowSvg } from "../../images/optimised.svg";

const Arrow = () => {
  return (
    <>
      <div className="arrowBottom">
        <ArrowSvg className="arrow" />

        {/*<img src={arrow} alt="Cristian Huijse heise logo" />
        <i class="icono-arrow1-down"></i>*/}
      </div>
    </>
  );
};

export default Arrow;
