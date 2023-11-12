import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-70">
            <div className="text-center p-4 m-4">
                <LazyLoad>
                    <img
                        src="https://images.unsplash.com/photo-1620063633168-8b30e52edf95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FkJTIwZW1vaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Page not found"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "400px" }}
                    />
                </LazyLoad>
                <h2 className="mb-4">Oops! Page not found</h2>
                <p className="lead">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <Link to={'/'} className="btn btn-lg btn-primary">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Page404;