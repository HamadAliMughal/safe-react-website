import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img1 from './img/OurApp/img1.png';
import img2 from './img/OurApp/img2.png';
import img3 from './img/OurApp/img3.png';
import img4 from './img/OurApp/img4.png';
import img5 from './img/OurApp/img5.png';
import img6 from './img/OurApp/img6.png';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

const SuccessStories = () => {
  return (
    <>
      <div className="work-container  container services">
        <h1 className="main-heading text-center">
          {" "}
          <br /> Our App
        </h1>
        <br />
      </div>
      <MDBCarousel showIndicators showControls fade className="slider">
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src={img1}
              alt="."
              style={{ height: "400px", objectFit: "contain" }}
            />

          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src={img2}
              alt="..."
              style={{ height: "400px", objectFit: "contain"}}
            />

          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src={img3}
              alt="..."
              style={{ height: "400px" ,objectFit: "contain"}}
            />

          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src={img4}
              alt="..."

              style={{ height: "400px" ,objectFit: "contain" }}
            />

          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src={img5}
              alt="..."
              style={{ height: "400px",objectFit: "contain" }}
            />

          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src={img6}
              alt="..."
              style={{ height: "400px",objectFit: "contain" }}
            />

          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      {/* <MDBRow className="your-ssc">
        <MDBCol lg="5" md="12" className="mb-4 mb-md-0 your-ss">
          <h3>Tell us about your Success Stories</h3>

          <Link className="ss-link" to="/successstoryform">
            <MDBBtn rounded className="mb-4 mb-md-0 your-ss-btn">
              Submit
            </MDBBtn>
          </Link>
        </MDBCol>
      </MDBRow> */}
      <br />
      <br />
    </>
  );
};
export default SuccessStories;
