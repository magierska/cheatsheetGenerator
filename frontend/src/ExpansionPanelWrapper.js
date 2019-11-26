import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const styles = theme => ({
    title: {
        flexBasis: '45%'
    },
    fileName: {
        flexBasis: '45%',
        color: theme.palette.text.secondary
    },
    upload: {
        '& label': {
            margin: '0px'
        },
        '& span': {
            padding: '0px'
        }
    }
});

class ExpansionPanelWrapper extends Component {
    render() {
        const { classes } = this.props;

        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`content-${this.props.mode}`}
                    id={`header-${this.props.mode}`}
                >
                    <Typography className={classes.title}>
                        {this.props.title}
                        {!this.props.valid &&
                            <ErrorOutlineIcon color="error" />
                        }
                    </Typography>
                    <Typography className={classes.fileName}>{this.props.fileName}</Typography>
                    <div className={classes.upload}>
                        <input
                            accept={this.props.accept}
                            style={{ display: 'none' }}
                            id={`input-file-${this.props.mode}`}
                            type="file"
                            onChange={this.props.handleFileInput}
                        />
                        <label htmlFor={`input-file-${this.props.mode}`}>
                            <IconButton aria-label="Upload" component="span" color="primary">
                                <CloudUploadIcon />
                            </IconButton>
                        </label>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default withStyles(styles)(ExpansionPanelWrapper);