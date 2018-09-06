import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const src = 'https://tse2-mm.cn.bing.net/th?id=OIP.LTsmjDyq0nnFRUV3eUAq-QHaDz&w=300&h=154&c=7&o=5&dpr=2&pid=1.7'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
  title: {
    width: '100%',
    height:'100%',
    fontSize: 25
  },
  titleBar: {
    height: '100%',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  titleWrap: {
    height: 50
  }
});

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={200}
        cols={1} 
        className={classes.gridList}
        spacing={0}
      >
        <GridListTile>
          <img src={src} alt='DaVinci教程' />
          <GridListTileBar
            title='DaVinci教程'
            classes={{
              root: classes.titleBar,
              title: classes.title,
              titleWrap: classes.titleWrap
            }}
          />
        </GridListTile>
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
