import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import TextAreaEditor from './TextAreaEditor';
import Yaml from "yaml";
import css from "css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ymlConfig: null,
            cssConfig: null
        };
    }

    updateYmlConfig = (text) => {
        const parsedYml = Yaml.parse(text);
        this.setState({
            ymlConfig: parsedYml
        });
    }


    updateCssConfig = (text) => {
        const parsedCss = css.parse(text);
    }

    render() {
        return (
            <div>
                <div className="pdf-container">
                    <Cheatsheet />
                    <Cheatsheet />
                </div>
                <div className="form-container">
                    <TextAreaEditor title="Configuration (.yml)" onTextChange={this.updateYmlConfig} accept=".yml" />
                    <TextAreaEditor title="Configuration (.css)" onTextChange={this.updateCssConfig} accept=".css" />
                </div>
            </div>
        );
    }
}

export default App;
