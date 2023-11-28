import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBFile 
  } from 'mdb-react-ui-kit';

  export default function Privatephotos() {
  return (
    <div>
       <div>
                     
                     <h2 style={{ color: ' rgb(44, 141, 148)' }}>Private Photos</h2>
                     <MDBRow>
                            <MDBCol className='col-0 col-lg-7' >
                            </MDBCol>   

                            <MDBCol className='col-0 col-lg-5' >
                            <MDBFile className='files' label='Add Private Photos' id='customFile' />
                            </MDBCol> 
                    </MDBRow>
    
                     <hr></hr>
                    <ul>
                        <li>
                            <p><strong>Private</strong> Photos are photos of yourself that you don't want everyone viewing. Only users you give specific 
                                permission (which is revokable) can view Private Photos. Kindly note, our decency guidelines still apply 
                                to these photos and they are reviewed by members of our team before being allowed to be shared with others.</p>
                        </li>
                        
                    </ul>
              </div>
    </div>
  );
}

