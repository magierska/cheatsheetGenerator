import React from 'react';
import Parameter from './Parameter';

function generateParameter(param) {
    return `${param.name}${param.value ? ` = ${param.value}` : ''}`
}

export default function Method({ method }) {
    return (
        <div>
            <p><b>{method.name}(</b>{method.params && method.params.map(p => p.name).join(', ')}<b>)</b></p>            
            <p>{method.desc}</p>
            {method.params && method.params.map(p => 
                <Parameter 
                    parameter={p}
                />
            )}
        </div>
    );
}