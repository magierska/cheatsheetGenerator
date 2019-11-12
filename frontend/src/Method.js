import React from 'react';
import Parameter from './Parameter';

export default function Method({ method }) {
    return (
        <div className="method">
            <p>
                <font className="method-name">{method.name}(</font>
                    <font className="method-parameter">{method.params && method.params.map(p => p.name).join(', ')}</font>
                <font className="method-name">)</font>
            </p>            
            <p className="method-description">{method.description}</p>
            {method.params && method.params.map((p, i) => 
                <Parameter 
                    key={i}
                    parameter={p}
                />
            )}
        </div>
    );
}