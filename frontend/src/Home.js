import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBox } from 'react-icons/fa';

function Home() {
    const containerStyle = {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
    };

    const navbarStyle = {
        backgroundColor: '#4CAF50',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
    };

    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 1rem',
        display: 'flex',
        alignItems: 'center'
    };

    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    };

    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'left'
    };

    const cardLinkStyle = {
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        color: '#4CAF50',
        textDecoration: 'none',
        fontSize: '1.2rem'
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '1rem'
    };

    return (
        <div style={containerStyle}>
            <nav style={navbarStyle}>
                <h1>POS System</h1>
                <div>
                    <Link to="/users" style={navLinkStyle}><FaUsers /> Users</Link>
                    <Link to="/items" style={navLinkStyle}><FaBox /> Items</Link>
                </div>
            </nav>
            <div style={contentStyle}>
                <div style={cardStyle}>
                    <h1>Home</h1>
                    <p>Welcome to the POS System</p>
                    <div>
                        <Link to="/users" style={cardLinkStyle}><FaUsers /> Users</Link>
                        <Link to="/items" style={cardLinkStyle}><FaBox /> Items</Link>
                    </div>
                    <button style={buttonStyle}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
