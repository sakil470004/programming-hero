import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import setTittle from '../shared/titleFixer';
import { toast } from 'react-hot-toast';

const Register = () => {

  const navigate = useNavigate()
    ;
  const [error, setError] = useState('');
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
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
        updateUser({ displayName: name, photoURL: img })
          .then(() => {
            console.log(loggedUser)
            toast.success(`Login Success`)
            navigate('/')
          }).catch((error) => {
            
          });
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })

  }
  setTittle('Register')
  return (
    <div className="  bg-pink-50">
      <div className=" w-full md:w-1/3 mx-auto py-[15vh] md:py-40">

        <div className="card  shadow-2xl bg-slate-500">
          <h2 className="text-center text-4xl text-white pt-10 ">Register Here </h2>

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name='name' required className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />

            </div> 
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input type="text" placeholder="Provide Valid Photo URL" name='img' className="input input-bordered" />

            </div>
            <div className="form-control mt-6">
              <input className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white" value='Register' type='submit'/>
            </div>
              <p className="mt-6 mb-6 text-white text-center">Already Account Here? Go to <Link className="text-pink-400 font-bold" to={'/login'}>Login</Link></p>
              {error && <p className='text-red-500 text-center'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;