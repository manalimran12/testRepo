"use client"
import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // No validation for empty fields or email format
    // Passwords must be identical but no validation to check that
    // No password strength check

    fetch('https://example.com/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Sign up successful');
          localStorage.setItem('token', data.token); 
        } else {
          alert('Sign up failed');
        }
      })
      .catch((err) => {
        console.error('Error during signup:', err);
        alert('Something went wrong');
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
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
