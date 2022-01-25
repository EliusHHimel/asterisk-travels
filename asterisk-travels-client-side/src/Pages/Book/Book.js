import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Book = () => {
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.orderedPackageID = id;
        data.orderedPackageName = singlePackage.name;
        data.destination = singlePackage.destination;
        data.price = singlePackage.price;
        data.status = 'Pending';

        fetch('https://mighty-island-73950.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Package Booked Succesfully.")
                    reset(data)

                }
            })
    }

    useEffect(() => {
        fetch(`https://mighty-island-73950.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, [id])


    return (
        <div className="container">
            <h2>You are requesting to book the following package.</h2>
            <center>
                <div className='d-lg-flex'>
                    <div className="card m-2" style={{ width: "30rem" }}>

                        <img src={singlePackage.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singlePackage.name}</h5>
                            <p className="card-text">Price: {singlePackage.price}</p>
                            <p className="card-text">Location: {singlePackage.destination}</p>
                        </div>
                    </div>
                    <div className='ms-3 mt-2'>
                        <h4>Enter your details below to confirm booking.</h4>
                        <small>All fields are required <span className='text-danger'>*</span></small>
                        <form onSubmit={handleSubmit(onSubmit)} className='row w-75'>
                            <input className='mt-2 p-2' defaultValue={user.displayName} {...register("name", { required: true })} />
                            <input className='mt-2 p-2' defaultValue={user.email} {...register("email", { required: true })} />
                            <input className='mt-2 p-2' {...register("address", { required: true })} placeholder="Enter your address" />
                            <input className='mt-2 p-2' {...register("number", { required: true })} placeholder="Enter your mobile number" />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='mt-2 btn border btn-primary' type="submit" value='Confirm Booking' />
                        </form>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Book;