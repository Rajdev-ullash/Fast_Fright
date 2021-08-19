import { faCaravan, faHome, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import RiderFakeData from '../AdminDashboard/DashboardOrders/RiderFakeData';
import DashboardNav from '../DashboardNavbar/DashboardNav';
import './AdminBookin.css'

const AdminBooking = () => {
    const { id } = useParams()
    console.log(id)
    const singleOrder = RiderFakeData.find(order => order.id == id)
    console.log(singleOrder)
    return (
        <div>
            <DashboardNav></DashboardNav>
            <hr />
            <div className='row'>
                <div className='col-md-8'>
                    <div className='m-5 shadow rounded px-3 py-2'>
                        <div >
                            <h3>{singleOrder.shopName}</h3>
                            <small>{singleOrder.staffingDate}</small>
                            <hr />
                        </div>
                        <div className='bg-light text-primary rounded'>
                            <p className='p-2'>General Info</p>
                        </div>
                        <div className='a'>
                            <div className='row icon'>
                                <div className='d-flex  col-md-4'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' className='mt-2 ' ></FontAwesomeIcon>
                                    <div className='ps-2 '>
                                        <p className='p-0 mb-0'>From</p>
                                        <p>{singleOrder.pickUpFrom}</p>
                                    </div>
                                </div>
                                <div className=' col-md-4'>
                                    <small>Catagory</small>
                                    <p>{singleOrder.catagory}</p>
                                </div>
                                <div className=' col-md-4'>
                                    <small>Current Statuse</small>
                                    <p className='text-primary'>Prepaid</p>
                                </div>
                            </div>
                            <div className='row icon'>
                                <div className='d-flex col-md-4'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' className='mt-2 ' ></FontAwesomeIcon>
                                    <div className='ps-2 '>
                                        <p className='p-0 mb-0'>Destination</p>
                                        <p>{singleOrder.destination}</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <small>Shipping Mode</small>
                                    <p>Store Door to Store Door</p>
                                </div>
                                <div className='col-md-4'>
                                    <small>Incoterm</small>
                                    <p>Prepaid</p>
                                </div>
                            </div>
                            <div className='icon'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faHome} size='2x' className='mt-2 ' ></FontAwesomeIcon>
                                    <div className='ps-2 '>
                                        <small className='p-0 mb-0'>Origine Store Door Location</small>
                                        <p>Home No: 122, Mirpir Road, 2/3 Mirpur, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className='icon'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faCaravan} size='2x' className='mt-2 ' ></FontAwesomeIcon>
                                    <div className='ps-2 '>
                                        <small className='p-0 mb-0'>Destination Store Door Location</small>
                                        <p>Home No: 122, Mirpir Road, 2/3 Mirpur, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h5>Order Proceed to Rider</h5>
                    <div className='mt-5 shadow rounded px-3 py-2'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"> Rider Id</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Rider Id" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Rider Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Rider Email" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Add Note(If Needed)</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Enter Add Note(If Needed)"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBooking;