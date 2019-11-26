import React, { Component } from 'react';
import TextAreaEditor from './TextAreaEditor';
import LogoUploader from './LogoUploader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light'
    }
});

const styles = theme => ({
    downloadButton: {
        marginTop: '5px'
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    }
});

class FormContainer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="form-container">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <TextAreaEditor 
                        title="Configuration (.json)" 
                        onTextChange={this.props.updateJsonConfig} 
                        accept=".json" 
                        mode="json" 
                        valid={this.props.jsonValid} 
                    />
                    <TextAreaEditor 
                        title="Configuration (.css)" 
                        onTextChange={this.props.updateCssConfig} 
                        accept=".css" 
                        mode="css" 
                        valid={this.props.cssValid} 
                    />
                    <LogoUploader onLogoLoad={this.props.setLogoFilePath} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.props.exportPDF} 
                        className={classes.downloadButton}
                    >
                        {"Download "}
                        <CloudDownloadIcon className={classes.rightIcon} />
                    </Button>
                </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(FormContainer);
