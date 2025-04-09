"use client"
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // No validation for empty fields
    // No password strength check
    fetch('https://example.com/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }), // Sensitive data sent as plain text
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          alert('Logged in successfully');
          localStorage.setItem('token', data.token); 
        } else {
          alert('Login failed');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error occurred');
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
