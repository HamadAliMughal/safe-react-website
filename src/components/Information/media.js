import React from 'react';
import './media.css';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBProgress, 
  MDBProgressBar,
  MDBTypography,
} from 'mdb-react-ui-kit';
import Privatephotos from './privatephotos';
import Publicphotos from './publicphotos'
import Videos from './videos';


export default function Media() {
     
    
  return (


   


    
<div className='mainMedia'>
<div>
    <h1 className='ssf-head-text'>Sign Up To Catch. </h1>
    <h6 className='ssf-head-text-t'>You can't proceed further without signing up completely.</h6>
    
    <hr />
    <br />
    <MDBProgress>
      <MDBProgressBar width='33' valuemin={0} valuemax={100} />
      <MDBProgressBar bgColor='success' width='34' valuemin={0} valuemax={100} />
      {/* <MDBProgressBar bgColor='info' width='33' valuemin={0} valuemax={100} /> */}
    </MDBProgress>

  </div>






    <MDBRow>
            <MDBCol className='col-12 col-lg-12' style={{ color: ' rgb(44, 141, 148)' }}>
                <div className=' mb-3' style={{ color: ' rgb(44, 141, 148)' }} >
              </div>
        </MDBCol>   
    </MDBRow>
    <MDBRow>
            <MDBCol className='col-2 col-lg-3'>
                
        </MDBCol> 
        <MDBCol className='col-8 col-lg-6 sub'>
        <div className=' mb-3' style={{ color: ' rgb(44, 141, 148)' }} >
            </div>
            
           <Publicphotos/>


              <Privatephotos/>

           <Videos/>
    
        </MDBCol> 
        <MDBCol className='col-2 col-lg-3'>
                
        </MDBCol>   
    </MDBRow>
    <br></br>
    <MDBRow>
                            <MDBCol className='col-4 col-lg-5' >

                            </MDBCol>   

                            <MDBCol className='col-4 col-lg-2' >
                            <MDBBtn className='mx-2 ' tag='input' type='submit' value='Submit' block />

                            </MDBCol> 
                            <MDBCol className='col-4 col-lg-5' >

                            </MDBCol>
                    </MDBRow>
    
    <br/>
    </div>
    );
}









    



    

