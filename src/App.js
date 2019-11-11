import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import TextAreaEditor from './TextAreaEditor';
import Yaml from "yaml";
import css from "css";
import Form from 'react-bootstrap/Form';
import { PDFExport } from '@progress/kendo-react-pdf';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ymlConfig: null,
            cssConfig: null,
            logo: null
        };

        this.loadLogo = this.loadLogo.bind(this);
        this.setLogoFilePath = this.setLogoFilePath.bind(this);
    }
    cheatsheet;

    updateYmlConfig = (text) => {
        const parsedYml = Yaml.parse(text);
        this.setState({
            ymlConfig: parsedYml
        });
    }


    updateCssConfig = (text) => {
        const parsedCss = css.parse(text);
        this.setState({
            cssConfig: parsedCss
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

    exportPDF = () => {
        this.cheatsheet.save();
    }

    render() {
        return (
            <div>
                <div className="pdf-container">
                    <PDFExport paperSize={['842pt', '595pt']}
                        fileName="_____.pdf"
                        ref={(r) => this.cheatsheet = r}>
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
                    </PDFExport>
                </div>
                <div className="form-container">
                    <TextAreaEditor title="Configuration (.yml)" onTextChange={this.updateYmlConfig} accept=".yml" />
                    <TextAreaEditor title="Configuration (.css)" onTextChange={this.updateCssConfig} accept=".css" />
                    <Form>
                        <Form.Group>
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
