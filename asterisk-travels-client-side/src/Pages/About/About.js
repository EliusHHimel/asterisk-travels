import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className='row align-items-center my-5'>
                    <div className="col-lg-6">
                        <img src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='img-fluid rounded' />
                    </div>
                    <div className="col-lg-6">
                        <h2>About Us</h2>
                        <p className='mt-3'>
                            Asterisk Travels is an independent travels company championing <br /> outdoor lifestyle, environmental stewardship and regenerative living. <br /> We encourage people to connect with the natural world <br /> in meaningful ways so they may become active stewards of our planet.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>SLOW TRAVEL</h2>
                        <p className="introduction">Want to discover authentic Finland?Then we advise you to take your time and slow down.To get a true sense of place and people, one needs time.</p>
                        <p>Choose train over car if you can and explore your local surroundings on foot or by bike.All cities and most small towns have bikes for rent –Helsinki’s bike rental system is the most used by citizens in all of Europe!Traveling by bike is by far the best way to experience Finland, whether you are heading to the fells of Lapland, along the scenic routes of coastal Finland or exploring Lakeland’s beautiful waterways from the shore.And because Finns are so connected to nature, there is almost certainly a trail system nearby where you can walk, cycle or run and ski in winter.</p>
                        <p><a href="https://www.visitfinland.com/getting-around/">Read more</a></p>
                    </div>
                    <div className="col-lg-6">
                        <p><a href="https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1.jpg"><img className="alignnone wp-image-26354 size-medium" src="https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1-300x240.jpg" alt="" width="300" height="240" srcset="https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1-300x240.jpg 300w, https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1-768x614.jpg 768w, https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1-375x300.jpg 375w, https://d34ip4tojxno3w.cloudfront.net/app/uploads/vf_sanna.activities-1.jpg 1000w" sizes="(max-width: 300px) 100vw, 300px" /></a></p>
                    </div>
                </div>

            </div>
            <div>
                <div class="footer-cta content blue p-5">
                    <h3>Want to travel with us?</h3>
                    <Link to="/booking" class="btn btn-warning">Start planning your trip</Link>
                </div>
            </div>
        </div>
    );
};

export default About;