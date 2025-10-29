import React, { useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Register({ onAuth }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { name, email, password });

      // ✅ Show success message from backend
      alert(res.data.message || 'User registered successfully');

      // Optionally navigate to login after registration
      nav('/login');
    } catch (err) {
      console.error('Register error:', err);
      alert(err?.response?.data?.message || err?.response?.data?.error || 'Register failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="form" onSubmit={submit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
