import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // form.reset();
                toast.success(`Login Success`)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    const handleGoogleLogin = () => {
        setError('')
        googleLogin()
            .then((result) => {
                const user = result.user;
                toast.success(`Login Success`)

                navigate(from, { replace: true })

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                toast.success(`Login Success`)
                navigate(from, { replace: true })

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }

    return (
        <div className="mt-5">
            <div className="row justify-content-center " style={{ minHeight: '60vh' }}>
                <div className="col-md-5 border border-danger rounded-3 p-4 my-auto">
                    <Form onSubmit={handleSubmit}>
                        <h3 className='text-center mb-4'>Login From</h3>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' required type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Password" />
                        </Form.Group>

                        <Button className='mt-3 w-100' type="submit" variant="outline-danger">Login</Button>
                        <p className='mt-2'>New In Here ? <Link to={'/register'}>Register</Link></p>

                        <div className="mt-3">
                            <Button className='w-100 mb-2' variant="danger" onClick={handleGoogleLogin}>
                                Login with Google
                            </Button>

                            <Button onClick={handleGithubLogin} className='w-100 mb-2' variant="warning" >
                                Login with GitHub
                            </Button>
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );

};

export default Login;