import React, { Component } from 'react'
import {
    MDBRow,
    MDBCol,
    MDBSwitch, 
    MDBInput,
    MDBInputGroup,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBRadio,
    MDBProgress, 
    MDBProgressBar,
    MDBTypography,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTextArea,
    MDBTabsPane,
    MDBFile 
  } from 'mdb-react-ui-kit';
export class ImagesMedia extends Component {
  render() {
    return (
      <div>
         <MDBRow>
        <MDBCol
          className="col-12 col-lg-12"
          style={{ color: " rgb(44, 141, 148)" }}
        >
          <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}>
            <MDBTypography variant="h3">Add Pics</MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="col-2 col-lg-3"></MDBCol>
        <MDBCol className="col-8 col-lg-6 sub">
          <div className=" mb-3" style={{ color: " rgb(44, 141, 148)" }}></div>

          <div>
            <h2 style={{ color: " rgb(44, 141, 148)" }}>Public Photos</h2>

            <MDBRow>
              <MDBCol className="col-0 col-lg-7"></MDBCol>

              <MDBCol className="col-0 col-lg-5">
                <MDBFile
                  className="files"
                  label="Add Public Photos"
                  id="customFile"
                />
              </MDBCol>
            </MDBRow>

            <hr></hr>
            <ul>
              <li>
                <p>
                  Did you know that adding a photograph is a great way to get
                  noticed by more users. So don't be shy as we allow you to
                  upload 8 pictures to your profile!
                </p>
              </li>
              <li>
                <p>
                  We recommend reading our{" "}
                  <a href="">good photo guide first!</a>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: " rgb(44, 141, 148)" }}>Private Photos</h2>
            <MDBRow>
              <MDBCol className="col-0 col-lg-7"></MDBCol>

              <MDBCol className="col-0 col-lg-5">
                <MDBFile
                  className="files"
                  label="Add Private Photos"
                  id="customFile"
                />
              </MDBCol>
            </MDBRow>

            <hr></hr>
            <ul>
              <li>
                <p>
                  <strong>Private</strong> Photos are photos of yourself that
                  you don't want everyone viewing. Only users you give specific
                  permission (which is revokable) can view Private Photos.
                  Kindly note, our decency guidelines still apply to these
                  photos and they are reviewed by members of our team before
                  being allowed to be shared with others.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: " rgb(44, 141, 148)" }}>Videos</h2>
            <MDBSwitch id="flexSwitchCheckDefault" label="Private" />

            <MDBRow>
              <MDBCol className="col-0 col-lg-7"></MDBCol>

              <MDBCol className="col-0 col-lg-5">
                <MDBFile className="files" label="Add Videos" id="customFile" />
              </MDBCol>
            </MDBRow>

            <hr></hr>

            <ul>
              <li>
                <p>
                  Having a video biography will really set you apart from the
                  crowd!
                </p>
              </li>
              <li>
                <p>
                  Read our <a href="">good video guide</a> if you need help!{" "}
                </p>
              </li>
            </ul>
          </div>
        </MDBCol>
        <MDBCol className="col-2 col-lg-3"></MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol className="col-4 col-lg-5"></MDBCol>

        <MDBCol className="col-4 col-lg-2">
          <MDBBtn
            className="mx-2 "
            tag="input"
            type="submit"
            value="Submit"
            block
          />
        </MDBCol>
        <MDBCol className="col-4 col-lg-5"></MDBCol>
      </MDBRow>
      </div>
    )
  }
}

export default ImagesMedia
