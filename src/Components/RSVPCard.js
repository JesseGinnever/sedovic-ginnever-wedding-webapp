import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import RSVPStepper from './RSVPStepper'

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

function RSVPCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <RSVPStepper />
      </Card>
    </div>
  );
}

RSVPCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RSVPCard);