import React from 'react';
import logo from './../../image/logo.png'
import './Header.css'
const Header = ({ handleSearch }) => {
    const searchText = () => {
        const textBox = document.getElementById('nav-searchText');
        const text = textBox.value;
        textBox.value = ''
        handleSearch(text)
    }
    const clickEnterToSearch = (e) => {
        const key = e.key
        if (key === 'Enter') {
            searchText()
        }
    }
    const logoClicked=()=>{
        handleSearch('s')
    }
    return (
        <div className='nav-container'>
            <nav className="header">
                <img 
                onClick={logoClicked}
                src={logo} alt="" />
                <div>

                    <a href="">
                        Order
                    </a>
                    <a href="">Review</a>
                    <a href="">Manage Meal</a>
                    <a href="">Login</a>
                    <a className='search'>
                        <input
                        placeholder='Click Enter to search'
                            onKeyUp={clickEnterToSearch}
                            id='nav-searchText'
                            type="text" />
                        <button
                            onClick={searchText}

                        >Search</button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;