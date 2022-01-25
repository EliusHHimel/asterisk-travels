import React from 'react';

const SingleOrderDetails = (props) => {
    const order = props.order;
    const { _id, name, email, number, orderedPackageName, orderedPackageID, status } = order;



    const handleOrderApprove = () => {
        order.status = 'Approved'
        fetch(`https://mighty-island-73950.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Booking Successfully Approved.')
                }
            })
    }
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
                <td>{name}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>{orderedPackageName}</td>
                <td>{orderedPackageID}</td>
                <td className={status === 'Approved' ? 'text-green' : 'text-warning'}>{status}</td>
                <td><button onClick={handleOrderApprove} className='btn text-white btn-info'>✔</button></td>
                <td><button onClick={handleOrderCancel} className='btn text-white btn-danger'>X</button></td>
            </tr>
        </tbody>
    );
};

export default SingleOrderDetails;