import React, { useEffect, useState } from 'react';
import LatestProductCard from './LatestProductCard';
import Loading from '../Loading/Loading';

const LatestProduct = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://battle-toys-server.vercel.app/latest')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            }).catch(error=>setLoading(false));
    }, [])
    return (
        <div data-aos="fade-up" className='my-20 shadow-md rounded-lg md:p-4'>
            <Loading loading={loading}>
                <h2 className='text-4xl text-pink-400 text-center mb-3 font-bold'>Latest Toys</h2>
                <p className='text-gray-400 font-bold text-center mb-10'>The Toys Your Child Need Most</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        toys.map(toy => <LatestProductCard key={toy._id} toy={toy} />)
                    }
                </div>
            </Loading>
        </div>
    );
};

export default LatestProduct;