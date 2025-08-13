import React from "react";
import './RegisterStyle.css';

export default function Register({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    
    <div className="page-register">
      <div className="box-register">
        <form>
        <h2>Register</h2>
        <input className="re-input" type="text" placeholder="Username" required/>
        <br/>
        <input className="re-input" type="email" placeholder="Email" required/>
        <br />
        <input className="re-input" type="password" placeholder="Password" required />
        <br />
        <input className="re-input" type="password" placeholder="Password"  required/>
        <br/>
        <select className="account">
          <option>User account</option>
          <option>Content creator</option>
        </select>
        <br/>
        <button className="rebutton" onClick={onClose}>Close</button>
        <button className="rebutton" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

