import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
