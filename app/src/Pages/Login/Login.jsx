import React, { useState } from 'react';
import './login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseUrl = 'https://uship.onrender.com';
    const handleLogin = async () => {
        try {
            const response = await fetch(`${baseUrl}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Handle successful login (e.g., redirect, set user state)
                console.log('Login successful!');
            } else {
                // Handle unsuccessful login (e.g., display error message)
                console.error('Login failed!');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


     (
        <div className='container'>
            <h2>Login</h2>
            <form method='POST'>
                <label>
                Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
            <p>If you haven't an email Please <span>Signup</span> </p>
        </div>
    )
}

export default Login
