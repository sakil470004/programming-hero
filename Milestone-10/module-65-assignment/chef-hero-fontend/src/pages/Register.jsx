import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
        ;
    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');

        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        console.log(loggedUser)
                        navigate('/')
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    return (
        <div className="mt-5">
            <div className="row justify-content-center " style={{ minHeight: '70vh' }}>
                <div className="col-md-5 border border-danger rounded-3 p-4 my-auto">
                    <Form onSubmit={handleSubmit}>
                        <h3 className='text-center mb-4'>Register From</h3>
                        <Form.Group controlId="forName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' required type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="forPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photo' required type="text" placeholder="Enter Photo URL" />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' required type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Password" />
                        </Form.Group>

                        <Button className='mt-3 w-100' type="submit" variant="outline-danger">Register</Button>
                        <p className='mt-2'>Already Have Account ? <Link to={'/login'}> Login </Link></p>
                        {error && <p className='text-danger'>{error}</p>}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;