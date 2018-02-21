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



class IdentityCard extends React.Component {
  state = {
    activeStep: 0,
    stepIsValid: false,
    weddingCode: this.props.weddingCode,
  };

  onHandleWeddingCodeChange(event) {
    this.setState(
      {
        weddingCode: event.target.value
      },
      this.checkFormValidation
    )
  };

  checkFormValidation() {
    //updateWeddingCode
    this.props.updateWeddingCode(this.state.weddingCode)

    if (this.state.weddingCode && this.state.weddingCode.length > 0) {
      this.props.validationCallback(true);
    } else {
      this.props.validationCallback(false);
    }
  }

  render() {  
    const { classes } = this.props;
    return (
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
              value={this.state.weddingCode}
              onChange={(event) => this.onHandleWeddingCodeChange(event)}
            />
          </CardContent>
    );
  }
}

IdentityCard.propTypes = {
  classes: PropTypes.object.isRequired,
  validationCallback: PropTypes.object.funct,
  updateWeddingCode: PropTypes.object.funct,
  weddingCode: PropTypes.string,
};

export default withStyles(styles)(IdentityCard);