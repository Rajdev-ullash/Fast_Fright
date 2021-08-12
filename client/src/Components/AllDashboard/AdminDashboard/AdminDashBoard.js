import React from 'react';

import RiderFakeData from '../RiderDashboard/RaiderFakeData';
// import './Rider.css';
import {  useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Shared from '../Shared/Shared';
import Navbar from '../../AllHome/Home/Navbar/Navbar';

const AdminDashBoard = () => {
    
    const history = useHistory ()
    const handleClick = (id)=>{
        history.push(`/AdminBooking/${id}`)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='row '>
                <div className='col-md-2 py-2 riderDashTop text-center'>
                    {/* <h4 className='pl-3'>Fast Fright</h4> */}
                </div>
                <div className='col-md-10 pt-2'>
                    <div className='d-flex justify-content-between'>
                        <h4 >Order Lists</h4>
                        {/* <h4 style={{ paddingRight: '20px' }}>Test User</h4> */}
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-2 riderBookCntainer '>
                    {/* <div className='riderList pl-3'>
                        <h6 className='py-1'> <FontAwesomeIcon icon={faBriefcase} /> Orders</h6>
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> <span style={{ paddingRight: '12px' }}> On Process</span></h6>
                        <h6 className='py-1'> <FontAwesomeIcon icon={faBriefcase} /> All Raiders</h6>
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> <span style={{ paddingRight: '12px' }}> Complete</span></h6>
                    </div> */}
                    <Shared></Shared>
                </div>
                <div className='col-md-10'>
                    {
                        RiderFakeData.map(ride => <div className='d-flex justify-content-around my-2 py-2 rounded ride-list-container'>
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
                                <button className="btn btn-primary" onClick={()=>handleClick(ride.id)} >View Details</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;