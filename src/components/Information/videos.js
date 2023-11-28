import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBSwitch, 
    MDBFile 
  } from 'mdb-react-ui-kit';

  export default function Videos() {
  return (
    <div>
       <div>
                     
                     <h2 style={{ color: ' rgb(44, 141, 148)' }}>Videos</h2>
                     <MDBSwitch id='flexSwitchCheckDefault' label='Private' />

                     <MDBRow>
                            <MDBCol className='col-0 col-lg-7' >
                            </MDBCol>   

                            <MDBCol className='col-0 col-lg-5' >
                            <MDBFile className='files' label='Add Videos' id='customFile' />
                            </MDBCol> 
                    </MDBRow>
    
                     <hr></hr>

                    <ul>
                        <li>
                            <p>Having a video biography will really set you apart from the crowd!</p>
                        </li>
                        <li>
                            <p>Read our <a href="https://www.youtube.com/" >good video guide</a> if you need help! </p>
                        </li>
                    </ul>
              </div>
    </div>
  );
}

