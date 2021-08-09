import React, { useEffect, useState } from 'react';
import data from '../../fakeData'
import CreateParcel from '../CreateParcel/CreateParcel';
const HocParcel = () => {
    const [location, setLocation] = useState([]);

   
    return (
        <div>
            {
                data.map( data =>  <CreateParcel key={data.id} district={data.district} upazilla={data.upazilla} ></CreateParcel>)
               
               }
        </div>
    );
};

export default HocParcel;