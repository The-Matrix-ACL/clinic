import React, { useState } from 'react';

function WalletViewer() {
    const [walletCredit, setWalletCredit] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
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
            console.log(data)
            setWalletCredit(data.WalletCredit);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <h2>Wallet Credit Viewer</h2>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username" 
            />
            <button onClick={fetchWalletCredit}>View Wallet Credit</button>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div>Wallet Credit for {username}: ${walletCredit}</div>
        </div>
    );
}

export default WalletViewer;