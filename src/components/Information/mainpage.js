import React from 'react'
import Navbar from '../Home/Navbar';
import "./mainpage.css";
import Information from '../Information/information';
import LifeStyle from '../Information/lifestyle';
import Education from '../Information/education';
import Appearence from '../Information/appearence';
import Aboutme from './aboutme';
import {
    MDBRow,
    MDBCol,
    MDBProgress, 
  MDBProgressBar
  
   } from 'mdb-react-ui-kit';
  

function Mainpage() {
  return (
    <>
       <Navbar/>
       <div>
    <h1 className='ssf-head-text'>Sign Up To Catch. </h1>
    <h6 className='ssf-head-text-t'>You can't proceed further without signing up completely.</h6>
    
<hr />
    <br />
    <MDBProgress>
      <MDBProgressBar width='33' valuemin={0} valuemax={100} />
      {/* <MDBProgressBar bgColor='success' width='34' valuemin={0} valuemax={100} />
      <MDBProgressBar bgColor='info' width='33' valuemin={0} valuemax={100} /> */}
    </MDBProgress>

  </div>
<br/>
       <MDBRow>
                <MDBCol className='col-0 col-lg-3' >
                </MDBCol>   

                <MDBCol className='col-12 col-lg-6 main' >
                    <br></br>
                    <div className='smain'>
                    <Information/>
                    <LifeStyle/>
                    <Education/>
                    <Appearence/>
                    <Aboutme/>
                    </div>
                </MDBCol> 

                <MDBCol className='col-0 col-lg-3' >
                </MDBCol>   

        </MDBRow>
        <br/>

    </>

  );
}

export default Mainpage;