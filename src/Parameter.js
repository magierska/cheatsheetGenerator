import React from 'react';

export default function Parameter({ parameter }) {
    if (!parameter.description)
        return null;

    return (
        <div className="parameter">
            <p className="parameter-name">{parameter.name}</p>
            <p className="parameter-description">{parameter.description}</p>
        </div>
    );
}