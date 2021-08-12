import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RiderFakeData from '../../RiderDashboard/RaiderFakeData';
import Navbar from '../../../AllHome/Home/Navbar/Navbar';
import './AdminBooking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const AdminBookingDetails = () => {
    const { id } = useParams();
    console.log(id);
    const orderInfo = RiderFakeData.find(rider => rider.id == id);
    const [generalInfo, setGeneralInfo] = useState(true);
    console.log(orderInfo);
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-9">
                    <div className="shadow rounded m-5">
                        <div className='px-4 pt-4 my-3'>
                            <h4>{orderInfo.shopName}</h4>
                            <small>Id: {orderInfo.id}, </small>
                            <small> Staffing Date: {orderInfo.staffingDate} </small>
                        </div>
                        <div className='px-4 bg-light py-2'>
                            <small className='pe-2 bookingInfo' > General Info</small>
                            <small className='pe-2 bookingInfo'  > Documents</small>
                            <small className='pe-2 bookingInfo'> Invoice</small>
                        </div>

                        {generalInfo && <div className='px-4 py-2'>
                            <small className='text-primary'>General Info</small>
                            <div className="py-4">
                                <div  className='d-flex'>
                                <p> <span className='pickUpFrom'><FontAwesomeIcon icon={faMapMarkerAlt} size='1x'></FontAwesomeIcon></span> </p>
                                <div className='mb-0'>
                                    <p className='mb-0'>Pick Up From</p>
                                    <p className='mb-0'>{orderInfo.pickUpFrom}</p>
                                </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit mollitia assumenda et, sapiente perferendis ratione voluptatem saepe, dolor ad voluptates amet eos. Illum porro dignissimos architecto inventore iure hic!
                </div>
            </div>
        </div>
    );

};

export default AdminBookingDetails;