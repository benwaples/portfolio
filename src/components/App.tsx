import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
// import { About } from './about/About';
import { Placeholder } from './placeholder/Placeholder'
import "bootstrap/dist/css/bootstrap.min.css"
import { Home } from './home/Home';
function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/" component={Placeholder} />
       <Route exact path="/home" component={Home} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
