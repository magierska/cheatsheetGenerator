import React, { Component } from 'react'
import ExpansionPanelWrapper from './ExpansionPanelWrapper';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-min-noconflict/ext-language_tools";

class TextAreaEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileName: '',
            text: ''
        };

        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(text) {
        this.props.onTextChange(text);
        this.setState({
            text: text
        });
    }

    handleFileInput = (event) => {
        event.stopPropagation();
        const blob = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener("loadend", (event) => this.onTextChange(event.target.result));
        reader.readAsText(blob);
        this.setState({
            fileName: blob.name
        });
    }

    render() {
        return (
            <ExpansionPanelWrapper
                mode={this.props.mode}
                title={this.props.title}
                accept={this.props.accept}
                fileName={this.state.fileName}
                handleFileInput={this.handleFileInput}
            >
                <AceEditor
                    placeholder="Type here..."
                    mode={this.props.mode}
                    theme="tomorrow"
                    id={`editor-${this.props.mode}`}
                    onChange={this.onTextChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.state.text}
                    editorProps={{ $blockScrolling: true }}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                />
            </ExpansionPanelWrapper>
        )
    }
}

export default TextAreaEditor;