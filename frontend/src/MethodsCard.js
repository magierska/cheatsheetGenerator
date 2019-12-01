import React from 'react';
import Method from './Method';
import Card from 'react-bootstrap/Card'

export default function MethodsCard({ content }) {
    if (!content) {
        return null;
    }

    return (
        <Card className={content.classes || ""}>
            <Card.Header className={content.headerClasses || ""}>{content.title}</Card.Header>
            <Card.Body className={content.bodyClasses || ""}>
                {content.methods && content.methods.map((m, i) =>
                    <Method
                        key={i}
                        method={m}
                    />
                )}
            </Card.Body>
        </Card>
    );
}