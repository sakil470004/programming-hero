import React from 'react';
import './Contry.css'

const Contry = (props) => {
    const {country}=props
    return (
        <div className='country'>
           <img src={country.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <p>Region : {country.region}</p>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default Contry;