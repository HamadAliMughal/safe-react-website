import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBInput , MDBCheckbox} from 'mdb-react-ui-kit';
import '../Dashboard/dashboard.css';

export default function DashboardFilters() {
  return (
    <div>
        <h1 className='text-center my-3'>Dashboard</h1>

<MDBCard alignment='center' className='my-3'>
      <MDBCardHeader>Search</MDBCardHeader>
      <MDBCardBody>
      <MDBInput id='form3Example1' label='Search' className='mb-4' />
        <MDBBtn href='#'>Search</MDBBtn>
      </MDBCardBody>
    </MDBCard>

        <MDBCard alignment='center' className='my-3'>
      <MDBCardHeader>Popular Searches</MDBCardHeader>
      <MDBCardBody>
      <ul>
        <li><a href='https://www.youtube.com/'>Recently Online</a></li>
        <li><a href='https://www.youtube.com/'>Most Compatible</a></li>
        <li><a href='https://www.youtube.com/'>Newest Members</a></li>
        <li><a href='https://www.youtube.com/'>In My Area</a></li>
        <li><a href='https://www.youtube.com/'>Most Populars</a></li>
      </ul>
      </MDBCardBody>
    </MDBCard>

    <MDBCard alignment='center' className='my-3'>
      <MDBCardHeader>Filters</MDBCardHeader>
      <MDBCardBody>
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Members with Photos' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Members with Whatsapp' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Trusted Members' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Premium Members' />
        <MDBBtn href='#' className='mt-3'>Search</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}