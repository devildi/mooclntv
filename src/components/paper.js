import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlayIcon from '@material-ui/icons/PlayArrow';

import * as actionCreators from '../store/actionCreator';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    margin: 20
  },
})

const PaperSheet = (props) => {
  const { classes, data } = props;
  return (
    <div>
      {
        data.map((item, index) => {
          console.log(console.log(`11111${index}`))
          return (
            <Paper className={classes.root} elevation={1} key={index}>
              <Typography variant="title" component="h3" align="left">
                第1章：初识DaVinci
              </Typography>
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <PlayIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Trash" 
                    onClick={props.popup}
                  />
                </ListItem>
              </List>
            </Paper>
            )
          }
        )
      }
      <Paper className={classes.root} elevation={1}>
        <Typography variant="title" component="h3" align="left">
          第1章：初识DaVinci
        </Typography>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Trash" 
              onClick={props.popup}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Trash" 
              onClick={props.popup}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapState = (state) => {
  return {
    data: state.get('data')
  } 
}

const mapDispatch = (dispatch) => {
  return {
    popup(){
      dispatch(actionCreators.openModal())
    },
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(PaperSheet));
