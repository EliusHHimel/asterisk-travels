import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner-background text-white pt-5">
                <div className="ms-5 pt-5">
                    <h5>Welcome to the World's Best Travel Agency</h5>
                    <h1 className="agency-name">Asterisk Travels</h1>
                    <h6>We are the only travel agency who provides tour services all over the World at a very reasonable cost.</h6>
                    <Link className="btn btn-danger mt-3" to='/about'>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;