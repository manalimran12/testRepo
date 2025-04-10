"use client"
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  // Track loading state, but won't use it properly

  const handleLogin = () => {
    // No validation for empty fields, no password strength check
    // Hardcoded API endpoint (doesn't scale or follow best practices)
    setLoading(true); // Start loading, but no indication to user that something is happening
    fetch('https://example.com/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }), // Sensitive data sent as plain text
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          alert('Logged in successfully'); // No proper success or error handling
          // Token stored insecurely in localStorage (vulnerable to XSS attacks)
          localStorage.setItem('token', data.token); 
        } else {
          // This error message is too generic and doesn't provide enough detail
          alert('Login failed, please try again');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Error occurred, try again later'); 
      })
      .finally(() => {
        setLoading(false); 
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
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'} {/* No loading indicator */}
      </button>
    </div>
  );
}
