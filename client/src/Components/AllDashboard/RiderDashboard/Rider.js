import React from 'react';
import RiderFakeData from './RaiderFakeData';
import './Rider.css'

const Rider = () => {
    return (
        <div className='row'>
            <div className='col-md-2 riderBookCntainer'>
                <h3>By Booking</h3>
                <ul>

                    <li>On Process</li>
                    <li>Completed</li>
                </ul>
            </div>
            <div className='col-md-10'>
                {
                    RiderFakeData.map(ride=> <div className='d-flex justify-content-around my-2 py-2 rounded ride-list-container'>
                        <h4>{ride.shopName}</h4>
                        <div>
                           <small>Place Of Pickup</small> 
                           <p>{ride.pickUpFrom}</p>
                        </div>
                        <div>
                           <small>Place of Destination</small> 
                           <p>{ride.destination}</p>
                        </div>
                        <div>
                           <small>Stuffing Date</small> 
                           <p>{ride.staffingDate}</p>
                        </div>
                        <div>
                           <small>Catagory</small> 
                           <p>{ride.catagory}</p>
                        </div>
                        <div className='pt-3'>
                        <button className="btn btn-primary">View Details</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Rider;