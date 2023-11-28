import React from 'react'
import SideNav from './components/Dashboard/SideNav';
import DashboardPills from './components/Dashboard/DasboardPills';
import DashboardFilters from './components/Dashboard/DashboardFilters';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

function Dashboard() {
  return (
    <div style={{ backgroundColor:'rgb(238, 233, 218)', margin:'5px'}}>
        <SideNav/>
        <br></br>
        <h1 className='text-center' style={{color:'rgb(96,150,180)', margin:'1rem' , justifyContent:'center'}}>Dashboard</h1>
        <MDBRow >
          <MDBCol >
            <DashboardPills/>
          </MDBCol>
        </MDBRow>
        
    </div>
  )
}

export default Dashboard