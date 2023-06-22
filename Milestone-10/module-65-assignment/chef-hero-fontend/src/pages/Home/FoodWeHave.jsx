import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const FoodWeHave = () => {
    const array = [
        {
            name: 'Morgi Sosa',
            img: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

        },
        {
            name: 'Lotapata Biskut',
            img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

        },
        {
            name: 'Indian Barger',
            img: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

        }
    ]
    return (
        <div>
            <h2 className='mt-5 mb-3 text-danger'>Our Popular Food</h2>
            <hr className="mx-auto" />
            <Row xs={1} md={2} lg={3}>

                {
                    array.map(element =>
                    (
                        <Col key={element.name}>
                            <Card>
                                <Card.Img variant="top" src={element.img} />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    )
                }
            </Row>

        </div>
    );
};

export default FoodWeHave;