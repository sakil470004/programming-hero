import Carousel from 'react-bootstrap/Carousel';

function CarouselBs() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    style={{ height: '500px', objectFit: 'cover' }}
                    src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="First slide"
                />
                <Carousel.Caption className='text-white-50'>
                    <h3 >Korma Full</h3>
                    <p className=''>One of our fav product</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '500px', objectFit: 'cover' }}
                    src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                />


                <Carousel.Caption className='text-black-50'>
                    <h3>Narical Pitha</h3>
                    <p className=''>You can check chef hand word</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-white'>
                    <h3>Lota pata</h3>
                    <p className=''>It's healthy and Vegitarian</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBs;