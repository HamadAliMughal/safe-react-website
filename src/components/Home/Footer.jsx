import React from "react";
import { Link } from "react-router-dom";
// import './Navbar.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center footer-b" color="white">
      {/* <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol sm='12' lg="7" md="6" className="mb-4 mb-md-0">
            <h4 className="follow Footer-text my-1">
              <span>SAFE</span> (Secure Android Based File Encryption)
            </h4>
          </MDBCol>

          <MDBCol sm='12' lg="5" md="6" className="mb-4 mb-md-0 follow-icons justify-content-around">
            <h4 className="follow">
              <span>Follow</span> us on
            </h4>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
<hr></hr> */}
      <div className="text-center p-3" style={{ backgroundColor:'rgb(96,150,180)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          safe.com
        </a>
      </div>
    </MDBFooter>
  );
}
