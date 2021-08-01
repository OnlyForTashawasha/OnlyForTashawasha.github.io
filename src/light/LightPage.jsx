import React from 'react';
import styles from './LightPage.module.css';
import anime from '../assets/anime.jpg';
import BackButton from '../common/BackButton';

export default function LightPage () {
  return (
    <div className={styles.pageWrapper}>
      <BackButton/>
      <img className={styles.animePic} src={anime} alt='anime pic'/>
      <div className={styles.quote}>
        "Hey Haruki, you know that Jesus is the light of the world, and
        there is no <span className={styles.emphasis}>high</span>
        er <span className={styles.emphasis}>light</span>"
        - Sakura
      </div>
      <div className={styles.hiddenText}>
        Enter the "organ" in this movie at the end of the url.
      </div>
    </div>
  )
}