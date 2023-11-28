import React from "react";
import Mainpage from "./components/Information/mainpage";
import Footer from "./components/Home/Footer";
import { informationObj } from "./components/Information/information";
import { lifestyleObj } from "./components/Information/lifestyle";
import { appearenceObj } from "./components/Information/appearence";
import { aboutmeObj } from "./components/Information/aboutme";
import { educationObj } from "./components/Information/education";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useParams, useNavigate } from "react-router-dom";
import http from "./http";

export default function InformationPage(props) {

  const navigate = useNavigate();

  const {id} = useParams();
  const {uid} = useParams();

  const submit = (e) =>{
    e.preventDefault();
    console.log(informationObj);
    console.log(lifestyleObj);
    console.log(appearenceObj);
    console.log(aboutmeObj);
    console.log(educationObj);
    navigate('/dashboard/'+id,{replace:true});
  }

  return (
    <div>
      <Mainpage />
      <MDBRow>
        <MDBCol className="col-4 col-lg-5"></MDBCol>

        <MDBCol className="col-4 col-lg-2">
          <MDBBtn
            className="mx-2 mb-5"
            tag="input"
            type="submit"
            value="Submit"
            block
            onClick={submit}
          />
        </MDBCol>
        <MDBCol className="col-4 col-lg-5"></MDBCol>
      </MDBRow>

      <Footer />
    </div>
  );
}
