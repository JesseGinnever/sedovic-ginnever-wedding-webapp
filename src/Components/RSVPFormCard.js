import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent }from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

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
                <Grid item xs={12} sm={3}>
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
          </CardContent>
      </div>
    );
  }
}

RSVPFormCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RSVPFormCard);