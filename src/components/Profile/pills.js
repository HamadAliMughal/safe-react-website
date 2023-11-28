import React, { useState } from 'react';
import "./profile.css"
import Aboutme from '../Information/aboutme';
import Publicphotos from '../Information/publicphotos';
import Privatephotos from '../Information/privatephotos';
import Videos from '../Information/videos';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            About
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Photos
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Videos
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
          <div className='sec'> <br/><Aboutme/></div></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <div className='sec'> <br/><Publicphotos/>
        <Privatephotos/> </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}> <div className='sec'> <br/><Videos/> </div></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}