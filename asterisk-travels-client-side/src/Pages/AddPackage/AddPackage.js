import React, { useRef } from 'react';

const AddPackage = () => {
    const nameRef = useRef('');
    const priceRef = useRef('');
    const destinationRef = useRef('');
    const imgURLRef = useRef('');
    const descriptionRef = useRef('');
    // const priceRef = useRef('');
    const handleAddUser = event => {

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const destination = destinationRef.current.value;
        const img = imgURLRef.current.value;
        const description = destinationRef.current.value;

        const newPackage = { name, price, destination, img, description };

        fetch('https://mighty-island-73950.herokuapp.com/packages', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Package added succesfully.")
                    nameRef.current.value = '';
                    priceRef.current.value = '';
                    destinationRef.current.value = '';
                    imgURLRef.current.value = '';
                    destinationRef.current.value = '';
                }
            })

        event.preventDefault();
    }
    return (
        <div className='ms-5 ps-5'>
            <h2>Add a package in your package list</h2>
            <form onSubmit={handleAddUser} className='package-form'>
                <input className='p-2' ref={nameRef} type="text" placeholder="Enter package name" />
                <br />
                <input className='p-2' ref={descriptionRef} type="text" placeholder="Enter package description" />
                <br />
                <input className='p-2' ref={priceRef} type="number" placeholder="Enter your package price" />
                <br />
                <input className='p-2' ref={destinationRef} type="text" placeholder="Enter your package destination" />
                <br />
                <input className='p-2' ref={imgURLRef} type="text" placeholder="Enter your package image url" />
                <br />
                <input type="submit" value="Add Package" className='btn border btn-danger' />
            </form>
        </div>
    );
};

export default AddPackage;