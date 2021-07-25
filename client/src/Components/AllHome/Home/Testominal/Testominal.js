import React from 'react';
import './Testominal.css'



const Testominal = () => {
    return (
        <div>
            <div className="container">
                <div id="demo" className="carousel slide" data-ride="carousel">
                <h1 className="mt-5 text-center" style={{"color":"#ff5d1b","textTransform": "uppercase", "letterSpacing":".5px"}}>client says</h1>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/QptVdsp.jpg" alt="" className="img-fluid" />
                                <div id="image-caption">Cromption Greves</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/jQWThIn.jpg" alt="" className="img-fluid" />
                                <div id="image-caption">Harry Mon</div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <i className='fas fa-arrow-left'></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <i className='fas fa-arrow-right'></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testominal;