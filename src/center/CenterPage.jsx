import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../common/BackButton';
import { NpcDialogContext } from '../dialog/NpcDialog';
import styles from './CenterPage.module.css';

export default function CenterPage () {
  const history = useHistory();
  const npcDialog = useContext(NpcDialogContext);
  const onClick = () => {
    const answer = prompt('');
    if (answer === null || answer === undefined || answer.length === 0) {
      return;
    }
    else if (answer === 'christ') {
      npcDialog("What the Bork - How did you know??",
        () => {
          npcDialog(`Ash and Tashwasha wanted Christ to be the center
            of the business deal because He is their Savior!! I can't believe
            you know that ....
          `,
            () => {
              window.localStorage.setItem('/center-completed', true);
              history.push('/')
            }
          );
        }
      );
      return;
    }
    npcDialog(`Ummm its obviously not "${answer}" Ms Imposter...`);
  }
  return (
    <div className={styles.pageWrapper}>
      <BackButton/>
      <div className={styles.pageTitle}>
        The answer to the center lock is also
        the <div onClick={onClick} className={styles.clickWord}>
          center</div> of this business deal
      </div>
    </div>
  )
}