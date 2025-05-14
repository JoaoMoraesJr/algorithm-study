import React, { useState } from 'react';

function Login() {
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!email.includes('@')) {
            setError("Oh no!");
        } else {
            setIsLogged(true);
        }
    }
    
    function handleEmailChange(email) {
        setEmail(email);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{marginTop: 10}}>
                    <label htmlFor='email'>Email</label><br />
                    <input id='email' type="text" onChange={(e) => {handleEmailChange(e.target.value)}}/>
                </div>
                <div style={{marginTop: 10}}>
                    <label htmlFor='password'>Password</label><br />
                    <input id='password' type="number" />
                </div>
                <div style={{color: 'red'}}>{error}</div>
                <button style={{marginTop: 10}}>Log In</button>
            </form>
            {isLogged &&
                <div>Welcome {email}</div>
            }
        </div>
    )
}

export default Login