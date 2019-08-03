import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onEditTransaction } from '../actions/index';
import Tabs from '../components/tabs';
import DateBar from '../components/date_bar';
import TransactionDisplay from '../components/transaction_display';
import BudgetDisplay from '../components/budget_display2';

class TransactionsContainer extends Component {
  extractFromPath(part){
    const path = this.props.history.location.pathname.split("/");
    if (part=='type') { return path[1]; }
    return (part=="year") ? path[2]*1 : path[3]*1;
  }

  render(){
    let year = this.extractFromPath('year');
    let month = this.extractFromPath('month') ? this.extractFromPath('month') : null;
    let type = this.extractFromPath('type')

    let getTransactions = (monthlyBreakDown) => {
      //month-1, because Date takes a monthIndex starting at 0
      let adjBeginningMonth = monthlyBreakDown ? month - 1 : 0;
      let adjEndingMonth = monthlyBreakDown ? month : 0;
      let adjEndingYear = monthlyBreakDown ? year : year + 1;
      return Object.keys(this.props.transactions)
                  .filter(
                    id => {
                      return this.props.transactions[id].date >= new Date(year, adjBeginningMonth, 1) &&
                              this.props.transactions[id].date <  new Date(adjEndingYear, adjEndingMonth, 1);
                    })
                  .map(
                    id => {
                      return this.props.transactions[id];
                    })
    }

    return(
      <div>
        <Tabs type={type}/>
        <DateBar type={type} transactions={this.props.transactions} year={year} month={month}/>
        <Switch>
          <Route exact path="/transactions/:year/:month" component ={(props) =>
            <TransactionDisplay {...props}
              transactions={ getTransactions(true) }
              individuals={this.props.individuals}
              categories={this.props.categories}
              onEditTransaction={ this.props.onEditTransaction }
            />}
          />
          <Route exact path="/budget/:year" component={(props) =>
            <BudgetDisplay  {...props}
              transactions={ getTransactions(false) }
              categories={this.props.categories}
            />}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ transactions, categories, individuals }){
  return { transactions, categories, individuals };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ onEditTransaction },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);

//    Routes to TransactionPage, BudgetPage, SpendingAnalysis
