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
  const { classes, data, popup } = props;
  return (
    <div>
      {
        data.map((item, index) => (
            <Paper className={classes.root} elevation={1} key={index}>
              <Typography variant="title" component="h3" align="left">
                {item.name1}
              </Typography>
              {
                item.content.map((r, i) => (
                  <List component="nav" key={i}>
                    <ListItem button onClick={() => popup(r.addredd)}>
                      <ListItemIcon>
                        <PlayIcon />
                      </ListItemIcon>
                      <ListItemText 
                        primary={r.name} 
                      />
                    </ListItem>
                  </List>
                ))
              }
            </Paper>
            )
          
        )
      }
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapState = (state) => {
  return {
    data: state.getIn(['main','data'])
  } 
}

const mapDispatch = (dispatch) => {
  return {
    popup(url){
      let url1 = JSON.stringify(url)
      dispatch(actionCreators.openModal(url1))
    },
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(PaperSheet))
