import React, { useState, useEffect } from "react";
import "./information.css";
import {
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import http from "../../http";
let educationObj = {};
export default function Education() {
  const { id } = useParams();
  const { uid } = useParams();
  const [basicActive, setBasicActive] = useState("tab2");

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = () => {
    http.get(`/education/${id}`).then((res) => {
      if(res.data[0] == null)
      {
        educationObj = formValue;
      }
      else
      {
        educationObj.user_id = id;
        educationObj.education = res.data[0].Education;
        educationObj.profession = res.data[0].Profession;
        educationObj.aim = res.data[0].Aim;
        setFormValue({
          user_id: educationObj.user_id,
          education: educationObj.education,
          profession: educationObj.profession,
          aim: educationObj.aim,
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
      saveProfession();
    }
    setBasicActive(value);
  };

  const [formValue, setFormValue] = useState({
    user_id: id,
    education: "not filled",
    profession: "not filled",
    aim: "not filled",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    educationObj = { ...formValue, [e.target.name]: e.target.value };
  };

  const saveProfession = () =>{

    http.post('/profession',educationObj).then((res)=>{
      alert(res.data);
    })
  }

  return (
    <section className="ssf-section">
      <MDBRow>
        <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
          <MDBTypography variant="h3">Education</MDBTypography>
        </div>
      </MDBRow>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab2"}>
          <div className="pills">
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Education:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.education}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Profession:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.profession}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Aim:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.aim}</h6>
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
              <label for="education">Education</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.education}
                name="education"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="High School">High School</option>
                <option value="College">College</option>
                <option value="Graduate Degree">Graduate Degree</option>
                <option value="Masters Degree">Masters Degree</option>
                <option value="Post Doctoral">Post Doctoral</option>
              </select>

              <br />
              <label for="profession">Profession</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.profession}
                name="profession"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="GOVT. Employee">GOVT. Employee</option>
                <option value="Private Employee">Private Employee</option>
                <option value="Self Employeed">Self Employeed</option>
                <option value="Bussinessman">Bussinessman</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Student">Student</option>
                <option value="UnEmployeed">UnEmployeed</option>
              </select>

              <br />
              <label for="aim">Aim</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.aim}
                name="aim"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Relaxed">Relaxed</option>
                <option value="Ambisious">Ambisious</option>
                <option value="Highly Motivated">Highly Motivated</option>
                <option value="Hazel">Hazel</option>
                <option value="Black">Black</option>
              </select>

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
              {/* <MDBBtn type='submit' className='mb-4' block>
              Submit
            </MDBBtn> */}
            </form>
          </div>
        </MDBTabsPane>
      </MDBTabsContent>
    </section>
  );
}
export { educationObj };
