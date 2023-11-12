import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    // todo : get publishable key
    const stripePromise = loadStripe('');


    return (
        <div>
            <SectionTitle heading={"Payment Here"}></SectionTitle>
            <Elements stripe={stripePromise} >
                <CheckoutFrom />
            </Elements>
        </div>
    );
};

export default Payment;