import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ManageOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [manageOrderData, setMangeOrderData] = useState([]);
    useEffect(() => {
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


// const manageOrder = () => {
//     const [manageOrderData, setMangeOrderData] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/api/getParcelUser')
//         .then(res => res.json())
//         .then(data => setMangeOrderData(data) )
//     }, [])
//     console.log(manageOrderData)
//     return (
        // <div>
        //     <div className='row'>
        //         <div className='col-md-2 px-0'>
        //         </div>
        //         <div className='col-md-10' style={{backgroundColor:'#f0f1f7'}}>
        //             {
        //                 manageOrderData.map(ride => <div className='d-flex justify-content-around my-3 py-2 rounded ride-list-container shadow-sm '>
        //                     <h4>{ride.customerName}</h4>
        //                     <div>
        //                         <small>Place Of Pickup</small>
        //                         <p>{ride.deliveryArea}</p>
        //                     </div>
        //                     <div>
        //                         <small>Place of Destination</small>
        //                         <p>{ride.deliveryArea}</p>
        //                     </div>
        //                     <div>
        //                         <small>Weight</small>
        //                         <p>{ride.weight}</p>
        //                     </div>
        //                     <div>
        //                         <small>Catagory</small>
        //                         <p>{ride.category}</p>
        //                     </div>
        //                     <div className='pt-3'>
        //                         <Link to = {`/AdminBooking/${ride._id}`} className="btn btn-primary" >View Details</Link>
        //                     </div>
        //                 </div>)
        //             }
        //         </div>
        //     </div>
        // </div>
//     );
// };

// export default manageOrder;