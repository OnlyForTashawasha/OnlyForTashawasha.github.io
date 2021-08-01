import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useState } from 'react';
import styles from './BusinessPage.module.css';
import { NpcDialogContext } from '../dialog/NpcDialog';
import { useHistory } from 'react-router-dom';
import BackButton from '../common/BackButton';

export default function BusinessPage () {
  const history = useHistory();
  const npcDialog = useContext(NpcDialogContext);
  const [date, setDate] = useState('');
  const onChange = (e) => {
    setDate(e.target.value);
    if (e.target.value === '2021-05-18') {
      npcDialog(`
        Borkkkkkk - How did you knoww when the business partnership between
        Ash and Tashwasha began???? Mr Borker is very surprisedd...
      `, () => {
        window.localStorage.setItem('/business-completed', true);
        history.push('/');
      });
    }
  }
  return (
    <div className={styles.pageWrapper}>
      <BackButton/>
      <div className={styles.businessContract}>
        <div className={styles.contractWrapper}>
          <div className={styles.contractTitle}>
            Business Partnership Agreement
          </div>
          <div className={styles.contractSubheading}>
            Participants
          </div>
          <div className={styles.contractText}>
            Between "A corporations" and "N.org"
          </div>
          <div className={styles.contractSubheading}>
            Background
          </div>
          <div className={styles.contractText}>
            A. The Partners wish to associate themselves as Partners
            in business.
          </div>
          <div className={styles.contractText}>
            B. This Agreement sets out the terms and conditions that govern
            the Partners within the Partnership
          </div>
          <div className={styles.contractSubheading}>
            Terms and Conditions
          </div>
          <div className={styles.contractText}>
            In consideration of and as a condition of the Partners entering into 
            this agreement and other valuable consideration, the recipt and
            sufficiency of which consideration is acknowledge, the parties to
            this agreement agree as follows
          </div>
          <div className={styles.contractSubheading}>
            Date the of Agreement activation
          </div>
          <TextField
            type="date"
            value={date}
            onChange={e => onChange(e)}
          />
        </div>
      </div>
    </div>
  )
}