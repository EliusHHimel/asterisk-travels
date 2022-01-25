import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 sidebar" style={{ width: "280px" }}>
                <span className="fs-4 fw-bold">Dashboard</span>

                <hr />
                <p className='fw-bold'>Admins Panel</p><ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/dashboard/manageorders" className="nav-link link-dark">
                            Manage Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addpackage" className="nav-link link-dark">
                            Add Package
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/managepackages" className="nav-link link-dark">
                            Manage Packages
                        </Link>
                    </li>
                </ul>
                <hr />
                <p className='fw-bold'>Users Panel</p>
                <ul className="nav nav-pills flex-column mb-auto">

                    <li>
                        <Link to="/dashboard/myorders" className="nav-link link-dark">
                            View My Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review" className="nav-link link-dark">
                            Review
                        </Link>
                    </li>
                </ul>



            </div>
        </div >
    );
};

export default SideBar;