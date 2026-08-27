import React, { useState, useContext } from 'react';
import userContext from '../context/userContext'; // Context import karein

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useContext hook ki madad se context se setUser nikala
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Context ki state updates yahan ho rahi hai
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;