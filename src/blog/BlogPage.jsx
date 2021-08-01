import React, { useContext } from 'react';
import styles from './BlogPage.module.css';
import corgiPic from '../assets/corgi.jpg';
import PropTypes from 'prop-types';
import tortoroPic from '../assets/tortoro.png';
import bubblesPic from '../assets/bubbles.png';
import { useState } from 'react';
import { NpcDialogContext } from '../dialog/NpcDialog';
import { useHistory } from 'react-router-dom';
import BackButton from '../common/BackButton';

function Comment (props) {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentProfileWrapper}>
        <img className={styles.commentPic} src={props.imgSrc} alt='profile'/>
        <div>{props.name}</div>
      </div>
      <div className={styles.commentText}>{props.text}</div>
    </div>
  )
}

Comment.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string
}

export default function BlogPage() {
  const history = useHistory();
  const [answer, setAnswer] = useState('');
  const npcDialog = useContext(NpcDialogContext);
  const onclick = () => {
    if (answer === 'some') {
      npcDialog(`Whaaa how did you know?? This song only Ash and Tashawasha 
        would know...
      `,
        () => {
          npcDialog(`Hmmm not bad Ms Imposter >:c
          `,
          () => {
            window.localStorage.setItem('/blog-completed', true);
            history.push('/');
          })
        }
      );
      return;
    }
    npcDialog(`
      No!!! That's not Mr Borker's favourite song >:C You obviously aren't
      the REAL Tashwasha >:c
    `);
  }
  return (
    <div className={styles.pageWrapper}>
      <BackButton/>
      <div className={styles.profileWrapper}>
        <img src={corgiPic} className={styles.profilePic} alt='corgi profile'/>
        <div className={styles.profileText}>A blog post by Mr Borker</div>
      </div>
      <div className={styles.blogTitle}>
        Fried Chicken
      </div>
      <div className={styles.blogTextWrapper}>
        <div className={styles.blogText}>
          <span className={styles.highlight}>Even </span>
          among the experts of the dietary world, it is agreed that
          <span className={styles.highlight}> though </span> 
          fried chicken is not at the forefront of health, it is still
          beneficial in satisfying the 
          "<span className={styles.highlight}>I</span>"
          . The average consumer of fried chicken
          <span className={styles.highlight}> can't </span>
          worry about taste and health at the same time and thus
          <span className={styles.highlight}> eat </span>
          it anyways.
        </div>
        <div className={styles.blogText}>
          Another noticeable trend when eating fried chicken is to eat it with
          something containing 
          <span className={styles.highlight}> gluten </span>
          for example, white bread. It makes such a
          delicious combination that one must confess 
          "<span className={styles.highlight}>I'm </span>
          loving it" and
          "I'm 
          <span className={styles.highlight}> gonna </span>
          eat more". Furthermore, the combination of fried chicken
          and bread makes one 
          <span className={styles.highlight}> go around </span>
          looking for more. Ultimately, 
          <span className={styles.highlight}> eating </span>
          fried chicken is simply 
          <span className={styles.highlight}> delicious </span>
          and it is the capstone of good 
          <span className={styles.highlight}> food </span>.
          Put it together 
          <span className={styles.highlight}> with </span>
          white bread, and 
          <span className={styles.highlight}> you </span>
          have got yourself a good meal.
        </div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitle}>Comments</div>
        <Comment imgSrc={tortoroPic} text='Fried Chicken is just soooo yummy!!'
          name='Tortoro'/>
        <Comment imgSrc={bubblesPic} text='Having Fried chicken and listening to
        cute songs is the vibe~'
          name='Bubbles'/>
        <Comment imgSrc={corgiPic} text='Can anyone guess my favourite song to
        go with fried chicken???'
          name='Mr Borker'/>
        <div className={styles.inputWrapper}>
          <input 
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder='Write your comment here...'
            className={styles.answerInput}></input>
          <button 
            onClick={onclick}
            className={styles.answerButton}>Submit</button>
        </div>  
      </div>
    </div>
  )
}