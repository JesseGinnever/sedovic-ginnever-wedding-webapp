import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent }from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

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
};

function IdentityCard(props) {
  const { classes } = props;
  return (
    <div>

        <CardContent>
          <Typography variant="headline" component="h2">
            Please type your Wedding Code below!
          </Typography>
          <Typography component="p">
            Your wedding code can be found in your invitation message.  We just need this so we can verify you are
            one of our loved ones!
          </Typography>
          <TextField
            id="with-placeholder"
            label="Wedding Code"
            placeholder="1A2B3C"
            className={classes.textField}
            margin="normal"
            helperText="Found on your invitation"
          />
        </CardContent>
    </div>
  );
}

IdentityCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IdentityCard);