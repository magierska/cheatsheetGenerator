import React from 'react';
import Method from './Method';

export default function Card({ content }) {
    return (
        <div class="card">
            <div class="card-header">{content.title}</div>
            <div class="card-body">
                    {content.methods.map(m => <Method method={m} />)}
            </div>
        </div>
    );
}