import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NpcDialogContext } from '../dialog/NpcDialog';
import { useEffect } from 'react';
import styles from './EquationPage.module.css';
import BackButton from '../common/BackButton';

export default function EquationPage() {
  const history = useHistory();
  const npcDialog = useContext(NpcDialogContext);
  // Track up key press
  useEffect(() => {
    const handleUp = (e) => {
      if (e.keyCode === 38) {
        npcDialog(`Whatsss upp WATTSON!!!
          `,
          () => {
            npcDialog(`Wow Mr Borker is surprised you
              solved this super hard puzzle.....`,
            () => {
              window.localStorage.setItem('/equation-completed', true);
              history.push('/')
            }
          )
          }
        );
      }
    }
    document.addEventListener('keydown', handleUp, false);    
    return () => document.removeEventListener('keydown', handleUp, false);
  }, [history, npcDialog])
  return (
    <div className={styles.pageWrapper}>
      <BackButton/>
      <div className={styles.pageTitle}>
        🤷‍♂️ ____ voltage x amps🌞
      </div>
      <div className={styles.pageInstructions}>
        Click it
      </div>
    </div>
  )
}