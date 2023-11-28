import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SuccessStoriesForm from "./components/SuccessStories/SuccessStoriesForm";
import Login from "./components/Registration/login";
import SubscriptionPage from "./SubscriptionPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ContactUsPage from "./ContactUsPage";
import TermsOfUsePage from "./TermsOfUsePage";
import Mainpage from "./components/Information/mainpage";
import AboutPage from "./AboutPage";
import Dashboard from "./Dashboard";
import ProfilePage from "./ProfilePage";
import InformationPage from "./InformationPage";
import './App.css';
import Users from "./Users";
import Information from "./components/Information/information";
import Media from "./components/Information/media";
import Privatephotos from "./components/Information/privatephotos";
import Publicphotos from "./components/Information/publicphotos";

function App() {
  return (
    <div>
      {/* <Media/> */}
{/* <Privatephotos/> */}
      {/* <ProfilePage/> */}
      {/* <SuccessStoriesForm/>
      <ContactUsPage/>} */}
      {/* <Users/> */}
      {/* {<Dashboard />} */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contactus" element={<SuccessStoriesForm />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsOfUse" element={<TermsOfUsePage />} />
        {/* <Route path="/contactUs" element={<ContactUsPage />} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/dashboard/:uid" element={<Dashboard />} />
        <Route path="/information/:id/:uid" element={<InformationPage/>} />
        <Route path="/dashboard/:uid/profile/:id" element={<ProfilePage/>} />
    </Routes>
    </div>
  );
}

export default App;
