import React, { Component } from 'react';
import PdfContainer from './PdfContainer';
import FormContainer from './FormContainer';
import styled from 'styled-components';
import css from 'css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonConfig: null,
            jsonValid: true,
            logo: null,
            logoFile: null,
            cssConfig: '',
            cssStyledDiv: styled.div``,
            cssValid: true
        };

        this.setLogoFilePath = this.setLogoFilePath.bind(this);
        this.exportPDF = this.exportPDF.bind(this);
    }

    checkIfOnlyWhitespace = (text) => {
        if (!text.trim().length) {
            return true;
        }
        return false;
    }

    updateJsonConfig = (text) => {
        if (this.checkIfOnlyWhitespace(text)){
            return;
        }
        try {
            const parsedJson = JSON.parse(text);
            this.setState({
                jsonConfig: parsedJson,
                jsonValid: true
            });
        }
        catch (error) { 
            this.setState({
                jsonValid: false
            });
        }
    }


    updateCssConfig = (text) => {
        if (this.checkIfOnlyWhitespace(text)){
            return;
        }
        try {
            css.parse(text);
            this.setState({
                cssValid: true,
                cssConfig: text,
                cssStyledDiv: styled.div`
                ${text}
                `
            });
        }
        catch (error) {
            this.setState({
                cssValid: false
            });
        }
    }

    setLogoFilePath(logo, file) {
        this.setState({
            logo,
            logoFile: file
        });
    }

    exportPDF() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `${process.env.REACT_APP_API_BASE_URL}/pdfexport`, true);
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
        var jsonConfigFile = this.createInMemoryFile(JSON.stringify(this.state.jsonConfig));
        var cssConfigFile = this.createInMemoryFile(this.state.cssConfig);

        var formData = new FormData();
        formData.append("logoInput", this.state.logoFile);
        formData.append("jsonConfigFile", jsonConfigFile);
        formData.append("cssConfigFile", cssConfigFile);
        xhr.send(formData);
    }

    createInMemoryFile(data) {
        var blob = new Blob([data], { type: 'text' });
        return blob;
    }

    render() {
        return (
            <div className="fit-height">
                <PdfContainer 
                    cssConfig={this.state.cssConfig}
                    cssStyledDiv={this.state.cssStyledDiv}
                    jsonConfig={this.state.jsonConfig}
                    logo={this.state.logo}
                />
                <FormContainer 
                    updateCssConfig={this.updateCssConfig}
                    updateJsonConfig={this.updateJsonConfig}
                    setLogoFilePath={this.setLogoFilePath}
                    exportPDF={this.exportPDF}
                    jsonValid={this.state.jsonValid}
                    cssValid={this.state.cssValid}
                />
            </div>
        );
    }
}

export default App;
