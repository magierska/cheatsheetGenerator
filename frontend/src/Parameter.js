import React from 'react';

export default function Parameter({ parameter }) {
    if (!parameter.description)
        return null;

    return (
        <div className={`parameter ${parameter.classes || ""}`}>
            <p className={`parameter-name ${parameter.nameClasses || ""}`}>{parameter.name}</p>
            <p className={`parameter-description ${parameter.decsriptionClasses || ""}`}>{parameter.description}</p>
        </div>
    );
}