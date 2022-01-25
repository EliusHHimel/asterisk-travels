import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mb-5">
            <img src="https://i.ibb.co/vwzhHTW/funny-404-page.jpg" alt="" className='w-75' /> <br />
            <Link className="btn btn-danger mt-3" exact to="/">Back To Home Page</Link>
        </div>
    );
};

export default NotFound;