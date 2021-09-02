import React, {useContext, useState} from 'react';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const SingleRiderData = () => {
    const [loggedInRider, setLoggedInRider] = useContext(UserContext);
    console.log('l',loggedInRider)
    let riderEmail = localStorage.getItem('email')
    let rEmail = JSON.parse(riderEmail)
    console.log(rEmail)
    console.log(loggedInRider);
    const [singleData, setSingleData] = useState([]);
    
    useEffect(() =>{
        console.log('e',loggedInRider.rEmail)
        fetch('http://localhost:5000/api/getRidingParcelInfo?email=' + loggedInRider.rEmail)
        .then(res => res.json())
        .then(data => console.log('d', data))
    },[])
    console.log(singleData)
    return (
        <div>
            <h1>Monwar</h1>
        </div>
    );
};

export default SingleRiderData;