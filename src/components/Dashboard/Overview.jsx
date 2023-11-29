// Import necessary modules
import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { PieChart } from 'react-minimal-pie-chart';
import Revenue from './Revenue';

// Data for Pie Charts
const data1 = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const data2 = {
  labels: ['Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [200, 100, 150],
      backgroundColor: ['#4CAF50', '#800080', '#FFA500'],
      hoverBackgroundColor: ['#4CAF50', '#800080', '#FFA500'],
    },
  ],
};

const data3 = {
  labels: ['Cyan', 'Magenta', 'Yellow'],
  datasets: [
    {
      data: [50, 200, 100],
      backgroundColor: ['#00FFFF', '#FF00FF', '#FFFF00'],
      hoverBackgroundColor: ['#00FFFF', '#FF00FF', '#FFFF00'],
    },
  ],
};

// React Page Component
const Overview = () => {
  return (
    <div className="container mt-5">
      <MDBRow>
        <MDBCol md="3" className="mb-3">
          </MDBCol>
        {/* First Pie Graph */}
        <MDBCol md="2" className="mb-3">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Free</MDBCardTitle>
              <PieChart
  data={[
    { title: 'One', value: 35, color: 'rgb(96,150,180)' },
    { title: 'Two', value: 65, color: 'rgb(137,137,137)' },

  ]}
/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Second Pie Graph */}
        <MDBCol md="2" className="mb-3">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Basic</MDBCardTitle>
              <PieChart
  data={[
    { title: 'One', value: 45, color: 'rgb(96,150,180)' },
    { title: 'Two', value: 55, color: 'rgb(137,137,137)' },
 
  ]}
/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Third Pie Graph */}
        <MDBCol md="2" className="mb-3">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Premium </MDBCardTitle>
              <PieChart
  data={[
    { title: 'One', value: 20, color: 'rgb(96,150,180)' },
    { title: 'Two', value: 80, color: 'rgb(137,137,137)' , label:'80' },

  ]}
/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </div>
  );
};

export default Overview;
