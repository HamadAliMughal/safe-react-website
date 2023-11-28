import React from 'react';
import logoImage from "./img/aboutus.png";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const AboutUsComponent = () => {
  return (
    <MDBRow className="mt-5">
      {/* Image Column */}
      <MDBCol sm="12" md="6">
        <img
          src={logoImage}
          alt="About Us"
          className="img-fluid rounded"
        />
      </MDBCol>

      {/* Text Column */}
      <MDBCol sm="12" md="6">
        <div className='all-bg-color'>
          <MDBCardBody>
            <MDBCardTitle className="main-heading text-center"> <h1>About Us</h1></MDBCardTitle>
            <MDBCardText  className='text-center' style={{ textJustify: 'justify' }}>
            SAFE, a pioneer in mobile security, stands as a testament to innovation in safeguarding your digital world. Born from the collective frustration of individuals like you, who grew weary of the vulnerability in our connected lives.

At SAFE, we believe in empowering individuals to take control. Our mission is to provide a haven where families and individuals can shield themselves from the ever-evolving landscape of digital threats. We recognize that in a world fraught with uncertainties, it's time to equip ourselves with the tools necessary to regain control and reclaim our peace of mind.

SAFE is not just an app; it's a revolution against the intrusion of our digital sanctuaries. With an unwavering commitment to security, SAFE is your ally in this digital age, ensuring that your data remains yours, untouched by the shadows of malicious intent. It's time to take back control, and SAFE is your answer
            </MDBCardText>
          </MDBCardBody>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default AboutUsComponent;
