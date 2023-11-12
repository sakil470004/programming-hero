import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user,logout } = useContext(AuthContext)
   const handleLogout=()=>{
    logout()
  .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
   }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Auth Master</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                      { user && <div className='flex'><li><Link to={'/profile'}>Profile</Link></li>
                        <li><Link to={'/order'}>Orders</Link></li></div>}
                        <li><Link to={'/register'}>Register</Link></li>
                        <li> {
                            user ? <span>{user.email}<button
                            onClick={handleLogout}
                                className="btn btn-error">Logout</button></span>
                                : <Link to={'/login'}>Login</Link>
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;