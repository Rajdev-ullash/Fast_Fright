import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const infosData =[
    {
        title:'Opening hour',
        description:'We are open seven days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit our Location',
        description:'Brooklyn, new york, USA',
        icon:faMapMarker,
        background:'dark'
    },{
        title:'Call us Now',
        description:'+6777484494',
        icon:faPhone,
        background:'primary'
    }
]
const BusinessInfo = () => {
    console.log(infosData);
    return (
        <section className="d-flex justify-content-center" >
            
           <div className="w-75 row" >
           {
             infosData.map(info => <InfoCard info={info} ></InfoCard>  )   
            }
           </div>
        </section>
    );
};

export default BusinessInfo;