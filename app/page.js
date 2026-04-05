'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) setToken(savedToken);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        router.push('/sayt/users');
      } else {
        setMessage(data.error);
      }
    } catch {
      setMessage('Xatolik yuz berdi');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    router.push('/users');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #6B73FF, #000DFF)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#1a1a1a',
        padding: '2.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', color: '#fff' }}>Login Sahifasi</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            style={{ 
              padding: '0.8rem', 
              borderRadius: '6px', 
              border: 'none', 
              fontSize: '1rem',
              background: '#fff',   // oq fon
              color: '#000'         // qora matn
            }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ 
              padding: '0.8rem', 
              borderRadius: '6px', 
              border: 'none', 
              fontSize: '1rem',
              background: '#fff', 
              color: '#000' 
            }}
          />
          <button 
            type="submit" 
            style={{
              padding: '0.9rem',
              borderRadius: '6px',
              border: 'none',
              background: '#6B73FF',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Login
          </button>
        </form>
        <p style={{ color: 'red', marginTop: '1rem' }}>{message}</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
          Foydalanuvchi: <b>admin</b> / Parol: <b>1234</b>
        </p>
      </div>
    </div>
  );
}