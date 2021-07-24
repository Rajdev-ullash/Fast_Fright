import React from 'react';
import './WhatWeOffer.css';
import heart from '../../../../Images/heart.png';
import airplane from '../../../../Images/airplane.png';
import location from '../../../../Images/maps-and-location.png';
import bus from '../../../../Images/bus.png';
import trolley from '../../../../Images/trolley.png';
import recycle from '../../../../Images/recycle.png';
import notebook from '../../../../Images/notebook.png';
import cart from '../../../../Images/cart.png';

const WhatWeOffer = () => {
    return (
        <section className='container our-offer-container'>
            <div className='offer-title'>
                <h2 className='text-center'>WHAT WE OFFER</h2>
                <div className="bottom-line"></div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3 text-center">
                    <img src={heart} alt="heart" />
                    <h5 className='mt-4'>WAREHOUSE SERVICE</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center">
                    <img src={airplane} alt="heart" />
                    <h5 className='mt-4'>AIR FREIGHT</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center">
                    <img src={location} alt="heart" />
                    <h5 className='mt-4'>SEA FREIGHT</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center">
                    <img src={bus} alt="heart" />
                    <h5 className='mt-4'>GROUND CARGO</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center mt-5">
                    <img src={trolley} alt="heart" />
                    <h5 className='mt-4'>PACKAGING OPTIONS</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center mt-5">
                    <img src={recycle} alt="heart" />
                    <h5 className='mt-4'>PROJECT LOGISTICS</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center mt-5">
                    <img src={notebook} alt="heart" />
                    <h5 className='mt-4'>SUPPLY MANAGEMENT</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>
                <div className="col-md-3 text-center mt-5">
                    <img src={cart} alt="heart" />
                    <h5 className='mt-4'>SERVICE STORE</h5>
                    <small className='text-secondary mt-4'>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm neque quam pharetra </small>
                </div>

            </div>
        </section>
    );
};

export default WhatWeOffer;