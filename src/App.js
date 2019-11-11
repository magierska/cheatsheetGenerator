import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import Form from 'react-bootstrap/Form';

class App extends Component {
    render() {
        return (
            <div>
                <div className="pdf-container">
                    <Cheatsheet />
                    <Cheatsheet />
                </div>
                <div className="form-container">
                    <Form>
                        <Form.Group>
                            <Form.Label>Configuration (.json)</Form.Label>
                            <Form.Control type="file" placeholder="Enter configuration file" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Styles (.css)</Form.Label>
                            <Form.Control type="file" placeholder="Enter styles file" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Logo</Form.Label>
                            <Form.Control type="file" placeholder="Enter file containing logo" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default App;
