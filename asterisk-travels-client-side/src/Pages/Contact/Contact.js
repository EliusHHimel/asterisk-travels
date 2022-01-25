import React from 'react';

// Contact us page

const Contact = () => {
    return (
        <div>
            <h1 className="mt-3 mb-3">Contact Us</h1>
            <p>Do you have any other queries? Kindly contact us using the form below. We will reply as soon as we can.</p>
            <form className="container">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Subject</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;