import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // No validation of email format or password strength
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    fetch('https://example.com/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Sign up successful');
        } else {
          alert('Signup failed');
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
