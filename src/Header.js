import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <p className="title">
                <font className="name">hackeRnews</font> 
            {" CHEAT SHEET"}</p>
            <p>An R wrapper for the official Hacker News API</p>
            <img src="logo.png" alt="Card" className="logo" />
        </div>
    );
}