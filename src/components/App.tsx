import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import { HomePage } from '../pages/home/HomePage';

function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/" component={HomePage} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
