import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5272/api/Login', { 
        Username, 
        Password 
      });
      console.log('Login successful:', response.data);

      if (response.status === 200) {
        const userRole = response.data.role;
        console.log('User Role:', userRole); // Añadido para verificar el rol

        // Redirige basado en el rol del usuario
        if (userRole === 2) {
          navigate('/home');
        } else if (userRole === 1) {
          navigate('/dashboard');
        }else if (userRole === 3) {
          navigate('/home');
        } else {
          setError('Rol no reconocido.');
        }
      } else {
        setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      console.error('There was an error!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Sign In</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${usernameFocused ? 'focused' : ''}`}>
            <label htmlFor="username">Username</label>
            <FaUser className='icon' htmlFor='username'/>
            <input
              type="text"
              id="username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              required
            />
          </div>
          <div className={`form-group ${passwordFocused ? 'focused' : ''}`}>
            <label htmlFor="password">Password</label>
            <FaLock className='icon' htmlFor='password'/>
            <input
              type="password"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required
            />
          </div>
          <div className='R_password'>
            <div className='reme'>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <div className='regis'>
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
