import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Shared from '../../Shared/Shared';
// import Navbar from '../../../../client/src/Components/AllHome/Home/Navbar/Navbar';
import RiderFakeData from './RiderFakeData';
import './AdminDashboard.css'
import DashboardNav from '../../DashboardNavbar/DashboardNav';

const DashboardOrders = () => {
    const history = useHistory()
    const handleClick = (id) => {
        history.push(`/AdminBooking/${id}`)
    }
    return (
        <div>
            {/* <div className='row '>
                <div className='col-md-2 adminDashTop text-center'>
                </div>
                <div className='col-md-10 pt-2'>
                    <div className='d-flex justify-content-between'>
                        <h4 >Order Lists</h4>
                    </div>
                </div>

            </div> */}
            <DashboardNav></DashboardNav>
            <hr />
            <div className='row'>
                <div className='col-md-2 px-0'>
                    <Shared></Shared>
                </div>
                <div className='col-md-10' style={{backgroundColor:'#f0f1f7'}}>
                    {
                        RiderFakeData.map(ride => <div className='d-flex justify-content-around my-3 py-2 rounded ride-list-container shadow-sm '>
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
                                <button className="btn btn-primary" onClick={() => handleClick(ride.id)} >View Details</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardOrders;