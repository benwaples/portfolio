import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { FormspreeProvider } from '@formspree/react';
import Placeholder from './placeholder/Placeholder';
import Home from './home/Home';

function App(): JSX.Element {
  return (
    <>
      <FormspreeProvider project="1547903347124600521">
        <Router>
          <Switch>
            <Route exact path="/placeholder" component={Placeholder} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </FormspreeProvider>
    </>
  );
}

export default App;
