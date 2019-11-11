import React from 'react';

export default function Parameter({ parameter }) {
    if (!parameter.description)
        return null;

    return (
        <div style={{position: 'relative', height: '60px'}}>
            <img src="bracket.svg" alt="Card" style={{height: '100%'}} />
            <div style={{position: 'absolute', top: '50%', left: '25px', transform: 'translate(0%, -50%)'}}>
                <p style={{color: 'rgba(255, 102, 0)'}}>{parameter.name}</p>
                <p>{parameter.description}</p>
            </div>
        </div>
    );
}