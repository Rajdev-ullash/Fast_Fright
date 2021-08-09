
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle, faList, faRunning, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Shared = () => {
    return (
        <div>
            <div className='riderList pl-3'>
                        <h6 className='py-1'> <FontAwesomeIcon icon={faBriefcase} /> Orders</h6>
                        <h6> <FontAwesomeIcon icon={faRunning} /> <span style={{ paddingRight: '12px' }}> On Process</span></h6>
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> <span style={{ paddingRight: '12px' }}> Complete</span></h6>
                        <h6 className='py-1'> <FontAwesomeIcon icon={faList} /> All Raiders</h6>
                        <h6> <FontAwesomeIcon icon={faUserPlus} /> <span style={{ paddingRight: '12px' }}> Add Admin</span></h6>
                        <h6> <FontAwesomeIcon icon={faUserPlus} /> <span style={{ paddingRight: '12px' }}> Add Rider</span></h6>
                        <h6> <FontAwesomeIcon icon={faUserMinus} /> <span style={{ paddingRight: '12px' }}> Manage Rider</span></h6>
                        {/* <h6> <FontAwesomeIcon icon={faCheckCircle} /> <span style={{ paddingRight: '12px' }}> Manage Rider</span></h6> */}
                    </div>
        </div>
    );
};

export default Shared;