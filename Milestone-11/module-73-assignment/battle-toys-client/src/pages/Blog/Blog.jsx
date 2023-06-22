import React from 'react';
import setTittle from '../shared/titleFixer';

const Blog = () => {
    setTittle('Blog')
    return (
        <div className="py-10 bg-pink-50 px-2" >
            <h2 className="text-center text-5xl text-rose-700">Answer and Question</h2>
            <div className=" ">
                <div className="mt-10">
                    <h5 className='text-2xl mb-5 text-pink-400'>
                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h5>
                    <p>
                        Access Token: The access token should be stored securely on the client-side, usually in memory or a secure token storage mechanism provided by the operating system or framework. Storing it in memory ensures it is accessible only within the current session or app instance.
                        <br />
                        <br />
                        Refresh Token: Refresh tokens are more sensitive since they have a longer lifespan and can be used to obtain new access tokens. It is recommended to store refresh tokens securely, typically using a secure HTTP-only cookie or a secure local storage mechanism, depending on the platform and security requirements. These storage options provide protection against cross-site scripting (XSS) attacks and make it harder for malicious actors to access the refresh token.
                    </p>
                </div>
                <hr className="mx-auto my-10 h-1 bg-slate-200" />
                <div className="mt-10">
                    <h5 className='text-2xl mb-5 text-pink-400'>
                        2. Compare SQL and NoSQL databases?
                    </h5>
                    <p>
                        SQL Databases:

                        Follow a structured approach with fixed schemas and tables.
                        Enforce ACID (Atomicity, Consistency, Isolation, Durability) properties for data integrity and consistency.
                        Support transactions using SQL as the standard query language.
                        Typically scale vertically by upgrading hardware resources.
                        Making structural changes to the schema can be complex and time-consuming.
                        Well-suited for structured and relational data with complex relationships.
                        Commonly used for use cases such as financial systems, inventory management, and CRM systems.
                        <br />
                        <br />
                        NoSQL Databases:

                        Provide a flexible or schema-less approach.
                        Allow storing and manipulating unstructured, semi-structured, and structured data without predefined schemas.
                        Do not always enforce ACID properties, and data consistency mechanisms vary.
                        Transactions support may vary across different NoSQL databases.
                        Designed for horizontal scalability, allowing data distribution across multiple servers.
                        Offer a flexible schema, making it easier to adapt to changing data requirements.
                        Well-suited for handling large amounts of unstructured and rapidly changing data.
                        Commonly used for use cases such as content management systems, real-time analytics, and applications with evolving data models.
                    </p>
                </div>
                <hr className="mx-auto my-10 h-1 bg-slate-200" />
                <div className="mt-10">
                    <h5 className='text-2xl mb-5 text-pink-400'>
                        3. What is express js? What is Nest JS ?
                    </h5>
                    <p>
                        Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and utilities that simplify the development of web applications and APIs. Express.js allows you to create server-side applications and handle HTTP requests and responses easily. It provides routing capabilities, middleware support, and an ecosystem of plugins and extensions that enhance its functionality.
                        <br />
                        <br />
                        Nest.js, on the other hand, is a framework for building scalable and efficient server-side applications in Node.js. It is built on top of Express.js and incorporates concepts from object-oriented programming, functional programming, and reactive programming. Nest.js aims to provide a robust architecture for building server-side applications, making it easier to develop and maintain large-scale projects.
                    </p>
                </div>
                <hr className="mx-auto my-10 h-1 bg-slate-200" />
                <div className="mt-10">
                    <h5 className='text-2xl mb-5 text-pink-400'>
                        4. What is MongoDB aggregate and how does it work ?
                    </h5>
                    <p>
                        MongoDB's Aggregation framework is a powerful feature that allows you to perform advanced data analysis and transformation operations on your MongoDB collections. It provides a way to process and manipulate data within the database, allowing you to perform complex queries, calculations, aggregations, and transformations.
                        <br />
                        <br />
                        The Aggregation framework works by defining a pipeline of stages that are applied sequentially to the documents in a collection. Each stage performs a specific operation on the data and passes the results to the next stage. The output of the last stage in the pipeline is the final result of the aggregation.
                    </p>
                </div>
           

            </div>
        </div>
    );
};

export default Blog;