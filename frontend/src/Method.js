import React from 'react';
import Parameter from './Parameter';
import Example from './Example';

export default function Method({ method }) {
    if (!method) {
        return null;
    }

    return (
        <div className={`method ${method.classes || ""}`}>
            <p>
                <span className={`method-name ${method.nameClasses || ""}`}>{method.name}{method.withoutBrackets !== true && '('}</span>
                <span className={`method-parameter ${method.parameterClasses || ""}`}>{
                    method.withoutBrackets !== true && method.params &&
                    method.params.map(p => p.name).join(', ')
                }</span>
                <span className={`method-name ${method.nameClasses || ""}`}>{method.withoutBrackets !== true && ')'}</span>
            </p>
            <p className={`method-description ${method.descriptionClasses || ""}`}>{method.description}</p>
            {method.params && method.params.map((p, i) =>
                <Parameter
                    key={i}
                    parameter={p}
                />
            )}
            {method.examples && method.examples.map((e, i) =>
                <Example
                    key={i}
                    example={e}
                />
            )}
        </div>
    );
}