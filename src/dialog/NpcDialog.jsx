import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from '@material-ui/core';
import styles from './NpcDialog.module.css';
import corgiPic from '../assets/corgi.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const NpcDialogContext = React.createContext();

function NpcPanel (props) {
  return (
    <div className={styles.panelWrapper}>
      <div className={styles.npcProfile}>
        <img src={corgiPic} alt='profile' className={styles.npcImage}/>
        <div className={styles.npcName}>
          Mr Borker
        </div>
      </div>
      <div className={styles.npcText}>
        {props.text}
      </div>
    </div>
  )
}

NpcPanel.propTypes = {
  text: PropTypes.string
}

export default function NpcDialog(props) {
  const classes = useStyles();
  const renderPanel = () => {
    if (props.showDialog) {
      return (
        <NpcPanel text={props.dialogMessage}/>
      )
    }
    return;
  }
  return(
    <Backdrop
      className={classes.backdrop}
      open={props.showDialog}
      onClick={() => {
        props.setShowDialog(false)
        props.callback();
      }}>
    { renderPanel() }
    </Backdrop>
  )
}
NpcDialog.propTypes = {
  showDialog : PropTypes.bool,
  setShowDialog: PropTypes.func,
  dialogMessage : PropTypes.string,
  callback: PropTypes.func
}