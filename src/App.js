import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;