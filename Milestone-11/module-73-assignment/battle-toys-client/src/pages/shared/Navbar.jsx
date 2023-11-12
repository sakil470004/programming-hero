import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';
import BiUserCircle from '../../assets/icons/User';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOUt = () => {
        logOut()
            .then(details => {})
            .catch(error => console.log(error))
    }
    const navElement = <>

        <li><Link className='' to={'/'}>Home</Link></li>
        <li><Link className='' to={'/blog'}>Blog</Link></li>
        {user && <>
            <li><Link className='' to={'/addtoy'}>Add Toy</Link></li>
            <li><Link className='' to={'/mytoys'}>My Toys</Link></li>
        </>}
        <li><Link className='' to={'/alltoys'}>All Toys</Link></li>
    </>
    return (
        <div className="navbar bg-pink-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-slate-500 lg:hidden">
                        |||
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <Link to={'/'} className=""><img src={logo} width={100} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navElement}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {!user && <Link to={'/login'} className="btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white px-6">Login</Link>}
                {user && <button onClick={handleLogOUt} className="btn bg-pink-200 text-black hover:bg-rose-400 hover:text-white px-6">Logout</button>}
                {user?.photoURL && <img alt='profile' src={user.photoURL} className='rounded-full object-cover cursor-pointer h-11 ' title={user?.displayName} />}
                {/* if user image not here but user is here and it's name */}
                {(user && !user.photoURL) && <div width={40} height={40} title={user?.displayName}><BiUserCircle /></div>}
            </div>
        </div>
    );
};

export default Navbar;