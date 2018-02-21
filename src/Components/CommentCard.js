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

class CommentCard extends React.Component {
  state = {

  };

  render () {
    const { classes } = this.props;

    return (
      <div>
        <CardContent>
          <Typography variant="headline" component="h2">
            Please leave us a comment.
          </Typography>
          <Typography component="p">
            Specify any special needs that you may have or if you would like to express a special need privately please visit our Contact Us page.
          </Typography>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="personalNeed"
                  label="Comments and Requests"
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

CommentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentCard);