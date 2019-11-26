import React, { Component } from 'react'
import ExpansionPanelWrapper from './ExpansionPanelWrapper';
import Box from '@material-ui/core/Box';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-min-noconflict/ext-language_tools";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    snackbar: {
        backgroundColor: theme.palette.error.main
    },
    close: {
        padding: theme.spacing(0.5),
    }
});

class TextAreaEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileName: '',
            text: '',
            snackbarOpen: false
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

    validateOnBlur = () => {
        this.setState({
            snackbarOpen: !this.props.valid
        });
    }

    handleSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            snackbarOpen: false
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <ExpansionPanelWrapper
                mode={this.props.mode}
                title={this.props.title}
                accept={this.props.accept}
                fileName={this.state.fileName}
                handleFileInput={this.handleFileInput}
                valid={this.props.valid}
            >
                <Box border={3} borderColor={this.props.valid ? "primary.main" : "error.main"} width="fit-content">
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
                        onBlur={this.validateOnBlur}
                    />
                </Box>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSnackbarClose}
                >
                    <SnackbarContent
                        className={classes.snackbar}
                        message={<span>{this.props.title} has invalid content!</span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleSnackbarClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                </Snackbar>
            </ExpansionPanelWrapper>
        )
    }
}

export default withStyles(styles)(TextAreaEditor);