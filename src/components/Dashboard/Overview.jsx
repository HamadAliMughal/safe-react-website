// Import necessary modules
import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { Pie } from 'react-chartjs-2';

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
        {/* First Pie Graph */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Pie Graph 1</MDBCardTitle>
              <Pie data={data1} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Second Pie Graph */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Pie Graph 2</MDBCardTitle>
              <Pie data={data2} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Third Pie Graph */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-4">Pie Graph 3</MDBCardTitle>
              <Pie data={data3} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Overview;
