import React from 'react';
import './profile.css';
import { MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import http from '../../http';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


let userObj = {};
  let aboutmeObj = {};

export default function App() {

  const {id} = useParams();
  const [imgObj, setImgObj] = useState({});

  useEffect(() => {
   
      fetchInformation();
    
  },[]);

  const fetchInformation = () => {

    //UserObj
    http.get(`/users/${id}`).then((res) => {
      userObj = res.data[0];
    })

    //ProfessionObj
    http.get(`/aboutme/${id}`).then((res) => {
      aboutmeObj = res.data[0];
    })

    //ImageObj
    http.get(`/images/${id}`).then((res) => {
      setImgObj(res.data[0]);
      console.log(imgObj);
    })
      console.log(imgObj);
    };

  return (
    <div className="card-profile">
      {imgObj.Image_path && aboutmeObj.About && userObj.First_Name ? (
  <MDBRow className="col-12">
    <MDBCol md="2" className="col-1"></MDBCol>

    <MDBCol md="2" className="col-7">
      {imgObj.Image_path !== undefined ? <MDBCardImage
        width={"auto"}
        height={"auto"}
        src={`http://localhost:8000/${imgObj.Image_path}`}
        alt="..."
        fluid
      /> : null}
    </MDBCol>
    <MDBCol md="6">
      <MDBCardBody>
        <MDBCardTitle>
          <h1 className='name-title'>{`${userObj.First_Name} ${userObj.Last_Name}`}</h1>
        </MDBCardTitle>
        <hr />
        <MDBCardText className="Bio text-center">
        {aboutmeObj.About}
        </MDBCardText>
        <hr />
      </MDBCardBody>
    </MDBCol>

    <MDBCol md="2"></MDBCol>
  </MDBRow>
) : (
        <h1> Loading....</h1>
      )}
    </div>
  );
}
