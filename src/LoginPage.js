import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate setting user information
    setUser({ username, password });
    navigate('/dashboard');
  };

  return (
    <form className='forma' onSubmit={handleSubmit}>
      <input className='name' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input  className='password'type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button  type="submit">Login</button>
    </form>
  );
};

export default LoginPage;