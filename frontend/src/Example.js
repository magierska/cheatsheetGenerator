import React from 'react';

export default function Example({ example }) {
    return (
        <div className={`example ${example.classes || ""}`}>
            <p>{example.name}</p>
        </div>
    );
}