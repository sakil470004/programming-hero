import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // empty the error and success
        setError('')
        setSuccess('')
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setSuccess('login success')
          const user = userCredential.user;
          console.log(user)
     
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
      

    }

    return (
        <div className='w-50 mx-auto'>
          <h1>This is Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Password" />
                </Form.Group>

              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <small className='text-danger'>{error}</small>
                <small className='text-success'>{success}</small>

            </Form>
        </div>
    );
};

export default Login;