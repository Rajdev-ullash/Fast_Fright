import React from "react";

const Info = () => {
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center mt-5'>
            <form className='w-50 p-3 shadow rounded'>
                <div >
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Your Shop Name/Your Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Shop Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phon Number" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter Your Address"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
  );
};

export default Info;
