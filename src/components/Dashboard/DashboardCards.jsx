import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import dashboardCardApi from "../APIs/dashboardCardApi";
import '../Dashboard/dashboard.css';
import { useParams } from "react-router-dom";
import http from "../../http";
import { useNavigate } from 'react-router-dom';

export default function DashboardCards() {
  const {uid} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    
      fetchInformation();
   
  },[]);


  const fetchInformation = () => {
   
    http.get(`/users`).then((res) => {
      res.data.map((item) => (
        
        //InfoObj
        http.get(`/personalInfo/${item.User_id}`).then((res) => {
          item.infoObj = res.data[0];
        }),
  
        //ProfessionObj
        http.get(`/education/${item.User_id}`).then((res) => {
          item.professionObj = res.data[0];
        }),

        //ImageObj
        http.get(`/images/${item.User_id}`).then((res) => {
          item.imgObj = res.data[0];
        })
      ));
      setWorkData(res.data);
      setIsLoading(false);
      console.log(workData);
      
      
    });
  };
  
  return (
    <MDBRow center className="gy-5 gx-3">
     
    </MDBRow>
  );
}
