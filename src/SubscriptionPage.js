import React from 'react';

import Card from './components/Subscription/Card';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

function SubscriptionPage() {
  return (
    <div className='all-bg-color'>
    <Navbar/>
    
    <Card/>
    <Footer/>
    </div>
  )
}

export default SubscriptionPage