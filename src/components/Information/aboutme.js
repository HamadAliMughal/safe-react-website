import React, { useState, useEffect } from "react";
import "./information.css";
import { useParams } from "react-router-dom";
import http from "../../http";
import {
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTextArea,
  MDBTabsPane,
} from "mdb-react-ui-kit";

let aboutmeObj = {};
export default function Aboutme() {
  const [basicActive, setBasicActive] = useState("tab2");
  const checkFlags = Array.apply(null,Array(1)).map(Boolean.prototype.valueOf,false);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    else if(value === 'tab2')
    {
      saveAboutMe();
    }
    setBasicActive(value);
  };

  const { id,uid } = useParams();
  useEffect(() => {
    fetchEducation();
  }, [id]);

  const fetchEducation = () => {
    http.get(`/aboutme/${id}`).then((res) => {
      if(res.data[0] == null)
      {
        aboutmeObj = formValue;
      }
      else
      {
        aboutmeObj.user_id = id;
        aboutmeObj.aboutme = res.data[0].About;
        aboutmeObj.hobbies = res.data[0].Hobbies;
        aboutmeObj.seeking = res.data[0].Seeking;
        setFormValue({
          user_id:aboutmeObj.user_id,
          aboutme: aboutmeObj.aboutme,
          hobbies: aboutmeObj.hobbies,
          seeking: aboutmeObj.seeking
        });
      }
    });
  };

  const [formValue, setFormValue] = useState({
    user_id:id,
    aboutme: "",
    hobbies: "",
    seeking: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    aboutmeObj = { ...formValue, [e.target.name]: e.target.value };
  };

  const validateMsg = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    aboutmeObj = { ...formValue, [e.target.name]: e.target.value };
    if (e.target.name === 'hobbies') {

    if (e.target.value.length > 30) {

      e.target.required = true;
      document.getElementById('hobby').style.display = 'block';
      document.getElementById('hobby').style.color = '#006400';
      document.getElementById('hobby').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
      }

    
    else {
      e.target.required = false;
      document.getElementById('hobby').style.display = 'block';
      document.getElementById('hobby').style.color = '#FF0000';
      document.getElementById('hobby').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
      checkFlags[4]=false;
      }
    }
    if (e.target.name === 'aboutme') {

      if (e.target.value.length > 30) {
  
        e.target.required = true;
        document.getElementById('aboutmee').style.display = 'block';
        document.getElementById('aboutmee').style.color = '#006400';
        document.getElementById('aboutmee').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
        }
  
      
      else {
        e.target.required = false;
        document.getElementById('aboutmee').style.display = 'block';
        document.getElementById('aboutmee').style.color = '#FF0000';
        document.getElementById('aboutmee').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
        checkFlags[4]=false;
        }
      }
      if (e.target.name === 'seeking') {

        if (e.target.value.length > 30) {
    
          e.target.required = true;
          document.getElementById('seking').style.display = 'block';
          document.getElementById('seking').style.color = '#006400';
          document.getElementById('seking').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
          }
    
        
        else {
          e.target.required = false;
          document.getElementById('seking').style.display = 'block';
          document.getElementById('seking').style.color = '#FF0000';
          document.getElementById('seking').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
          checkFlags[4]=false;
          }
        }
  }

  const saveAboutMe = () =>{
    http.post('/aboutme',aboutmeObj).then((res)=>{
      alert(res.data);
    })
  }

  return (
    <section className="ssf-section">
      <MDBRow>
        <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
          <MDBTypography variant="h3">Describe Yourself</MDBTypography>
        </div>
      </MDBRow>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab2"}>
          <div className="pills">
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">About Me:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>
                  <p className="parabreaker">{formValue.aboutme}</p>
                </h6>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                My Hobbies:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>
                  <p className="parabreaker">{formValue.hobbies}</p>
                </h6>
              </MDBCol>
            </MDBRow>
            <br />

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Seeking For:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>
                  <p className="parabreaker">{formValue.seeking}</p>
                </h6>
              </MDBCol>
            </MDBRow>
            <br />

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

              <div className="mb-3">
              <MDBTextArea
                label="About Me and My Family "
                placeholder="I am ambitious and ......"
                value={formValue.aboutme}
                name="aboutme"
                onChange={validateMsg}
                id="textAreaExample"
                rows={4}
              />
              <p id='aboutmee' className='mt-0' style={{ display: "none" }}></p>
              </div>

              <br />

              <div className="mb-3">
              <MDBTextArea
                label="My Work Life, Hobbies, and Goals"
                placeholder="I used to play chess ....."
                value={formValue.hobbies}
                name="hobbies"
                onChange={validateMsg}
                id="textAreaExample"
                rows={4}
              />
              <p id='hobby' className='mt-0' style={{ display: "none" }}></p>
              </div>

              <br />

              <div className="mb-3">
              <MDBTextArea
                label="The Person I Am Seeking"
                placeholder="I am seeking for somenone who loves ....."
                value={formValue.seeking}
                name="seeking"
                onChange={validateMsg}
                id="textAreaExample"
                rows={4}
              />
              <p id='seking' className='mt-0' style={{ display: "none" }}></p>
              </div>

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
  );
}
export { aboutmeObj };
