import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent }from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import {FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const styles = {
  card: {
    maxWidth: '80%',
    padding: 10,
    marginLeft  : 'auto',
    marginRight : 'auto',
    marginTop : 40,
  },
  media: {
    height: 200,
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
};

class RSVPFormCard extends React.Component {
  state = {
    attending: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render () {
    const { classes } = this.props;

    return (
      <div>
          <CardContent>
            <Typography variant="headline" component="h2">
              We are so glad you could make it, PARTY NAME!
            </Typography>
            <Typography component="p">
              Please let us know how many will be in your party below.
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.attending}
                        onChange={this.handleChange('attending')}
                        color="primary"
                      />
                    }
                    label="Attending?"
                  />
                </Grid>
            </Grid>
            {this.state.attending ?
              <div>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="partyName"
                      label="Party Name"
                      value="Tom and Patty"
                      className={classes.textField}
                      margin="normal"
                    />
                  </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="partySize"
                      label="Party Size"
                      placeholder="2"
                      value={this.state.partySize}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </div>
            : null }
          </CardContent>
      </div>
    );
  }
}

RSVPFormCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RSVPFormCard);