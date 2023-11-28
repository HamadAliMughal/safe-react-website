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

let appearenceObj = {};

export default function Appearence() {
  const [basicActive, setBasicActive] = useState("tab2");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    else if(value === 'tab2')
    {
      saveAppearance();
    }
    setBasicActive(value);
  };

  const { id } = useParams();
  const { uid } = useParams();
  useEffect(() => {
    fetchEducation();
  }, [id]);

  const fetchEducation = () => {
    http.get(`/appearance/${id}`).then((res) => {
      if(res.data[0] == null)
      {
        appearenceObj = formValue;
      }
      else
      {
        appearenceObj.user_id = id;
        appearenceObj.eyecolor = res.data[0].Eye_color;
        appearenceObj.haircolor = res.data[0].Hair_color;
        appearenceObj.height = res.data[0].Height;
        appearenceObj.bodytype = res.data[0].BodyType;
        setFormValue({
          user_id: appearenceObj.user_id,
          eyecolor: appearenceObj.eyecolor,
          haircolor: appearenceObj.haircolor,
          height: appearenceObj.height,
          bodytype: appearenceObj.bodytype,
        });
      }
    });
  };

  const [formValue, setFormValue] = useState({
    user_id: id,
    eyecolor: "not filled",
    haircolor: "not filled",
    height: "not filled",
    bodytype: "not filled",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    appearenceObj = { ...formValue, [e.target.name]: e.target.value };
  };

  const saveAppearance = () =>{
    http.post('/appearance',appearenceObj).then((res)=>{
      alert(res.data);
    })
  }

  return (
    <section className="ssf-section">
      <MDBRow>
        <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
          <MDBTypography variant="h3">Appearence</MDBTypography>
        </div>
      </MDBRow>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab2"}>
          <div className="pills">
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Eye Color:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.eyecolor}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">
                Hair Color:
              </MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.haircolor}</h6>
              </MDBCol>
            </MDBRow>

            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Height:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.height}</h6>
              </MDBCol>
            </MDBRow>
            <MDBRow start>
              <MDBCol className="col-6 col-lg-4   attribute">Body Type:</MDBCol>
              <MDBCol className="col-6 col-lg-6">
                <h6>{formValue.bodytype}</h6>
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
              <label for="eyecolor">Eye Color</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.eyecolor}
                name="eyecolor"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Green">Green</option>
                <option value="Hazel">Hazel</option>
                <option value="Black">Black</option>
              </select>

              <br />
              <label for="haircolor">Hair Color</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.haircolor}
                name="haircolor"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Blond">Blonde</option>
                <option value="Brown">Brown</option>
                <option value="Red">Red</option>
                <option value="Mixed">Mixed</option>
                <option value="Black">Black</option>
                <option value="Grey">Grey</option>
                <option value="Blad">Blad</option>
              </select>

              <br />
              <label for="height">Height</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.height}
                name="height"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="<5'0">Less than 5'0</option>
                <option value="5'0">5'0</option>
                <option value="5'1">5'1</option>
                <option value="5'2">5'2</option>
                <option value="5'3">5'3</option>
                <option value="5'4">5'4</option>
                <option value="5'5">5'5</option>
                <option value="5'6">5'6</option>
                <option value="5'7">5'7</option>
                <option value="5'8">5'8</option>
                <option value="5'9">5'9</option>
                <option value="5'10">5'10</option>
                <option value="5'11">5'11</option>
                <option value="6'0">6'0</option>
                <option value="6'1">6'1</option>
                <option value="6'2">6'2</option>
                <option value="6'3">6'3</option>
                <option value="6'4">6'4</option>
                <option value="6'5">6'5</option>
                <option value="6'6">6'6</option>
                <option value="6'7">6'7</option>
                <option value="6'8">6'8</option>
                <option value="6'9">6'9</option>
                <option value="6'10">6'10</option>
                <option value="6'11">6'11</option>
                <option value="7'0">7'0</option>
                <option value=">7'0">Greater Than 7'0</option>
              </select>
              <br />
              <label for="bodytype">Body Type</label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={formValue.bodytype}
                name="bodytype"
                onChange={onChange}
              >
                <option selected value='not filled'>not filled</option>
                <option value="Thin">Thin</option>
                <option value="Average">Average</option>
                <option value="Athletic">Athletic</option>
                <option value="Body Builder">Body Builder</option>
                <option value="A Few More Pounds5">A Few More Pounds</option>
                <option value="Big And Beautiful">Big And Beautiful</option>
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
export { appearenceObj };
