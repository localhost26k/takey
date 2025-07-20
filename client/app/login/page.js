'use client';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e){
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,password})
    });
    if(res.ok){
      const data = await res.json();
      localStorage.setItem('token', data.token);
      alert('Logged in');
    } else alert('Login failed');
  }
  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2">
      <input className="border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="border p-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2" type="submit">Login</button>
    </form>
  );
}
