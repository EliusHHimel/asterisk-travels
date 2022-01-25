import React, { useEffect, useState } from 'react';
import SingleOrderDetails from '../SingleOrderDetails/SingleOrderDetails';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-island-73950.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <table className="table table-dark table-bordered table-striped m-2">
                <thead>
                    <tr>
                        <th scope="col">Customers Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Package ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Approve Order</th>
                        <th scope="col">Cancel Order</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <SingleOrderDetails key={order._id} order={order}></SingleOrderDetails>)
                }
            </table>
        </div>
    );
};

export default ManageOrders;