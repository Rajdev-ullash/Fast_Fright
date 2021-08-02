import React, { useState } from 'react';
import './BusinessInformation.css'

const BusinessInformation = () => {
    const [information,setInformation] =useState({});
    const handleInformation =(e) =>{
        const newInformation = {...information};
        newInformation[e.target.name]=e.target.value;
        setInformation(newInformation)
        
    }
    console.log(information)
    return (
        <div>
            <div className='text-center py-5'>
                <h2 >Add Your  Business Information</h2>
                <p>If you have more than one business, You can create multiple shops later</p>
            </div>
            <form >
            <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
                <div className='d-flex flex-wrap '>
                    <div class="mb-3 mx-4">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="text" name='fullName' class="form-control input-field" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Full Name' onBlur={handleInformation} />
                    </div>
                    <div class="mb-3  mx-4">
                        <label for="exampleInputPassword1" class="form-label">Shop Name</label>
                        <input type="text" class="form-control input-field" name='shopName' required placeholder='Enter Your Shop Name' id="exampleInputPassword1" onBlur={handleInformation}/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    <div class="mb-3  mx-4">
                        <label for="exampleInputEmail1" class="form-label">Shop Email Address</label>
                        <input type="email" class="form-control input-field" name='shopEmail' required placeholder='Enter Your Shop Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleInformation} />
                    </div>
                    <div class="mb-3  mx-4">
                        <label for="exampleInputPassword1" class="form-label">Shop Address</label>
                        <input type="text" class="form-control input-field" name='shopAddress' required placeholder='Enter Your Shop Address' id="exampleInputPassword1" onBlur={handleInformation} />
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    <div class="mb-3  mx-4">
                        <label for="exampleInputEmail1" class="form-label">Pickup Address</label>
                        <input type="text" class="form-control input-field" name='pickupAddress' required placeholder='Enter Your Pickup Address' id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleInformation}/>
                    </div>
                    <div class="mb-3 mx-4">
                        <label for="exampleInputPassword1" class="form-label">Pickup Area</label>
                        <input type="text" class="form-control input-field" name='pickupArea' required placeholder='Enter Your Pickup Area' id="exampleInputPassword1" onBlur={handleInformation} />
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    <div class="mb-3 mx-4">
                        <label for="exampleInputEmail1" class="form-label">Pickup Phone</label>
                        <input type="number" class="form-control input-field" name='pickupPhone' required placeholder='Enter Your Pickup Phone' id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleInformation}/>
                    </div>
                    <div class="mb-3 mx-4">
                        <label for="exampleInputPassword1" class="form-label">Product Type</label>
                        <select class="form-select input-field" aria-label="Default select example" name ='productType' onChange={handleInformation}>
                            <option selected>Open this select menu</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Ceafts">Ceafts</option>
                            <option value="Commounity">Commounity</option>
                            <option value="Food">Food</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                
                </div>
                </div>
                <div className='button'>
                <button type="submit" class="btn btn-primary px-5">Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default BusinessInformation;