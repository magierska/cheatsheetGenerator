import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import TextAreaEditor from './TextAreaEditor';
import Yaml from "yaml";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ymlConfig: null,
            logo: null,
            cssStyledDiv: styled.div``
        };

        this.loadLogo = this.loadLogo.bind(this);
        this.setLogoFilePath = this.setLogoFilePath.bind(this);
    }

    updateYmlConfig = (text) => {
        const parsedYml = Yaml.parse(text);
        this.setState({
            ymlConfig: parsedYml
        });
    }


    updateCssConfig = (text) => {
        this.setState({
            cssStyledDiv: styled.div`${text}`
        });
    }

    loadLogo(e) {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = this.setLogoFilePath;
        reader.readAsDataURL(file);
    }

    setLogoFilePath(e) {
        this.setState({
            logo: e.target.result
        });
    }

    render() {
        return (
            <div>
                <div className="pdf-container">
                    <this.state.cssStyledDiv>
                        {this.state.ymlConfig && this.state.ymlConfig.pages.map((page, i) => (
                            <Cheatsheet
                                key={i}
                                page={page}
                                name={this.state.ymlConfig.name}
                                description={this.state.ymlConfig.description}
                                logo={this.state.logo}
                                footer={this.state.ymlConfig.footer}
                            />
                        ))}
                    </this.state.cssStyledDiv>
                </div>
                <div className="form-container">
                    <TextAreaEditor title="Configuration (.yml)" onTextChange={this.updateYmlConfig} accept=".yml" controlId="ymlInput" />
                    <TextAreaEditor title="Configuration (.css)" onTextChange={this.updateCssConfig} accept=".css" />
                    <Form>
                        <Form.Group controlId="logoInput">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control type="file" placeholder="Enter file containing logo" onChange={this.loadLogo} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default App;
