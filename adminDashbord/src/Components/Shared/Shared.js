
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle, faHome, faList, faRunning, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Shared = () => {
    const history = useHistory();
    return (
        <div className='adminBookContainer'> 
            <div className='itemsList pt-3'>
                        <Link to = '/'  className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faHome} /> Home</Link>
                        <br/>
                        <br/>
                        <Link to ='/Orders' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faBriefcase} /> Orders</Link>
                        <br/>
                        <br/>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faRunning} /> <span className='pe-1'> On Process</span></h6>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faCheckCircle} /> <span className='pe-1'> Complete</span></h6>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faList} /> All Raiders</h6>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserPlus} /> <span className='pe-1'> Add Admin</span></h6>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserPlus} /> <span className='pe-1'> Add Rider</span></h6>
                        <h6 className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserMinus} /> <span className='pe-1'> Manage Rider</span></h6>
                    </div>
        </div>
    );
};

export default Shared;