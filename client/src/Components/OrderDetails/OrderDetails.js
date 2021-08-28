import React, { useState, useEffect, useContext, } from 'react';
import { faCaravan, faHome, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const OrderDetails = () => {
    const { _id } = useParams();
    console.log(_id);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/getParcelUser?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderDetails(data.result))
    }, [])
    const showOrder = orderDetails.find(order => order?._id == _id)
    console.log(showOrder)
    return (
        <div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='m-5 shadow rounded px-3 py-2'>
                        <div >
                            <h3>{showOrder?.customerName}</h3>
                            <hr />
                        </div>
                        <div className='bg-light text-primary rounded'>
                            <p className='p-2'>General Info</p>
                        </div>
                        <div className='a'>
                            <div className='row icon'>
                                <div className='d-flex  col-md-4'>
                                    <div className='ps-2 '>
                                        <p className='p-0 mb-0'>From</p>
                                        <p>{showOrder?.deliveryArea}</p>
                                    </div>
                                </div>
                                <div className=' col-md-4'>
                                    <small>Catagory</small>
                                    <p>{showOrder?.category}</p>

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
                                        <p>{showOrder?.deliveryArea}</p>
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
            </div>
        </div>
    );
};

export default OrderDetails;