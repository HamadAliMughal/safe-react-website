import React, { Component } from 'react'
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
import InstructData from './components/Instructions/InstructData';
import InstructStep from './components/Instructions/InstructSteps';

import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
export class InstructionPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br />
        <InstructData/>
        <MDBCarousel showIndicators showControls fade className="slider">
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <br />
      <InstructStep/>
      <Footer/></div>
    )
  }
}

export default InstructionPage