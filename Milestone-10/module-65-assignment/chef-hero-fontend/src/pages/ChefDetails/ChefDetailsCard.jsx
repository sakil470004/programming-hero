import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import LoveIcon from '../../assets/icons/LoveIcon';
import LoveFillIcon from '../../assets/icons/LoveFillIcon';
import { toast } from 'react-hot-toast';

const ChefDetailsCard = ({ recipe }) => {
    const [bookmark, setBookmark] = useState(false);
    const handleBookmark = () => {
        toast.success(`Favourite ${!bookmark ? 'Added' : 'Removed'}`)
        setBookmark(!bookmark)
    }
    return (
        <Col>
            <Card>

                <Card.Body>
                    <Card.Title>{recipe.recipeName}</Card.Title>
                    <h6 className='mt-3 text-danger'>Ingredients</h6>
                    <ol>
                        {
                            recipe?.ingredients.map(ing => <li key={ing}>{ing}</li>)
                        }
                    </ol>
                    <small>
                        <small className='fw-bolder text-danger mb-2 '>Cooking Method</small>
                        <br />
                        {recipe?.cookingMethod}
                    </small>
                    <p className='mt-3'>Rating : {recipe.rating}</p>
                    <Button disabled={bookmark?true:false} variant={!bookmark ? "secondary" : ""} onClick={handleBookmark} className='d-flex align-items-center gap-2 '> Favourite
                        {!bookmark ? <span className='fs-4 '><LoveIcon /> </span> :
                            <span className='fs-4'><LoveFillIcon /> </span>
                        }

                    </Button>

                </Card.Body>
            </Card>
        </Col >
    );
};

export default ChefDetailsCard;