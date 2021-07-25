<<<<<<< HEAD
import React from "react";
import Choose_us from "./Choose_us/Choose_us";

const Home = () => {
  return (
    <div>
      <Choose_us></Choose_us>
    </div>
  );
=======
import React from 'react';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';
import Testominal from './Testominal/Testominal';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
             <BusinessInfo></BusinessInfo>
            <Testominal></Testominal>
            <Faq></Faq>
            <WhatWeOffer></WhatWeOffer>
            <Footer></Footer>
        </div>
    );
>>>>>>> b101a20c88d5be3e2ee9a05bca3a832e2421ff8d
};

export default Home;
