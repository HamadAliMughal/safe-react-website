import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <MDBRow>
        <MDBCol  className='col-12 col-lg-5'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
             <h4> Step 1- Make your membership account</h4>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
              <h4> Step 2 - Your membership account is queued </h4>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
              <h4> Step 3 - Select your membership package </h4>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
              <h4> Step 4 - Upload your photo </h4>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab5')} active={verticalActive === 'tab5'}>
              <h4> Step 5 - How to find your life partner</h4>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab6')} active={verticalActive === 'tab6'}>
              <h4> Step 6 - How can I contact a match? </h4>
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol  className='col-12 col-lg-7'>
          <MDBTabsContent>
         <br />
            <MDBTabsPane show={verticalActive === 'tab1'}><Step1/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><Step2/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}><Step3/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab4'}>4</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab5'}>5</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab6'}>6</MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}