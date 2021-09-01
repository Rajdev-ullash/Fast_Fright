import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNav from '../../DashboardNavbar/DashboardNav';
import Shared from '../../Shared/Shared';

const SingleRider = () => {
    const { id } = useParams()
    const [newRiders, setNewRiders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/getAllridingRequest')
            .then(res => res.json())
            .then(data => {
                setNewRiders(data.result)
                console.log(data)

            })
    }, [])
    console.log(newRiders)
    const newRider = newRiders.filter(newRider => newRider._id == id)
    console.log(newRider)
    const handleAppoient = (id) =>{
        fetch(`http://localhost:5000/api/riderAccept/${id}`,{
            method :'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <div>
                <DashboardNav ></DashboardNav>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Shared></Shared>
                </div>
                <div className="col-md-10 bg-light">
                    <h6 className='py-3 px-2'>Details Info of this applicants</h6>
                    <div>
                        {newRider.map(rider => 
                        <div  className='row'>
                        <div className=' col-md-8 py-3 px-3 bg-white shadow rounded mx-3'>
                            <div>
                                <h2>{rider.name}</h2>
                                <small>{newRider.createdAt}</small>
                            </div>
                            <div className='py-3 d-flex justify-content-between'>
                                <div >
                                    <h6>Address</h6>
                                    <small>{rider.address}</small>
                                </div>
                                <div >
                                    <h6>Email</h6>
                                    <small>{rider.email}</small>
                                </div>
                                <div >
                                    <h6>Phone Number</h6>
                                    <small>{rider.phone}</small>
                                </div>
                            </div>
                            <div className='py-3 d-flex justify-content-between'>
                                <div >
                                    <h6>Delivery Area</h6>
                                    <small>{rider.deliveryArea}</small>
                                </div>
                                <div >
                                    <h6>Vehicle</h6>
                                    <small>{rider.vehicle}</small>
                                </div>
                                <div >
                                    <h6>Status</h6>
                                    <small className='text-primary'>{rider.status}</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 shadow rounded d-flex flex-column justify-content-center align-items-center bg-white'>
                            <h5>Do You Want to Appoint <span className='text-primary'>{rider.name} </span>  as a Rider?</h5>
                            <button className="btn btn-primary" onClick={()=>{handleAppoient(rider._id)}}>Yes, I Want</button>

                        </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRider;