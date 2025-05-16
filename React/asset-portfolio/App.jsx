import { useState, useEffect } from "react";
import './App.css'

function Asset({keyName, value, onAdd}) {
    return (
    <div className="asset-card">
        <div className="asset-text">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}: {value.usd}</div>
        <button style={{marginLeft: 5}} onClick={() => onAdd(keyName, value)}>+</button>
    </div>
    );
}

function App() {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [wallet, setWallet] = useState({})
    
    function handleAddToWallet(key, value) {
        var editedWallet = {...wallet};
        if (!editedWallet[key]){
            editedWallet[key] = 0;
        }
        editedWallet[key] += value.usd;
        setWallet(editedWallet);
        console.log(wallet);
    }
    
    function handleRemoveFromWallet(key, value) {
        var editedWallet = {...wallet};
        delete editedWallet[key]
        setWallet(editedWallet);
        console.log(wallet);
    }
    
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => {
            // if (!response.ok) {
            //     throw Error("Error")
            // }
            // return response.json()
            
            var responseMock = `{
                "bitcoin": {
                    "usd": 103738
                },
                "ethereum": {
                    "usd": 2551.89
                }
            }`
            return JSON.parse(responseMock)
        })
        .then(data => setData(data))
        .catch(error => setError(error.message))
    }, [])
    if (error) return <div>{error}</div>
    if (!data) return <div>Loading...</div>
    return (
        <div>
            <h1>Assets</h1>
            {Object.entries(data).map(([key, value]) => (
                <Asset key={key} keyName={key} value={value} onAdd={handleAddToWallet} />
            ))}
            <h1>Wallet</h1>
            {Object.entries(wallet).map(([key, value]) => (
              <div key={key} className="asset-card">
                    <div className="asset-text">{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</div>
                    <button style={{marginLeft: 5}} onClick={() => handleRemoveFromWallet(key, value)}>-</button>
                </div> 
            ))}
        </div>
    )
}
export default App;