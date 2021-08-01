import React from 'react';
import styles from './BackButton.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

export default function BackButton () {
  const history = useHistory();
  return (
    <div 
      onClick={() => history.push('/')}
      className={styles.buttonWrapper}>
        <ArrowBackIcon fontSize='inherit'/>
    </div>
  )
}