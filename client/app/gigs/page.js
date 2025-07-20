'use client';
import { useState, useEffect } from 'react';

export default function Gigs() {
  const [gigs, setGigs] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  useEffect(()=>{
    fetch('http://localhost:4000/api/gigs').then(res=>res.json()).then(setGigs);
  },[]);
  async function addGig(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:4000/api/gigs',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({title,price})
    });
    if(res.ok){
      const gig = await res.json();
      setGigs([...gigs, gig]);
      setTitle('');
      setPrice('');
    } else alert('Failed');
  }
  return (
    <div className="p-4">
      <form onSubmit={addGig} className="flex gap-2 mb-4">
        <input className="border p-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input className="border p-2" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
        <button className="bg-green-500 text-white p-2" type="submit">Add</button>
      </form>
      <ul>
        {gigs.map(g=> (
          <li key={g.id} className="border-b py-2">{g.title} - ${g.price}</li>
        ))}
      </ul>
    </div>
  );
}
