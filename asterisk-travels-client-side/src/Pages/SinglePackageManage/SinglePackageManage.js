import React from 'react';

const SinglePackageManage = (props) => {
    const { _id, name, price, destination } = props.singlePackage;
    const handlePackageDelete = () => {
        const proceed = window.confirm(`Are you sure you want to delete this package?
        [Note: This will delete the package from our database]
        `)
        if (proceed) {
            fetch(`https://mighty-island-73950.herokuapp.com/packages/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Deleted Successfully. Reload the page to see update in the UI.')
                    }
                });
        }
    }
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{_id}</td>
                <td><button onClick={handlePackageDelete} className='btn text-white btn-danger'>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default SinglePackageManage;