import React from "react";
import "./about.css";
import team1 from "./images/Team1.jpg";
import team2 from "./images/Team2.jpg";
import team3 from "./images/Team3.jpg";


import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const About1 = () => {
  return (
    <div className="all-bg-color">
      <br></br>
      <MDBRow className="row">
        <MDBCol lg='12'>
          <h1 className="ssf-head-text">Our Leadership Team </h1>
        </MDBCol>
        <MDBCol lg='12'>
          <MDBRow center>
            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src={team1}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Bushra Farooq</MDBCardTitle>
                  <MDBCardText>
                  A fervent Computer Science student, working passionately to elevate cybersecurity awareness in Pakistan. With a relentless commitment to fostering digital safety, this enthusiast is on a mission to empower individuals and organizations with the knowledge and tools needed to navigate the ever-evolving landscape of cybersecurity.
                  </MDBCardText>
                  <MDBBtn href="#">Follow</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src={team2}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Sadia Ghani</MDBCardTitle>
                  <MDBCardText>
                  A fervent Computer Science student, working passionately to elevate cybersecurity awareness in Pakistan. With a relentless commitment to fostering digital safety, this enthusiast is on a mission to empower individuals and organizations with the knowledge and tools needed to navigate the ever-evolving landscape of cybersecurity.
                  </MDBCardText>
                  <MDBBtn href="#">Follow</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src={team3}
                  position="top"
                  alt="..."
                
                />
                <MDBCardBody>
                  <MDBCardTitle>Eisha Tur Razia</MDBCardTitle>
                  <MDBCardText>
                  A fervent Computer Science student, working passionately to elevate cybersecurity awareness in Pakistan. With a relentless commitment to fostering digital safety, this enthusiast is on a mission to empower individuals and organizations with the knowledge and tools needed to navigate the ever-evolving landscape of cybersecurity.
                  </MDBCardText>
                  <MDBBtn href="#">Follow</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default About1;
{
  /* <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%"/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</> */
}
