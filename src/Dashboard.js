import React from 'react'
import SideNav from './components/Dashboard/SideNav';
import DashboardPills from './components/Dashboard/DasboardPills';
import DashboardFilters from './components/Dashboard/DashboardFilters';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import Overview from './components/Dashboard/Overview';
import Users from './components/Dashboard/Users';
import Revenue from './components/Dashboard/Revenue';

function Dashboard() {
  return (
    <div style={{ backgroundColor:'rgb(238, 233, 218)', margin:'5px'}}>
        <SideNav/>
        <br></br>
        <h1 className='text-center' style={{color:'rgb(96,150,180)', margin:'1rem' , justifyContent:'center'}}>Dashboard</h1>
        <hr></hr>
        <h1>User Subscriptions</h1>
        <hr></hr>
        <MDBRow >
          <MDBCol >
            <Overview/>
          </MDBCol>
     
        </MDBRow>
        <h1>User Details</h1>
        <hr></hr>
        <MDBRow>
          <MDBCol>
            <Users/>
          </MDBCol>
        </MDBRow>
        <h1>Revenue Details</h1>
        <hr></hr>
        <MDBRow>
          <MDBCol>
          <Revenue/>
          </MDBCol>
        </MDBRow>

        
    </div>
  )
}

export default Dashboard