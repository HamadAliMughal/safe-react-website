import { useState, useEffect } from "react";
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
  MDBTabsPane,
} from "mdb-react-ui-kit";
let lifestyleObj = {};
export default function LifeStyle() {
  const [basicActive, setBasicActive] = useState("tab2");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    else if(value === 'tab2')
    {
      saveLifestyle();
    }
    setBasicActive(value);
  };

  const { id } = useParams();
  const { uid } = useParams();
  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = () => {
    http.get(`/lifestyle/${id}`).then((res) => {
      if(res.data[0] == null)
      {
        lifestyleObj = formValue;
      }
      else
      {
        lifestyleObj.user_id = id;
        lifestyleObj.marStatus = res.data[0].Martial_Status;
        lifestyleObj.religion = res.data[0].Religion;
        lifestyleObj.childern = res.data[0].Children;
        lifestyleObj.siblings = res.data[0].Siblings;
        lifestyleObj.livingStatus = res.data[0].Living_Status;
        lifestyleObj.wilingtomove = res.data[0].Willing_to_move;
        lifestyleObj.smoker = res.data[0].Smoker;
        lifestyleObj.wealth = res.data[0].Wealth;
        setFormValue({
          user_id: lifestyleObj.user_id,
          marStatus: lifestyleObj.marStatus,
          religion: lifestyleObj.religion,
          childern: lifestyleObj.childern,
          siblings: lifestyleObj.siblings,
          livingStatus: lifestyleObj.livingStatus,
          wilingtomove: lifestyleObj.wilingtomove,
          smoker: lifestyleObj.smoker,
          wealth: lifestyleObj.wealth,
        });
      }
    });
  };

  const [formValue, setFormValue] = useState({
    user_id: id,
    marStatus: "not filled",
    religion: "not filled",
    childern: "not filled",
    siblings: "not filled",
    livingStatus: "not filled",
    wilingtomove: "not filled",
    smoker: "not filled",
    wealth: "not filled",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    lifestyleObj = { ...formValue, [e.target.name]: e.target.value };
  };

  const saveLifestyle = () =>{
    console.log(lifestyleObj);
    http.post('/lifestyle',lifestyleObj).then((res)=>{
      alert(res.data);
    })
  }

  return (
    <section className="ssf-section">
      <MDBRow>
        <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
          <MDBTypography variant="h3">Living Style</MDBTypography>
        </div>
      </MDBRow>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab2"}>
          <div className="pills">
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Wealth:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.wealth}</h6>
              </MDBCol>
            </MDBRow>
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Marriage Status:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.marStatus}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Religion:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.religion}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Children:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.childern}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Siblings:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.siblings}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Living Status:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.livingStatus}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Wiling To Move:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.wilingtomove}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Smoking:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.smoker}</h6>
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
              <label for="wealth">Wealth</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.wealth}
                name="wealth"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Below Average">Below Average</option>
                <option value="Average">Average</option>
                <option value="Good">Good</option>
                <option value="Excelent">Excelent</option>
              </select>
              <br />
              <label for="marStatus">Maritial Status</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.marStatus}
                name="marStatus"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorcee">Divorcee</option>
                <option value="Widow">Widow (For Female)</option>
                <option value="Widower">Widower (For Male)</option>
              </select>
              <br />
              <label for="religion">Religion</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.religion}
                name="religion"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Sikhism">Sikhism</option>
                <option value="Others">Others</option>
              </select>
              <br />
              <label for="childern">Children</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.childern}
                name="childern"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="More Than 5">More Than 5</option>
              </select>
              <br />
              <label for="siblings">Siblings</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.siblings}
                name="siblings"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="More Than 5">More Than 5</option>
              </select>
              <br />
              <label for="livingStatus">Living Status</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.livingStatus}
                name="livingStatus"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Living With Family">Living With Family</option>
                <option value="Own House">Own House</option>
                <option value="Rental">Rental</option>
              </select>
              <br />
              <label for="wilingtomove">Willing To Move</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.wilingtomove}
                name="wilingtomove"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
              </select>
              <br />
              <label for="smoker">Smoking</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.smoker}
                name="smoker"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Occasionaly">Ocasionaly</option>
              </select>
              <br />

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
export { lifestyleObj };
