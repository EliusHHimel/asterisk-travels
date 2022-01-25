import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/dashboard'

    const handleGoogleSignIn = () => {

        signInUsingGoogle()
            .then(userData => {
                history.push(redirectURI);

            })

    }



    return (
        <div className="login-container mb-3">
            <div>
                <h1 className='mt-4'>Login to your account</h1>
                <center>
                    <button onClick={handleGoogleSignIn} className="btn border-dark d-block my-4"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" /> Login With Google</button>
                </center>
            </div>
        </div>
    );
};

export default Login;