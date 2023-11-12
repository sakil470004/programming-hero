import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoveIcon from '../../assets/icons/LoveIcon';
import ChefDetailsCard from './ChefDetailsCard';

const ChefDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [chef, setChef] = useState({});
    useEffect(() => {
        setLoading(true)
        fetch(`https://chef-hero-backend-sakil470004.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    return (
        <div className='mt-5'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img
                            style={{ minHeight: '300px', maxHeight: '400px', objectFit: 'cover' }}
                            variant="top" src={chef.imageLink} />
                    </div>
                    <div className="col-md-8">
                        <Card.Body >
                            <Card.Title>{chef?.chefName}</Card.Title>
                            <Card.Text>
                                <small>Hi I am
                                    <span className='text-danger'> {chef.chefName}</span>
                                    . Good to See you here, I have <span className='text-danger'> {chef.yearOfExperience}</span> year Experience. I made <span className='text-danger'> {chef.numberOfRecipes} </span> types of recipes.</small>
                                <span className='my-2'>Experience : {chef.yearOfExperience}</span><br />
                                <span>Number Of Recipes : {chef.numberOfRecipes}</span>
                                <br />
                                <br />
                                <span className='fs-4'><LoveIcon className="me-2" /> {chef.likes}</span><br />
                                <br />
                                <span className='mt-4 fs-4'>Popular Recipes</span><br />

                            </Card.Text>
                            <ol>
                                {
                                    chef?.recipes?.map((rec, index) => <li key={index}>{rec.recipeName}</li>)
                                }
                            </ol>
                        </Card.Body>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-danger mb-3'>List of My Favourite Dises</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        chef?.recipes?.map((rec, index) => <ChefDetailsCard key={index} recipe={rec} />)
                    }
                </Row>

            </div>
        </div>
    );
};

export default ChefDetails;