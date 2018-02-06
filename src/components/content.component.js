import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Close from 'material-ui-icons/Close';


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
    },
});

class CenteredTabs extends React.Component {
    state = {
        value: 0,
    };

    handleClose = (event, value) => {
        console.log(event);
        event.preventDefault();
        // this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                >
                    <Tab label={
                        <div>
                            title
  	
                                <Close onClick={this.handleClose} />
    
                        </div>
                    } />
                </Tabs>
            </Paper>
        );
    }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const ContentComponent = withStyles(styles)(CenteredTabs);