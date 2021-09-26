import React from 'react'
import "../styles/hire.sass"
import work1 from "../assets/work1.svg"
import work2 from "../assets/work2.svg"
import work3 from "../assets/work3.svg"
import work4 from "../assets/work4.svg"

function Work() {
    return (
        <div className="work">
          <div className="work-title">
            <h1>Work</h1>
          </div>
          <div className="work-flex1">
            <div className="work-flex1-pic">
              <img src={work2} alt="Treva" />
            </div>
            <div className="work-flex2-pic">
              <img src={work1} alt="Treva" />
          
            </div>
          </div>
          <div className="work-flex2">
            <div className="work-flex1-pic">
              <img src={work3} alt="Treva" />
            </div>
            <div className="work-flex2-pic">
              <img src={work4} alt="Treva" />
          
            </div>
          </div>
        </div>
      );
}

export default Work
