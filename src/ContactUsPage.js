import { MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import ContactForm from './components/ContactUs/ContactForm';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

function ContactUsPage() {
  return (
    <>
    <Navbar/>
    <div className='mb-3'>
        <MDBTypography className='text-center display-1 pb-3 mb-3 border'>Contact Us</MDBTypography>
        <h5 className='text-center my-4'>We cant't solve your Problem if you don't tell us about it.</h5>
        <MDBRow>
            <MDBCol sm='0' md='4'>
            </MDBCol>
            <MDBCol sm='12' md='4'>
                <ContactForm className='justify-content-center'/>
            </MDBCol>
            <MDBCol sm='0' md='4'>
            </MDBCol>
        </MDBRow>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUsPage