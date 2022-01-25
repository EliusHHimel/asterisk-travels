import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-island-73950.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const myAllOrders = orders.filter(myOrder =>
        myOrder.email === user.email
    )

    return (
        <div>
            <div className="m-2">
                <h4>My Orders</h4>
                <table className="table table-dark table-bordered table-striped m-2">
                    <thead>
                        <tr>
                            <th scope="col">Package Name</th>
                            <th scope="col">Package Price</th>
                            <th scope="col">Package ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Cancel Order</th>
                        </tr>
                    </thead>
                    {
                        myAllOrders.map(mySingleOrder => <MySingleOrder key={mySingleOrder._id} mySingleOrder={mySingleOrder}></MySingleOrder>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;