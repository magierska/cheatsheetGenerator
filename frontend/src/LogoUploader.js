import React, { Component } from 'react'
import ExpansionPanelWrapper from './ExpansionPanelWrapper';

class LogoUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileName: '',
            logo: ''
        };

        this.onLogoLoad = this.onLogoLoad.bind(this);
        this.loadLogo = this.loadLogo.bind(this);
    }

    onLogoLoad(e, file) {
        const logo = e.target.result;
        this.props.onLogoLoad(logo, file)
        this.setState({
            logo
        });
    }

    loadLogo(e) {
        e.stopPropagation();
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        this.setState({
            logoFile: file
        });
        var reader = new FileReader();
        reader.onload = (e) => this.onLogoLoad(e, file);
        reader.readAsDataURL(file);
        this.setState({
            fileName: file.name
        });
    }

    render() {
        return (
            <ExpansionPanelWrapper
                mode="logo"
                title="Logo"
                accept="image/*"
                fileName={this.state.fileName}
                handleFileInput={this.loadLogo}
                valid={true}
            >
                {this.state.logo && <img src={this.state.logo} alt="Logo" className="logo-image" />}
            </ExpansionPanelWrapper>
        )
    }
}

export default LogoUploader;