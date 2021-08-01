import './App.css';
import React , { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import HomePage from './home/HomePage';
import BlogPage from './blog/BlogPage';
import CenterPage from './center/CenterPage';
import EquationPage from './equation/EquationPage';
import LightPage from './light/LightPage';
import LightPageWin from './light/LightPageWin';
import BusinessPage from './business/BusinessPage';
import NpcDialog from './dialog/NpcDialog';
import { NpcDialogContext } from './dialog/NpcDialog';
import SecretPage from './secret/SecretPage';

export const gameState = {
  '/blog-completed' : false,
  '/equation-completed' : false,
  '/center-completed' : false,
  '/light/-completed' : false,
  '/business-completed' : false,
  'shownIntro' : false,
  'gameCompleted' : false
}

export const resetGame = () => {
  for (const state of Object.keys(gameState)) {
    localStorage.setItem(state, gameState[state]);
    
  }
}

// Returns whether the game is complete
export const isGameComplete = () => {
  const checkpoints = [
    '/blog-completed',
    '/equation-completed',
    '/center-completed',
    '/light/-completed',
    '/business-completed',
  ]
  for (const checkpoint of checkpoints) {
    if (window.localStorage.getItem(checkpoint) === "false") {
      return false;
    }
  }
  return true;
}

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [callback, setCallback] = useState(() => () => {});
  const npcDialog = (message, callback=() => {}) => {
    setDialogMessage(message);
    setCallback(() => callback);
    setShowDialog(true);
  }
  useEffect(() => {
    for (const state of Object.keys(gameState)) {
      if (localStorage.getItem(state) === null) {
        localStorage.setItem(state, gameState[state]);
      }
    }
  }, [])
  return (
    <BrowserRouter>
      <NpcDialog 
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        dialogMessage={dialogMessage}
        callback={callback}
      />
      <NpcDialogContext.Provider value={npcDialog}>
        <Switch>
          <Route path='/secret'>
            <SecretPage/>
          </Route>
          <Route path='/business'>
            <BusinessPage/>
          </Route>
          <Route path='/light/pancreas'>
            <LightPageWin/>
          </Route>
          <Route path='/light/'>
            <LightPage/>
          </Route>
          <Route path='/equation'>
            <EquationPage/>
          </Route>
          <Route path='/center'>
            <CenterPage/>
          </Route>
          <Route path='/blog'>
            <BlogPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </NpcDialogContext.Provider>
   </BrowserRouter>
  );
}

export default App;
