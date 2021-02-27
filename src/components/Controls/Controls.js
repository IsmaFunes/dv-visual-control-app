import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { Drawer, Grid, Typography, withStyles } from '@material-ui/core';
import MuiIconButton from '@material-ui/core/IconButton';
import { Brightness1, Brightness3, BrightnessHigh, BrightnessLow, Close, List, Pause, PlayArrow, VolumeDown, VolumeUp } from '@material-ui/icons';
import classNames from 'classnames';
import Category from './Category';
import styles from './Controls.module.css';

const WhiteIconButton = withStyles({
  root: {
    color: 'white'
  }
})(MuiIconButton);


const Controls = ({
  videos,
  play,
  isPlaying,
  pause,
  onVideoClick,
  onVolumeChange,
  volume,
  brightness,
  onBrightnessChange,
  contrast,
  onContrastChange
}) => {

  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => setDrawerOpen(isOpen => !isOpen);

  const handleVideoClick = (video) => {
    onVideoClick(video);
    toggleDrawer();
  }

  return (
    <div>
      <div className={styles.controls}>
        <div className={classNames(styles.control, styles.playButton)}>
          <WhiteIconButton aria-label="delete" onClick={isPlaying ? pause : play}>
            {isPlaying ? <Pause fontSize="inherit" /> : <PlayArrow fontSize="inherit" />}
          </WhiteIconButton>
        </div>
        <div className={styles.control}>
          <Grid container spacing={2}>
            <Grid item>
              <BrightnessLow />
            </Grid>
            <Grid item xs>
              <Slider onChange={onBrightnessChange} value={brightness} />
            </Grid>
            <Grid item>
              <BrightnessHigh />
            </Grid>
          </Grid>
        </div>
        <div className={styles.control}>
          <Grid container spacing={2}>
            <Grid item>
              <Brightness3 />
            </Grid>
            <Grid item xs>
              <Slider onChange={onContrastChange} value={contrast} />
            </Grid>
            <Grid item>
              <Brightness1 />
            </Grid>
          </Grid>
        </div>
        <div className={styles.control}>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider onChange={onVolumeChange} value={volume} />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </div>
        <div className={styles.control}>
          <WhiteIconButton onClick={toggleDrawer}>
            <List />
          </WhiteIconButton>
        </div>
      </div>
      <Drawer onClose={toggleDrawer} anchor="right" open={drawerOpen}>
        <div className={styles.drawerHeader}>
        <Typography variant="h6" className={styles.selectVideoText}>
          Select a video
        </Typography>
        <MuiIconButton onClick={toggleDrawer} className={styles.closeIcon}>
          <Close />
        </MuiIconButton>
        </div>
        
        {videos.categories.map(category => (
          <div key={category.name}>
            <Category
              onVideoSelected={handleVideoClick}
              name={category.name}
              videos={category.videos}
            />
          </div>
        ))}
      </Drawer>
    </div>

  )
}

Controls.propTypes = {
  videos: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onVideoClick: PropTypes.func.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  onBrightnessChange: PropTypes.func.isRequired,
  onContrastChange: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  brightness: PropTypes.number.isRequired,
  contrast: PropTypes.number.isRequired
}

export default Controls;