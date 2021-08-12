import React from 'react';
import { useParams } from 'react-router-dom';
import RiderFakeData from '../RaiderFakeData';


const RaiderBookingDetails = () => {
    const {id} = useParams()
    console.log(id)
    const orderInfo = RiderFakeData.filter(rider=>rider.id == id)
    // console.log(orderInfo)
    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                </div>
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit mollitia assumenda et, sapiente perferendis ratione voluptatem saepe, dolor ad voluptates amet eos. Illum porro dignissimos architecto inventore iure hic!
                </div>
            </div>
        </div>
    );
};

export default RaiderBookingDetails;