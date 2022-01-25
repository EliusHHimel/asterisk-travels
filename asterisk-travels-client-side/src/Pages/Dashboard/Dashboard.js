import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AddPackage from '../AddPackage/AddPackage';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManagePackages from '../ManagePackages/ManagePackages';
import MyOrders from '../MyOrders/MyOrders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SideBar from '../SideBar/SideBar';


const Dashboard = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='d-lg-flex'>
                    <SideBar></SideBar>
                    <Switch>

                        <PrivateRoute path='/dashboard/addpackage'>
                            <AddPackage></AddPackage>
                        </PrivateRoute>
                        <PrivateRoute path='/dashboard/manageorders'>
                            <ManageOrders></ManageOrders>
                        </PrivateRoute>
                        <PrivateRoute path='/dashboard/managepackages'>
                            <ManagePackages></ManagePackages>
                        </PrivateRoute>
                        <PrivateRoute path='/dashboard/myorders'>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Dashboard;