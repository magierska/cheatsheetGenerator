import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = theme => ({
    card: {
        height: '100%',
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexFlow: 'column'
    },
    cardContent: {
        textAlign: 'center',
        flex: '1 1 auto'
    },
    icon: {
        fontSize: '100px',
        animation: 'blinker 2s linear infinite',
        margin: '30px'
    },
    footer: {
        flex: '0 1 auto'
    }
});

class CheatsheetEmpty extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="cheatsheet-page">
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <div>
                            <ArrowForwardIosIcon color="primary" className={classes.icon}/>
                            <Typography variant="h2" component="h2">CHEATSHEET GENERATOR</Typography>
                            <Typography color="textSecondary">Edit configuration to generate you own cheatsheet.</Typography>
                        </div>
                    </CardContent>
                    <CardActions className={classes.footer}>
                        <Button 
                            size="small" 
                            href="https://github.com/magierska/cheatsheetGenerator"
                        >Visit us on Github</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CheatsheetEmpty);