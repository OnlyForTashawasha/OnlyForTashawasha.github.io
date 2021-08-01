import React, {useContext} from 'react';
import styles from './HomePage.module.css'
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { isGameComplete, resetGame } from '../App';
import { useState } from 'react';
import { useEffect } from 'react';
import { NpcDialogContext } from '../dialog/NpcDialog';

function Lock (props) {
  const history = useHistory();
  const onClick = () => {
    history.push(props.targetPage);
  }
  if (window.localStorage.getItem(`${props.targetPage}-completed`) === "true") {
    return (
      <div className={styles.unlocklock}>
        <LockOpenIcon fontSize='inherit'
        className={styles.unlockedIcon}/>
      </div>
    )
  }
  return (
    <div className={styles.lock}>
      <LockIcon fontSize='inherit' onClick={onClick}
      className={styles.lockIcon}/>
    </div>
  )
}

Lock.propTypes = {
  targetPage: PropTypes.string
}

export default function HomePage() {
  const history = useHistory();
  const npcDialog = useContext(NpcDialogContext);
  const [lastReset, setLastReset] = useState(Date.now());
  useEffect(() => {
    if (window.localStorage.getItem('shownIntro') === "false") {
      npcDialog('Heyy BORK!!!What r u doin u intruder??', () => {
        npcDialog(`This place contains top secret information that
          Ash has stored only to be read by Tashwasha!! So NO intruders!!!
        `, () => {
          npcDialog("What.....?", () => {
            npcDialog("You say you are Tashawasha???", () => {
              npcDialog("Well Mr Borker doesnt believe you...", () => {
                npcDialog(`Unless you prove that you are the real Tashawasha!
                  I wont let you pass >:C
                `, () => {
                  npcDialog(`There are 5 puzzles here that only the real
                    Tashawasha can solve. If you solve them - ill let u pass >:c
                  `, () => {
                    window.localStorage.setItem('shownIntro', true);
                    setLastReset(Date.now());
                  });
                });
              });
            });
          });
        });
      });
    }
    else if (isGameComplete() && window.localStorage.getItem('gameCompleted') === "false") {
      npcDialog('WHAATTTTT!?!?!?', () => {
        npcDialog(`You completed all the puzzles????
        `, () => {
          npcDialog("Mr Borker doesnt know what to sayy....", () => {
            npcDialog("I guesss.....", () => {
              npcDialog("I guess you are the real Tashawasha thenn", () => {
                npcDialog(`Finee..
                `, () => {
                  npcDialog(`ill show you the secret page that Ash
                  had written just for Tashawasha
                  `, () => {
                    history.push('/secret');
                  });
                });
              });
            });
          });
        });
      });
    }
  }, [lastReset]);
  const renderText = () => {
    if (window.localStorage.getItem('gameCompleted') === "true") {
      return "Thanks for playing!!! Press Reset Puzzle to play again."
    }
    return `"Only for the REAL Tashawasha!!!" - Mr Borker`
  }
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageText}>
        { renderText() }
      </div>
      <div className={styles.lockWrapper}>
        <Lock targetPage='/blog'/>
        <Lock targetPage='/equation'/>
        <Lock targetPage='/center'/>
        <Lock targetPage='/light/'/>
        <Lock targetPage='/business'/>
      </div>
      <button
        onClick={() => {
          resetGame();
          setLastReset(Date.now());
        }}
        variant="contained"
        className={styles.resetButton}>Reset Puzzle</button>
    </div>
  )
}