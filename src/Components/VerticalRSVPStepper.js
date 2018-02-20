import React from 'react';

import PropTypes from 'prop-types';

//Material UI
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

//Custom Components
import RSVPFormCard from './RSVPFormCard';
import IdentityCard from './IdentityCard'
import FoodDrinkCard from './FoodDrinkCard'
import CommentCard from './CommentCard'

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['New Phone, Who Dis?', 'RSVP', 'Food & Drink', 'Done'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <IdentityCard />;
    case 1:
      return <RSVPFormCard />;
    case 2:
      return <FoodDrinkCard />;
    case 3:
      return <CommentCard />;
    default:
      return 'Something has gone wrong.  Please refesh the page or contact us directly to RSVP';
  }
}

class VerticalRSVPStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography variant="headline" component="h2">
              All Done!
            </Typography>
            <Typography component="p">
                Thank you for RSVP'ing to our party!
                If you need to change anything, please feel free to complete the forms again!
                We cannot wait to see you in April!
            </Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalRSVPStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalRSVPStepper);