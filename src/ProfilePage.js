import React from 'react'
import {MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ProfilePages from './components/Profile/ProfilePage';
import "./components/Profile/profile.css"
import Information from './components/Information/information';
import LifeStyle from './components/Information/lifestyle';
import Education from './components/Information/education';
import Appearence from './components/Information/appearence';
import Pills from './components/Profile/pills';



function ProfilePage() {

  return (

        <MDBRow>
      {/* <MDBCol className='col-12'> */}
       <ProfilePages/>
    
      <div className='edit-div'>
      <MDBRow>
        
       
        <MDBCol className='col-lg-1 col-sm-0 '>

        </MDBCol>
        <MDBCol md='4' className='col-lg-4 col-12'> 
        <div className='sec'> <br/>
        <Information/>
                    <LifeStyle/>
                    <Education/>
                    <Appearence/>
                    </div>
            
         </MDBCol>
        <MDBCol md='6' className='col-lg-6 col-12'>
            <Pills/>
        </MDBCol>
        <MDBCol  className='col-lg-1 col-sm-0'>

        </MDBCol>
       
      </MDBRow>
      </div>
      </MDBRow>
   
  )
}

export default ProfilePage