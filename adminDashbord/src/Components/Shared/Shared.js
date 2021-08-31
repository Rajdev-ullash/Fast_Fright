
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
                <Link to='/' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faHome} /> Home</Link>
                <br />
                <br />
                <Link to='/Orders' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faBriefcase} /> Orders</Link>
                <br />
                <br />
                <Link to='/Orders' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faRunning} /> <span className='pe-1'> On Process</span></Link>
                <br />
                <br />
                <Link to='/Orders' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faCheckCircle} /> <span className='pe-1'> Complete</span></Link>
                <br />
                <br />
                <Link to='/AllRider' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faList} /> All Raiders</Link>
                <br /><br />
                <Link to='/#' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserPlus} /> <span className='pe-1'> Add Admin</span></Link>
                <br /><br />
                <Link to='/AddRider' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserPlus} /> <span className='pe-1'> Add Rider</span></Link>
                <br /><br />
                <Link to='/#' className='py-2 text-dark fw-bold text-decoration-none'> <FontAwesomeIcon icon={faUserMinus} /> <span className='pe-1'> Manage Rider</span></Link>
            </div>
        </div>
    );
};

export default Shared;