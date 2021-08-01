import React, {useContext} from 'react';
import { useEffect } from 'react';
import { NpcDialogContext } from '../dialog/NpcDialog';
import { useHistory } from 'react-router';

export default function SecretPage() {
  const history = useHistory();
  const npcDialog = useContext(NpcDialogContext);
  useEffect(() => {
    npcDialog('Tada this is it!!!', () => {
      npcDialog(`Whatt .. you say the page is empty???
      `, () => {
        npcDialog("Well its because ....", () => {
          npcDialog("Mr Borker is the secret page!!", () => {
            npcDialog(`
              Ash told Mr Borker that he cares a lot about Tashwasha and
              he knows the Tashawasha finds it hard during lockdown :c
            `, () => {
              npcDialog(`So Ash decided to make a fun game for Tashawasha to 
              play!!!
              `, () => {
                npcDialog(`Ash like cares about u soooo much and he likes want
                the best for youuu
                `, () => {
                  npcDialog(`And so Ash hopes and prays that during lockdown, even
                  through all the hard days ...
                    `, () => {
                      npcDialog(`You might keep trusting in Jesus!!
                        `, () => {
                          npcDialog(`Because Jesus is our solid rock!! And He sustains
                          us through all the hard times!!
                            `, () => {
                              npcDialog(`It says in 2 Corinthians 4:17 that "our light and momentary troubles are achieving for us an eternal glory that far outweighs them all."
                              `, () => {
                                npcDialog(`And soo even when we can't see it, God actually uses these momentary trials to shape us and make us more like Jesus!!
                              `, () => {
                                    npcDialog(`So keep clinging onto Him Tashawasha c:
                                  `, () => {
                                    npcDialog(`And thanks for playing with Mr Borker c:
                              `, () => {
                                npcDialog(`Mr Borker will go home now!! Bai baii c:
                              `, () => {
                                window.localStorage.setItem('gameCompleted', true);
                                history.push('/');
                              });
                              });
                                  });
                              });
                              });
                            });
                        });
                    });
                });
              });
            });
          });
        });
      });
    });
  }, [history])
  return (
    <div></div>
  )
}