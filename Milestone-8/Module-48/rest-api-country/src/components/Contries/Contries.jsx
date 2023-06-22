import React, { useEffect, useState } from 'react';
import Contry from '../Country/Contry';
import './Contries.css'

const Contries = () => {
    const [contries,setContries]=useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setContries(data))
    },[])

    return (
        <div className='country-container'>
    {
        contries.map(contry=><Contry key={contry.cca3} country={contry}></Contry>)
    }        
        </div>
    );
};

export default Contries;