import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol,MDBContainer, MDBRow, MDBIcon } from 'mdb-react-ui-kit';
import './Card.css';


function Card() {
  return (
    <div className='all-bg-color'>
  <br></br>
    <h3 className='my-3 text-center heading'><span>Subscription</span> Plans</h3>
    <MDBContainer className='my-5 '>
      <MDBRow className='gy-3'>
      <MDBCol md='4' sm='12'>
    <MDBCard background='primary' className='mdb-card' style={{backgroundColor:' rgb(96,150,180)'}}>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Free Trail</MDBCardTitle>
        <MDBCardText>
          <span className='fw-bold fs-2'>0Rs</span><br/>
          <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>5GB Storage</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Access to 50% Features</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Valid for 7 days</li>
            <br></br>
           <br></br>
          </ul>
         
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol md='4' sm='12'>
    <MDBCard  background='info' className='mdb-card' style={{backgroundColor:' rgb(96,150,180)'}}>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Standard</MDBCardTitle>
        <MDBCardText>
        <span className='fw-bold fs-2'>1000Rs/month </span><br/>
        <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>15GB Data Storage</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Full Access to All Features</li>
            <li><MDBIcon fas icon="check" className='me-3'/>24/7 Availability of Expert Support</li>
          <br></br>
          <br></br>
          </ul>
     
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody>
    </MDBCard >
    </MDBCol>
    <MDBCol md='4' sm='12'>
    <MDBCard background='secondary' className='mdb-card' style={{backgroundColor:' rgb(96,150,180)'}}>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Premium</MDBCardTitle>
        <MDBCardText>
        <span className='fw-bold fs-2'>2000Rs/month </span><br/>
        <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>20GB Data Storage</li>
            <li><MDBIcon fas icon="check" className='me-3'/>All Features including Threat Intelligence</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Priority 24/7 Availability of Expert Support</li>
           
          </ul>
    
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody >
    </MDBCard>
    </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default Card