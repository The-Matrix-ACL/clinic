import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {
    const handleToken = async (token, addresses) => {
        const response = await fetch('/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token.id,
                amount: 1000
            })
        });
    
        const data = await response.json();
        if (data.success) {
            console.log('Payment successful', data);
        } else {
            console.error('Payment error', data.error);
        }
    };

    return (
        <div>
            <StripeCheckout
                stripeKey="pk_test_51K8pKeAHoHtEwtN5PmpH89COOO1E8kd0TT27PiU2NovDU5RPHP20Q2EXUjzstNx6yhBMwir9egTX1tCwO3D3ebvD00QujcIxos"
                token={handleToken}
                amount={1000}
                name="Your Product Name"
            />
            <button type="submit" onClick={() => window.location.href = `/getWalletCredit`}>Wallet</button>
        </div>
        
    );
};

export default PaymentForm;