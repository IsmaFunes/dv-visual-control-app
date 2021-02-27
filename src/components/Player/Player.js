import React from 'react';
import ControlsContainer from '../../containers/ControlsContainer';
import DisplayContainer from '../../containers/DisplayContainer';
import styles from './Player.module.css';

const Player = () => (
  <div className={styles.root}>
    <div className={styles.video}>
      <DisplayContainer />
    </div>
    <div className={styles.controls}>
      <ControlsContainer />
    </div>
  </div>
)

export default Player;