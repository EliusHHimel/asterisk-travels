import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, signOutHandle } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand border border-white h1 fw-bolder p-2" to="/"><span className="w-50 text-danger">Asterisk</span> Travels</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/" activeStyle={{}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about" activeStyle={{}}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#packages">Packages</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/stories" activeStyle={{}}>Stories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact" activeStyle={{}}>Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-3">

                            {

                                user.email ? <>
                                    <li>
                                        <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
                                    </li>
                                    <span className='text-white mt-2 me-2'>{user.displayName}</span><button onClick={signOutHandle} className="btn nav-link border">Logout</button>

                                </> :
                                    <><li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                    </li>

                                    </>

                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;