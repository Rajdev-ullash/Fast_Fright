import React from 'react';
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
        </div>
    );
};

export default Home;