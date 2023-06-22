import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef()
    const {signIn}=useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });


    }
    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value, false) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <LoadCanvasTemplate />
                            <input ref={captchaRef} type="text" placeholder="Enter The above value" className="input input-bordered" />
                            <p onClick={handleCaptcha} disabled={!disabled} className="btn btn-xs">Submit Captcha</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" disabled={disabled} type="submit" value="Login" />
                        </div>
                    </form>
                    <Link to={'/signup'} className='btn btn-outline'>New Here ? Go on SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;