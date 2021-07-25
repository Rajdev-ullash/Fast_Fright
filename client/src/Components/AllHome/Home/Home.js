import React from 'react';
import Faq from './Faq/Faq';
import Testominal from './Testominal/Testominal';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';

const Home = () => {
    return (
        <div>
            <Testominal></Testominal>
            <Faq></Faq>
            <WhatWeOffer></WhatWeOffer>
        </div>
    );
};

export default Home;