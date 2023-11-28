import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBFile 
  } from 'mdb-react-ui-kit';

  export default function Publicphotos() {
  return (
    <div>
       
       <div>
                     
                     <h2 style={{ color: ' rgb(44, 141, 148)' }}>Public Photos</h2>

                    <MDBRow>
                            <MDBCol className='col-0 col-lg-7' >
                            </MDBCol>   

                            <MDBCol className='col-0 col-lg-5' >
                            <MDBFile className='files' label='Add Public Photos' id='customFile' />
                            </MDBCol> 
                    </MDBRow>
    

                     <hr></hr>
                    <ul>
                        <li>
                            <p>Did you know that adding a photograph is a great way to get noticed by more users. 
                                So don't be shy as we allow you to upload 8 pictures to your profile!</p>
                        </li>
                        <li>
                            <p>We recommend reading our <a href="https://www.youtube.com/" >good photo guide first!</a></p>
                        </li>
                    </ul>
              </div>
    </div>
  );
}


