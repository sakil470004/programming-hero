import React from 'react';
import Card from './Card';
import img from './../../assets/question.avif'
const Blog = () => {
    const questions = [
        {
            id: 1,
            question: 'When would you use Context API ?',
            ans: 'When I need to pass component to grandfather component to child component or when we need pass data thought the child lot of step(pops drilling) .That"s time we need to use Context API to reduce code and code complex.'
        },
        {
            id: 2,
            question: 'What is custom custom hook ?',
            ans: 'Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.We can also create react custom hook by combining 1 or more hooks'
        },
        {
            id: 3,
            question: 'Why we use useRef() ?',
            ans: 'The useRef() Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly'
        },
        {
            id: 4,
            question: 'Why we use useMemo() ?',
            ans: 'Fundamentally, useMemo built to help us optimize re-renders. it this in two ways: Reducing the amount of work that needs to be done in a given render. Reducing the number of times that a component needs to re-render.'
        },
    ]
    return (
        <div className='container-fit pt-5'>
            <img src={img} alt="" />
            {
                questions.map(data => <Card key={data.id} data={data} />)
            }
        </div>
    );
};

export default Blog;