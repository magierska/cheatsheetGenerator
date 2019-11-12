import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import TextAreaEditor from './TextAreaEditor';
import Yaml from "yaml";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import FileDownload from "js-file-download";
import styled from 'styled-components'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ymlConfig: null,
            logo: null,
            logoFile: null,
            cssStyledDiv: styled.div``
        };

        this.loadLogo = this.loadLogo.bind(this);
        this.setLogoFilePath = this.setLogoFilePath.bind(this);
        this.exportPDF = this.exportPDF.bind(this);
    }

    updateYmlConfig = (text) => {
        try {
            const parsedYml = Yaml.parse(text);
            this.setState({
                ymlConfig: parsedYml
            });        
        }
        catch(error) { }
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
        this.setState({
            logoFile: file
        });
        var reader = new FileReader();
        reader.onload = this.setLogoFilePath;
        reader.readAsDataURL(file);
    }

    setLogoFilePath(e) {
        this.setState({
            logo: e.target.result
        });
    }

    exportPDF() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8000/pdfexport", true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function (e) {
            console.log(this.response);
            if (this.status === 200) {
                var blob = new Blob([this.response], { type: "application/pdf" });
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "cheatsheet.pdf"
                link.click();
            }
        }
        var yamlConfigFile = this.createInMemoryFile(Yaml.stringify(this.state.ymlConfig));

        var formData = new FormData();
        formData.append("logoInput", this.state.logoFile);
        formData.append("yamlConfigFile", yamlConfigFile);
        xhr.send(formData);
    }

    createInMemoryFile(data) {
        var blob = new Blob([data], { type: 'text' });
        return blob;
    }

    render() {
        return (
            <div>
                <div className="pdf-container">
                    <this.state.cssStyledDiv>
                        {this.state.ymlConfig && this.state.ymlConfig.pages 
                            && this.state.ymlConfig.pages.map((page, i) => (
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
                    <button onClick={this.exportPDF}>Download</button>
                </div>
            </div>
        );
    }
}

export default App;
