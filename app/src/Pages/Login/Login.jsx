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


    return (
        <div id="card">
            <div id="card-content">
                <div id="card-title">
                    <h2>LOGIN</h2>
                    <div class="underline-title"></div>
                </div>
                <form method="post" class="form">
                    <label for="user-email" style={{paddingTop:"13px"}}>
                        &nbsp;Email
                    </label>
                    <input id="user-email" class="form-content" type="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} autocomplete="on" required />
                    <div class="form-border"></div>
                    <label for="user-password" style={{paddingTop:"22px"}}>&nbsp;Password
                    </label>
                    <input id="user-password" class="form-content" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} name="password" required />
                    <div class="form-border"></div>
                    <p>
                        <legend id="forgot-pass">Forgot password?</legend>
                    </p>
                    <input id="submit-btn" type="submit" name="submit" value="LOGIN" onClick={handleLogin} />

                </form>
            </div>
        </div>

    )
}

export default Login
