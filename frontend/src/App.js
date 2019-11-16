import React, { Component } from 'react';
import Cheatsheet from './Cheatsheet';
import TextAreaEditor from './TextAreaEditor';
import LogoUploader from './LogoUploader';
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { withStyles } from '@material-ui/core/styles';
import CheatsheetEmpty from './CheatsheetEmpty';

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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonConfig: null,
            logo: null,
            logoFile: null,
            cssConfig: null,
            cssStyledDiv: styled.div``
        };

        this.setLogoFilePath = this.setLogoFilePath.bind(this);
        this.exportPDF = this.exportPDF.bind(this);
    }

    updateJsonConfig = (text) => {
        try {
            const parsedJson = JSON.parse(text);
            this.setState({
                jsonConfig: parsedJson
            });
        }
        catch (error) { }
    }


    updateCssConfig = (text) => {
        this.setState({
            cssConfig: text,
            cssStyledDiv: styled.div`${text}`
        });
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
        const { classes } = this.props;

        return (
            <div>
                <div className="pdf-container">
                    {this.state.jsonConfig && this.state.jsonConfig.pages
                        && this.state.jsonConfig.pages.length > 0
                        ? <this.state.cssStyledDiv>
                            {this.state.jsonConfig.pages.map((page, i) => (
                                <Cheatsheet
                                    key={i}
                                    page={page}
                                    name={this.state.jsonConfig.name}
                                    description={this.state.jsonConfig.description}
                                    logo={this.state.logo}
                                    footer={this.state.jsonConfig.footer}
                                />
                            ))}
                        </this.state.cssStyledDiv>
                        : <CheatsheetEmpty />}
                </div>
                <div className="form-container">
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <TextAreaEditor title="Configuration (.json)" onTextChange={this.updateJsonConfig} accept=".json" mode="json" />
                        <TextAreaEditor title="Configuration (.css)" onTextChange={this.updateCssConfig} accept=".css" mode="css" />
                        <LogoUploader onLogoLoad={this.setLogoFilePath} />
                        <Button variant="contained" color="primary" onClick={this.exportPDF} className={classes.downloadButton}>
                            {"Download "}
                            <CloudDownloadIcon className={classes.rightIcon} />
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
