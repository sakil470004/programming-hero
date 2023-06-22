import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import setTittle from "../shared/titleFixer";
import { toast } from "react-hot-toast";

const Login = () => {


    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
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
                console.log(user)
                navigate(from, { replace: true })

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    setTittle('Login')
    return (
        <div className="  bg-pink-50">
            <div className=" w-full md:w-1/3 mx-auto py-[15vh] md:py-52">

                <div className="card  shadow-2xl bg-slate-500">
                    <h2 className="text-center text-4xl text-white pt-10 ">Login </h2>
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control gap-4 mt-6">
                            <input className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white" type='submit' value='Login' />
                            <button onClick={handleGoogleLogin} className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white"><span className="bg-gray-800  border-2 border-white rounded-full text-white text-3xl px-2">G</span>  Google Login</button>
                        </div>
                    </form>
                    <p className="mt-6 mb-6 text-white text-center">New Here? Go to <Link className="text-pink-400 font-bold" to={'/register'}>register</Link></p>
                    {error && <p className='text-red-500 text-center'>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;