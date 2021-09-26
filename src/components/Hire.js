import React from "react";
import "../styles/hire.sass";
import flex1 from "../assets/flex1.svg"
import flex22 from "../assets/flex22.svg"
import flex33 from "../assets/flex33.svg"
import flex2 from "../assets/flex2.svg"
function Hire() {
  return (
    <div className="hire">
      <div className="hire-title">
        <h1>Hire</h1>
      </div>
      <div className="hire-flex1">
        <div className="hire-flex1-pic">
          <img src={flex22} alt="Treva" />
        </div>
        <div className="hire-flex2-pic">
          <img src={flex1} alt="Treva" />
      
        </div>
      </div>
      <div className="hire-flex2">
        <div className="hire-flex1-pic">
          <img src={flex2} alt="Treva" />
        </div>
        <div className="hire-flex2-pic">
          <img src={flex33} alt="Treva" />
      
        </div>
      </div>
    </div>
  );
}

export default Hire;
