import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '100%',
    },
    menu: {
      width: 200,
    },
});

function RSVPForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
       <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder="Placeholder"
            margin="normal"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder="Placeholder"
            margin="normal"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder="Placeholder"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder="Placeholder"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder="Placeholder"
            margin="normal"
          />
        </Grid>
      </Grid>
    </div>
  );
}

RSVPForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RSVPForm);