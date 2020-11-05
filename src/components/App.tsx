import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import { About } from './about/About';
import { Home } from './home/Home'
function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
