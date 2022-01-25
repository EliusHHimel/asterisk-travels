import React, { useEffect, useState } from 'react';
import SinglePackageManage from '../SinglePackageManage/SinglePackageManage';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://mighty-island-73950.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <div>
            <table className="table table-dark table-bordered table-striped m-2">
                <thead>
                    <tr>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Location</th>
                        <th scope="col">Package ID</th>
                        <th scope="col">Delete Package</th>
                    </tr>
                </thead>
                {
                    packages.map(singlePackage => <SinglePackageManage key={singlePackage._id} singlePackage={singlePackage}></SinglePackageManage>)
                }
            </table>
        </div>
    );
};

export default ManagePackages;