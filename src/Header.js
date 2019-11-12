import React from 'react';

export default function Header() {
    return (
        <div>
            <p class="title">
                <b style={{fontFamily: 'Orbitron', fontSize: 'xx-large'}}>hackeRnews</b> 
            {" CHEAT SHEET"}</p>
            <p>An R wrapper for the official Hacker News API</p>
            <img src="logo.png" alt="Card" class="logo" />
            <p class="matrix-corner">011010110100101<br/>010110100110010</p>
        </div>
    );
}