'use client';
import React, { useState, useEffect } from 'react';
import './globals.css';
import Register from './register/Register';
import Login from './login/login';
const t = {
    taskeyDescription:
        'Taskey Platform: A platform to display and purchase services from content creators and those who want to benefit from the displayed content.',
    features: [
        { title: "Freelancer Services", desc: "Find and hire talented content creators easily." },
        { title: "Content Monetization", desc: "Let creators monetize their skills and services." },
        { title: "Secure Payments", desc: "Safe, fast, and secure transactions." },
        { title: "Community Driven", desc: "Built for creators and customers alike." },
    ]
};

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [modeMessage, setModeMessage] = useState('');
    const [showAbout, setShowAbout] = useState(false);
    const [showLogin,setShowLogin] = useState (false);
    const [ShowRegister,setShowRegister] = useState (false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);



    return (
        <div className={`main-container ${darkMode ? 'dark' : ''}`}>
            {/* ✅ Taskey Label */}
            <div className="animated-background">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="particles"></div>
            </div>

            <div className="taskey-label">
                Tas<span>key</span>
            </div>

            {/* ✅ Tape Menu */}
            <div className="tape-menu">
                
                <button className="tape-item active">🏠 Home</button>
                <button className="tape-item"onClick={()=>setShowLogin(true)}>🔐 Log In</button>
                <Login
                isOpen={showLogin}
                onClose={()=>setShowLogin(false)}/>
                <button className="tape-item" onClick={()=>setShowRegister(true)}>📝 Register</button>
                <Register
                 isOpen={ShowRegister}
                 onClose={() => setShowRegister(false)}/>
                <button className="tape-item" onClick={() => setShowAbout(!showAbout)}>ℹ️ About Taskey</button>

            </div>

            {/* ✅ About Taskey Cards */}
            {showAbout && (
                <div className="about-window fade-in">
                    <h2 className="about-title">What Taskey Offers</h2>
                    <div className="about-cards">
                        {t.features.map((feature, i) => (
                            <div className="about-card" key={i}>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 🌙 Dark Mode Toggle */}
            <div className="dark-toggle">
                <button
                    className="theme-toggle-icon"
                    onClick={() => {
                        const nextMode = !darkMode;
                        setDarkMode(nextMode);
                        setModeMessage(nextMode ? '🌙 Dark Mode' : '☀️ Light Mode');
                        setTimeout(() => setModeMessage(''), 2000);
                    }}
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>

            {/* 🔤 Hero Section */}
            <div className="hero-section">
                <div className="hero-text fade-in">
                    <h1 className="hero-title">Your Gateway to Digital Services</h1>
                    <p className="hero-description">{t.taskeyDescription}</p>
                    <div className="explore-button">
                        <span className="arrow">➜</span>
                        <span className="explore-text">Explore Services</span>
                    </div>

                </div>
                <div className="hero-image slide-in">
                    <div className="logo-circle">
                        <img src="/test.png" alt="Taskey Logo"/>
                    </div>
                </div>
            </div>

            {modeMessage && <div className="mode-indicator">{modeMessage}</div>}
        </div>
    );
}
