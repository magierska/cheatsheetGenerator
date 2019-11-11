import React from 'react';
import Parameter from './Parameter';

export default function Method({ method }) {
    return (
        <div>
            <p>
                <b>{method.name}(</b>
                {method.params && method.params.map(p => p.name).join(', ')}
                <b>)</b>
            </p>            
            <p>{method.description}</p>
            {method.params && method.params.map((p, i) => 
                <Parameter 
                    key={i}
                    parameter={p}
                />
            )}
        </div>
    );
}