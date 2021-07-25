import React from "react";
import BusinessInfo from "./BusinessInfo/BusinessInfo";
import Choose_us from "./Choose_us/Choose_us";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import HeaderMain from "./HeaderMain/HeaderMain";
import Navbar from "./Navbar/Navbar";
import Testominal from "./Testominal/Testominal";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BusinessInfo></BusinessInfo>
      <Choose_us />
      <Testominal></Testominal>
      <Faq></Faq>
      <WhatWeOffer></WhatWeOffer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
