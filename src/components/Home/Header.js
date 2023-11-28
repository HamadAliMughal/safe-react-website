import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  return (
    <header>
      <div
        className="text-center bg-image"
        style={{ backgroundImage: "url('./img/main-back.jpg')", height: 580 }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100 header-text">
            <div className="text-white">
              <h1 className="mb-3 caption">
                SAFE
                  </h1>
                  <h3 className="mb-3">
                  Elevating Security, Simplifying Trust
                  </h3>

            
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
