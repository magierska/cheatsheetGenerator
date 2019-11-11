import React from 'react';
import Method from './Method';
import Card from 'react-bootstrap/Card'

export default function MethodsCard({ content }) {
    return (
        <Card>
            <Card.Header>{content.title}</Card.Header>
            <Card.Body>
                    {content.methods.map((m, i) => 
                        <Method 
                            key={i}
                            method={m} 
                        />
                    )}
            </Card.Body>
        </Card>
    );
}