// src/components/SignInForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // You can do authentication check here
    if (email === 'admin@example.com' && password === '123456') {
      // Success
      onClose(); // Hide form
      navigate('/'); // Redirect to home
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          <button
            type="button"
            className="w-full mt-2 bg-gray-300 p-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
