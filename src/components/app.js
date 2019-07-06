import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import TransactionsContainer from '../containers/transactions_Container';

export default class App extends Component {
  render() {
    return (
      <div id="app" style={{padding: '40px 20px'}}>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/*" component ={ TransactionsContainer } />

        </Switch>
      </div>
    );
  }
}


//Change transactions to :dataView so the transactions_Container can switch between transactions/budget/analysis
