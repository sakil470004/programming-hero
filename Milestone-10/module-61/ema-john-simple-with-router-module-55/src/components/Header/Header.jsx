import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvide';

const Header = () => {
    const { user ,logOut} = useContext(AuthContext)
    const handleLogOUt=()=>{
        logOut()
        .then(details=>{console.log(details)})
        .catch(error=>console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='flex'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {!user? <div >
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>

                </div>:<p className='text-white ml-4 cursor-pointer' onClick={handleLogOUt}>Sign out</p>}
            </div>
        </nav>
    );
};

export default Header;