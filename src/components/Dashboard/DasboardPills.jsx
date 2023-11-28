import React, { useState, useEffect } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Overview from './Overview';
import Users from './Users'; 
export default function DashboardPills() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs pills fill className='mb-3 lg-4'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Overview
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Users
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'} >
            Profile
          </MDBTabsLink>
        </MDBTabsItem>

      </MDBTabs>

      <MDBTabsContent className="table-responsive mb-12">
        <MDBTabsPane show={fillActive === 'tab1'}><Overview/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}><Users/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>Tab 3 content</MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab4'}>Tab 4 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}