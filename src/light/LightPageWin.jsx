import React, { useContext } from 'react';
import { NpcDialogContext } from '../dialog/NpcDialog';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function LightPageWin () {
  const history = useHistory();
  const npcDialog = useRef(useContext(NpcDialogContext));
  useEffect(() => {
    npcDialog.current(`Impossible!!! This is a cute movie that Ash and
      Tashawasha watched!! How did you know??
    `,
      () => {
        window.localStorage.setItem('/light/-completed', true);
        history.push('/')
      }
    );
  }, [npcDialog, history])
  return (
    <div></div>
  )
}