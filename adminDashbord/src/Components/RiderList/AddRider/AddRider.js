import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardNav from '../../DashboardNavbar/DashboardNav';
import Shared from '../../Shared/Shared';

const AddRider = () => {
    const history = useHistory()
    const[newRiders, setNewRiders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/api/getAllridingRequest')
        .then(res=>res.json())
        .then(data=>{
            setNewRiders(data.result)
            console.log(data)

        })
    },[])
    const handleClick = (id) =>{
        history.push(`/SingleRider/${id}`)

    }
    return (
        <div>
            <div>
                <DashboardNav ></DashboardNav>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Shared ></Shared>
                </div>
                <div className="col-md-10 bg-light p-3">
                    <h5>All Requesting Riders</h5>
                    {
                        newRiders.map(newRider=>
                            <div key={newRider._id}>
                                <div className='d-flex justify-content-between my-2 py-3 px-2 rounded bg-white shadow-sm'>
                                    <h6>{newRider.name}</h6>
                                    <h6>{newRider.email}</h6>
                                    <h6>{newRider.deliveryArea}</h6>
                                    <h6>{newRider.phone}</h6>
                                    <button className="btn btn-primary" onClick={()=>handleClick(newRider._id)} >Details</button>

                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AddRider;