import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {
    const { _id, name, description, price, destination, img } = props.package;
    return (
        <div className="card col-lg-6 m-2" style={{ width: "30rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text fw-bold">Price: {price}</p>
                <p className="card-text fw-bold">Location: {destination}</p>
                <Link to={'/book/' + _id} className="btn btn-primary">Book</Link>
            </div>
        </div>
    );
};

export default SinglePackage;