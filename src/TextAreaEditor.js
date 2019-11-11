import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class TextAreaEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null
        };
    }

    uploadText(text) {
        this.props.onTextChange(text);
        this.setState({
            text: text
        });
    }

    handleFileInput = (event) => {
        const blob = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener("loadend", (event) => this.uploadText(event.target.result));
        reader.readAsText(blob);
    }

    render() {
        return (
            <Form>
                <Form.Group controlId={this.props.controlId}>
                    <Form.Label>{this.props.title}</Form.Label>
                    <Form.Control type="file" placeholder="Upload configuration file" accept={this.props.accept} onChange={this.handleFileInput} />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows="12" value={this.state.text} onChange={(event) => this.props.onTextChange(event.target.value)} />
                </Form.Group>
            </Form>
        )
    }
}

export default TextAreaEditor