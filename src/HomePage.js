import React from 'react';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Service from './components/Home/Service';
import SuccessStories from './components/Home/SuccessStories';
import AboutUsComponent from './components/Home/Aboutuscomponent';

function HomePage() {
  const divStyle = {
    backgroundColor: 'rgb(238, 233, 218)',
  };

  return (
    <div style={divStyle}>
      <Navbar />
      <Header />
      <SuccessStories />
      <Service />
     <AboutUsComponent/>
      <Footer />
    </div>
  );
}

export default HomePage;
