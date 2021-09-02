import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardNav from '../../DashboardNavbar/DashboardNav';
import Shared from '../../Shared/Shared';

const AllRider = () => {
    const history = useHistory()
    const [verifiedRiders,setVerifiedRiders] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/api/getVerifiedRider')
        .then(res=>res.json())
        .then(data=> setVerifiedRiders(data.result))
    },[])
    const handleClick = (id) =>{
        history.push(`/VerifiedRider/${id}`)
    }
    console.log(verifiedRiders)
    return (
        <div>
            <div>
                <DashboardNav></DashboardNav>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Shared></Shared>
                </div>
                <div className="col-md-10 bg-light">
                    <h5>All Verified Riders</h5>
                    {
                        verifiedRiders.map(newRider=>
                            <div key={newRider._id}>
                                <div className='d-flex justify-content-between my-2 py-3 px-2 rounded bg-white shadow-sm'>
                                    <h6>{newRider.name}</h6>
                                    <h6>{newRider.email}</h6>
                                    <h6>{newRider._id}</h6>
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

export default AllRider;