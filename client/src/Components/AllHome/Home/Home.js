import React from 'react';
<<<<<<< HEAD
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Home.css'

const Home = () => {
    return (
        <div className="content">
        
        <h2>We are the most leading</h2>
<h1>WORLDWIDE <br/>FREIGHT FORWARD</h1>
            <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, doloremque.</p>
            <button className="btn btn-primary">Get appointment</button>
           
=======
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import Testominal from './Testominal/Testominal';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';

const Home = () => {
    return (
        <div>
            <Testominal></Testominal>
            <Faq></Faq>
            <WhatWeOffer></WhatWeOffer>
            <Footer></Footer>
>>>>>>> 170f0308d92727464322c0f08dfe74cf42ac365f
        </div>
    );
};

export default Home;