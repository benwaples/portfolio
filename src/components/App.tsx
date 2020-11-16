import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import { Placeholder } from './placeholder/Placeholder'
import {FormspreeProvider } from '@formspree/react'
import { Home } from './home/Home';


function App() {
  return (
   <>
   <FormspreeProvider project="1547903347124600521">
    <Router>
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
   </FormspreeProvider>
   </>
  );
}

export default App;
