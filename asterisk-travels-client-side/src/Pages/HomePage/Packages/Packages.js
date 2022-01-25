import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://mighty-island-73950.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div id="packages" className="container mt-4">
            <h1 className="ms-3">Our Available <span className="text-info">Packages</span></h1>
            <hr />
            <center>
                <div className="row ms-lg-5 ps-lg-5">
                    {
                        packages.map(singlePackage => <SinglePackage package={singlePackage} key={singlePackage._id}></SinglePackage>)
                    }
                </div>
            </center>
        </div>
    );
};

export default Packages;