import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ManageOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [manageOrderData, setMangeOrderData] = useState([]);
    useEffect(() => {
        // console.log('e',loggedInUser.email)
        fetch('http://localhost:5000/api/getParcelUser?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setMangeOrderData(data.result))
    }, [])
    console.log(manageOrderData)


    return (
        <div>
            <div className='row'>
                <div className='col-md-12' style={{ backgroundColor: '#f0f1f7' }}>
                    {
                        manageOrderData.map(ride => <div className='d-flex justify-content-around my-3 py-2 rounded ride-list-container shadow-sm '>
                            <div>
                                <small>Customer Name</small>
                                <h4>{ride.customerName}</h4>
                            </div>
                            <div>
                                <small>Customer Number</small>
                                <p>{ride.customerNumber}</p>
                            </div>
                            <div>
                                <small>Customer Email</small>
                                <p>{ride.customerEmail}</p>
                            </div>
                            <div>
                                <small>Weight</small>
                                <p>{ride.weight}</p>
                            </div>
                            <div>
                                <small>Catagory</small>
                                <p>{ride.category}</p>
                            </div>
                            <div className='pt-3'>
                                <Link to={`/orderDetails/${ride._id}`} className="btn btn-primary" >View Details</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;

