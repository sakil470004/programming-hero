import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.init';
const Register = () => {
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
        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please add at least one numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setSuccess('SuccessFully added user')
          e.target.reset()
          sendVerificationForEmail(userCredential.user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
      
    }
    const sendVerificationForEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {

                alert('Please verify your email address')
            }).catch(error=>{
                console.log(error)
            })
    }
    return (
        <div className='w-50 mx-auto'>
           <h1>This is Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept tram and condition" required />
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

export default Register;