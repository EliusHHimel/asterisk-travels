import React from 'react';

const MySingleOrder = (props) => {
    const { _id, orderedPackageName, orderedPackageID, status, destination, price } = props.mySingleOrder;
    const handleOrderCancel = () => {
        const proceed = window.confirm(`Are you sure you want to cancel this order? [Note: This will also delete the order from our database]
`)
        if (proceed) {
            fetch(`https://mighty-island-73950.herokuapp.com/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Canceled Successfully. Reload the page to see update in the UI.')
                    }
                });
        }
    }
    return (
        <tbody>
            <tr>
                <td>{orderedPackageName}</td>
                <td>{price}</td>
                <td>{orderedPackageID}</td>
                <td className={status === 'Approved' ? 'text-green' : 'text-warning'}>{status}</td>
                <td>{destination}</td>
                <td><button onClick={handleOrderCancel} className='btn text-white btn-danger'>X</button></td>
            </tr>
        </tbody>
    );
};

export default MySingleOrder;