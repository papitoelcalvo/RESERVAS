import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';
import axios from 'axios';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

function Register() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5272/api/Register/register', { 
        Username, 
        Password,
        Email
      });
      console.log('Registration successful:', response.data);

      if (response.status === 200) {
        navigate('/login'); // Redirigir al usuario a la página de inicio de sesión después del registro
      } else {
        setError('Error al registrar. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setError('Error al registrar. Por favor, intenta nuevamente.');
      console.error('There was an error!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Register</h2>
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
          <div className={`form-group ${emailFocused ? 'focused' : ''}`}>
            <label htmlFor="email">Email</label>
            <FaEnvelope className='icon' htmlFor='email'/>
            <input
              type="email"
              id="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </button>
          <div className='regis'>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
