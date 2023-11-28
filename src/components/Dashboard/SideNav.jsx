import React, { useState } from 'react';
import { Link } from "react-router-dom"
import logoImage from "../Home/img/logo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" className="back-color fixed-top pt-0">
        <MDBContainer>
          <MDBNavbarBrand href="#" className="Logo1">
          <Link className="Logo1" to="/" role={"button"}>
          <img src={logoImage} alt="Logo" className="logo-image" />
                </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 nav-btns">
              <MDBNavbarItem>
                <Link className="pricing-btn" to="/" role={"button"}>
                  Sign Out
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="margin-bot"></div>
    </header>
  );
}