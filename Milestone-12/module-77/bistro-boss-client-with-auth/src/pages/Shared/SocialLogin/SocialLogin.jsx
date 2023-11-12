import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const savedUser = { name: user.displayName, email: user.email }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(savedUser)

        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          })

        navigate(from, { replace: true });

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <div className="divider"></div>
      <div className='w-full flex items-center justify-center my-4'>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FcGoogle></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;