import React, { useState } from "react";
import serviceapi from "../APIs/serviceapi";

const Service = () => {
  const [workData] = useState(serviceapi);
  return (
    <div className="work-container  container services">
      <h1 className="main-heading text-center">
        {" "}
        <br /> Why Choose Us
      </h1>
      <br />
      <div className="row">
        {workData.map((curElem) => {
          const {logo, title, info } = curElem;
          return (
            <>
              <div className="col-12 col-lg-3 text-center work-container-subdiv">
                <div className="bg-image hover-zoom">
                  <img src={logo}/>
                </div>
                <h2 className="sub-heading srvs-title">{title}</h2>
                <p className="main-hero-para w-100 "  style={{ textJustify: 'justify' }}>{info}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
