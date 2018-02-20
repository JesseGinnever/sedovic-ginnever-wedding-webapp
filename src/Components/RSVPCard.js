import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import VerticalRSVPStepper from './VerticalRSVPStepper'

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
        <VerticalRSVPStepper />
      </Card>
      {/*
      Show for mobile only?
      <Card className={classes.card}>
        <MobileRSVPStepper />
      </Card>
      */}
    </div>
  );
}

RSVPCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RSVPCard);