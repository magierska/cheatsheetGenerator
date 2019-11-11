import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import Form from 'react-bootstrap/Form';
import yaml from 'js-yaml';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: { }
        }

        this.readConfigurationFile = this.readConfigurationFile.bind(this);
        this.processYamlFile = this.processYamlFile.bind(this);
    }

    readConfigurationFile(e) {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let reader = new FileReader();
        reader.onload = this.processYamlFile;
        reader.readAsText(file);
    }

    processYamlFile(e) {
        let content = yaml.safeLoad(e.target.result);
        console.log(content);
        this.setState({
            content
        });
    }

    render() {
        return (
            <div>
                <div className="pdf-container">
                    {this.state.content.pages && this.state.content.pages.map((page, i) => (
                        <Cheatsheet 
                            key={i}
                            page={page}
                            name={this.state.content.name}
                            description={this.state.content.description}
                            footer={this.state.content.footer}
                        />
                    ))}
                </div>
                <div className="form-container">
                    <Form>
                        <Form.Group>
                            <Form.Label>Configuration (.json)</Form.Label>
                            <Form.Control type="file" placeholder="Enter configuration file" onChange={this.readConfigurationFile} />
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
