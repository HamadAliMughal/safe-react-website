import React, { useState, useEffect } from "react";
import http from "../../http";
import "./information.css";
import "./width.css";
import Countrystate from "./countrystatecity";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBTypography,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

let informationObj = {};

export default function Information() {
  const checkFlags = Array.apply(null,Array(5)).map(Boolean.prototype.valueOf,false);
  const [basicActive, setBasicActive] = useState("tab2");

  const { id } = useParams();
  const {uid} = useParams();
  useEffect(() => {
    fetchInformation();
  }, []);

  const fetchInformation = () => {
   
    http.get(`/personalInfo/${id}`).then((res) => {
      if(res.data[0] == null)
      {
        informationObj = formValue;
      }
      else
      {
        informationObj.user_id = id;
        informationObj.age = res.data[0].Age;
        informationObj.gen = res.data[0].Gender;
        informationObj.nationality = res.data[0].Nationality;
        informationObj.lang = res.data[0].First_Language;
        informationObj.slang = res.data[0].Second_Language;
        informationObj.country = res.data[0].Country;
        informationObj.stat = res.data[0].State;
        informationObj.city = res.data[0].City;
        setFormValue({
          user_id: informationObj.user_id,
          age: informationObj.age,
          gen: informationObj.gen,
          nationality: informationObj.nationality,
          lang: informationObj.lang,
          slang: informationObj.slang,
          country: informationObj.country,
          stat: informationObj.stat,
          city: informationObj.city,
        });
      }
    });
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    else if(value === 'tab2')
    {
      savePersonalInfo();
    }
    setBasicActive(value);
  };

  const [formValue, setFormValue] = useState({
    user_id:id,
    age: "0",
    gen: "Male",
    nationality: "not filled",
    lang: "not filled",
    slang: "not filled",
    country: "not filled",
    stat: "not filled",
    city: "not filled",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    informationObj = { ...formValue, [e.target.name]: e.target.value };
  };

  const onChange1 = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.id });
    informationObj = { ...formValue, [e.target.name]: e.target.id };
  };

  const savePersonalInfo = () =>{

    http.post('/personalInfo',informationObj).then((res)=>{
      alert(res.data);
    })
  }

  const validateAge = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    informationObj = { ...formValue, [e.target.name]: e.target.value };
    let flag = false;
    let Age = e.target.value;
    if (Age<18 || Age>100) 
    {
      if (e.target.name === 'age') {
        document.getElementById('age_pane').style.display = 'block';
        document.getElementById('age_pane').innerHTML = "You Age Must Be 18-100";
        checkFlags[4]=false;
      }
      flag = false;

    }
    else {
      if (e.target.name === 'age') {
        document.getElementById('age_pane').style.display = 'none';
        checkFlags[4]=true;
      }
      flag = true;
    }
   
      return false;
    
  }

  const validateName = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    informationObj = { ...formValue, [e.target.name]: e.target.id };
    let flag = false;
    let Name = e.target.value;
    for (let index = 0; index < Name.length; index++) {
      if (Name[index] >= '0' && Name[index] <= '9' || Name[index] == ' ') {
        if (e.target.name === 'nationality') {
          document.getElementById('nationality_pane').style.display = 'block';
          document.getElementById('nationality_pane').innerHTML = "Nationality is Invalid";
          checkFlags[0]=false;
        }
        else if(e.target.name === 'lang'){
          document.getElementById('lang_pane').style.display = 'block';
          document.getElementById('lang_pane').innerHTML = "Language is Invalid";
          checkFlags[2]=false;
        }
        else if(e.target.name === 'slang'){
          document.getElementById('slang_pane').style.display = 'block';
          document.getElementById('slang_pane').innerHTML = "Second Language is Invalid";
          checkFlags[3]=false;
        }
        flag = false;
      
        break;
      }
      else {
        if (e.target.name === 'nationality') {
          document.getElementById('nationality_pane').style.display = 'none';
          checkFlags[0]=true;
        }
        else if (e.target.name === 'lang') {
          document.getElementById('lang_pane').style.display = 'none';
          checkFlags[2]=true;
        }
        else if (e.target.name === 'slang') {
          document.getElementById('slang_pane').style.display = 'none';
          checkFlags[3]=true;
        }
        flag = true;
        
      }
    }
    
    return flag;
  }

  return (
    <div>
      <div className="page">
        <section className="ssf-section">
          <MDBRow>
            <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
              <MDBTypography variant="h3">Personal Information</MDBTypography>
            </div>
          </MDBRow>

          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "tab2"}>
              <div className="pills">
                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">Age:</MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    <h6>{formValue.age}</h6>
                  </MDBCol>
                </MDBRow>
                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">
                    Gender:
                  </MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    <h6>{formValue.gen}</h6>
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">
                    Nationality:
                  </MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    <h6>{formValue.nationality}</h6>
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">
                    Language:
                  </MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    <h6>{formValue.lang}</h6>
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">
                    2nd Language:
                  </MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    <h6>{formValue.slang}</h6>
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">
                    Country:
                  </MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                    {informationObj.country === null ? <h6>not filled</h6> : <h6>{informationObj.country}</h6>}
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">State:</MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                  {informationObj.stat === null ? <h6>not filled</h6> : <h6>{informationObj.stat}</h6>}
                  </MDBCol>
                </MDBRow>

                <MDBRow start>
                  <MDBCol className="col-6 col-lg-4   attribute">City:</MDBCol>
                  <MDBCol className="col-6 col-lg-6">
                  {informationObj.city === null ? <h6>not filled</h6> : <h6>{informationObj.city}</h6>}
                  </MDBCol>
                </MDBRow>

                <MDBTabs pills className="mb-3 justify-content-end">
                  {uid === id ? <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab1")}
                      active={basicActive === "tab2"}
                    >
                      Edit
                    </MDBTabsLink>
                  </MDBTabsItem> : null}
                </MDBTabs>
              </div>
            </MDBTabsPane>

            <MDBTabsPane show={basicActive === "tab1"}>
              <div className="pills">
                <form>
                  <br></br>

                  <div className="mb-4">
                  <MDBInput
                    className="mb-0"
                    value={formValue.age}
                    name="age"
                    onChange={validateAge}
                    id="validationCustom01"
                    required
                    type="number"
                    label="Age"
                  />
                  <p id='age_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
                  </div>

                  <MDBRadio
                    name="gen"
                    id="Male"
                    label="Male"
                    value={formValue.gen}
                    onChange={onChange1}
                    defaultChecked
                  />

                  <MDBRadio
                    name="gen"
                    id="Female"
                    label="Female"
                    value={formValue.gen}
                    onChange={onChange1}
                  />
                  <br />


                  <div className="mb-4">
                  <MDBInput
                    className="mb-0"
                    value={formValue.nationality}
                    name="nationality"
                    onChange={validateName}
                    id="validationCustom01"
                    required
                    label="Nationality"
                  />
                  <p id='nationality_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
                  </div>


                  <div className="mb-4">
                  <MDBInput
                    className="mb-0"
                    value={formValue.lang}
                    name="lang"
                    onChange={validateName}
                    id="validationCustom02"
                    required
                    label="Language"
                  />
                  <p id='lang_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
                  </div>

                  <div className="mb-4">
                  <MDBInput
                    className="mb-0"
                    value={formValue.slang}
                    name="slang"
                    onChange={validateName}
                    id="validationCustom03"
                    required
                    label="Second Language"
                  />
                  <p id='slang_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
                  </div>

                  <Countrystate />

                  <br></br>

                  <MDBTabs pills className="mb-4" block>
                    <MDBTabsItem>
                      <MDBTabsLink
                        type="submit"
                        onClick={() => handleBasicClick("tab2")}
                        active={basicActive === "tab1"}
                      >
                        Done
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                </form>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </section>
      </div>
    </div>
  );
}

export { informationObj };
