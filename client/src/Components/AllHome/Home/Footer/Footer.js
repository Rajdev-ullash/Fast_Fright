import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div>
            <div className='footer-container text-white row p-4'>
                <div className='col-md-3'>
                    <p><b>About Us</b> </p>
                    <h4>FAST FRIGHT</h4>
                    <p> <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita labore est, hic suscipit voluptatem quibusdam necessitatibus aliquid sunt cumque sit dignissimos cum eaque quaerat amet vitae tempora similique eligendi! Quasi minus incidunt optio tempore eos pariatur facere, dolore maxime, saepe nam enim ducimus expedita.</small></p>
                    <p className='text-warning link-list-item' >View Details&#62;&#62;</p>
                </div>                                                                 
                <div className='col-md-3'>
                    <p> <b> Twitter Feeds</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores quo mollitia!</p>
                    <p className="text-warning link-list-item">Learn More&#62;&#62; </p>
                </div>
                <div className='col-md-3'>
                    <p>News Letter</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates atque ipsam molestias voluptas expedita consequuntur unde explicabo omnis?
                    </p>
                    <p className="text-warning link-list-item">Learn More&#62;&#62;</p>

                </div>
                <div className='col-md-3'>
                    <p>Useful Links</p>
                    <ul className='links-lists'>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Services</li>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Contact Us</li>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Desclimer</li>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Careers</li>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Privacy Policy</li>
                        <li className='link-list-item'> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> Location</li>
                    </ul>
                </div>
            </div>
            <div className='footer-last w-100'>
                <p className='text-center text-white py-3 m-0'>© Copyright 2020 - FAST FRIGHT by Effetient Coders</p>
            </div>
        </div>
    );
};

export default Footer;