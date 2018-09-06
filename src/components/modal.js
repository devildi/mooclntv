import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreator';

const styles = theme => ({
  paper: {
    width: '100%',
    height: '100%',
    boxShadow: theme.shadows[10],
  },
  video: {
    display: 'block',
    margin: '0 auto'
  }
});

const SimpleModal = (props) =>
     (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
      >
        <div className={props.classes.paper} onClick={props.handleClose}>
          <video
            className={props.classes.video}
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            data-setup='{}'
          >
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          </video>
        </div>
      </Modal>
    )

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

const SimpleModalWrapped = withStyles(styles)(SimpleModal)

const mapState = (state) => {
  return {
    open: state.get('open')
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClose(){
      dispatch(actionCreators.closeModal())
    }
  }
}

export default connect(mapState, mapDispatch)(SimpleModalWrapped)