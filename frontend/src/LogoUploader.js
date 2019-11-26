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
                {this.state.logo && <img src={this.state.logo} alt="Logo" />}
            </ExpansionPanelWrapper>
            // <ExpansionPanel>
            //     <ExpansionPanelSummary
            //         expandIcon={<ExpandMoreIcon />}
            //         aria-controls={`content-${this.props.mode}`}
            //         id={`header-${this.props.mode}`}
            //     >
            //         <Typography className={classes.title}>{this.props.title}</Typography>
            //         <Typography className={classes.fileName}>{this.state.fileName}</Typography>
            //         <div className={classes.upload}>
            //             <input
            //                 accept={this.props.accept}
            //                 style={{ display: 'none' }}
            //                 id="logo-file"
            //                 type="file"
            //                 onChange={this.loadLogo}
            //             />
            //             <label htmlFor="logo-file">
            //                 <IconButton aria-label="Upload" component="span" color="primary">
            //                     <CloudUploadIcon />
            //                 </IconButton>
            //             </label>
            //         </div>
            //     </ExpansionPanelSummary>
            //     <ExpansionPanelDetails>
            //         {this.state.logo && <img src={this.state.logo} alt="Logo" />}
            //     </ExpansionPanelDetails>
            // </ExpansionPanel>
        )
    }
}

export default LogoUploader;