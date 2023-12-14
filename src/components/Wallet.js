import React, { useState, useEffect } from 'react';

function Wallet() {
    const [walletCredit, setWalletCredit] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [username, setUsername] = useState('');

    const fetchWalletCredit = () => {
        setIsLoading(true);
        fetch('/getWalletCredit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("i am here")
            console.log(data)
            setWalletCredit(data.WalletCredit);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    };

    const handlePayment = () => {
        fetch('/payWithWallet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: Number(paymentAmount),username: username })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setWalletCredit(data.newWalletCredit);
            } else {
                setError(data.message);
            }
        })
        .catch(error => {
            setError(error.message);
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <h2>Wallet Credit: ${walletCredit}</h2>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username" 
            />
            <button onClick={fetchWalletCredit}>Check Wallet Credit</button>
            <input 
                type="number" 
                value={paymentAmount} 
                onChange={(e) => setPaymentAmount(e.target.value)} 
                placeholder="Enter amount" 
            />
            <button onClick={handlePayment}>Pay</button>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}


export default Wallet;
