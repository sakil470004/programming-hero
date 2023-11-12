import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Row, Spinner } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Hero = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://chef-hero-backend-sakil470004.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    return (
        <div>
            <h2 className='mt-5 mb-3 text-danger'>Our Chefs</h2>
            <hr className="mx-auto" />

            {/* using LazyLoad  */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef =>
                        <LazyLoad key={chef.id} offset={500}>
                            <ChefCard id={chef.id} />
                        </LazyLoad>

                    )
                }

            </Row>
        </div>
    );
};

export default Hero;