import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <div className="content text-white">
            <div>
                <h3 className="" >We are the leading</h3>
                <h1 className="contentDetail">THE ULTIMATE <br />LOGISTIC SOLUTIONS</h1>
                <button className="contentDetail btn text-white bg-color">Get Quote</button>
            </div>
        </div>
    );
};

export default HeaderMain;