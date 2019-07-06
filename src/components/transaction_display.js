import React, { Component } from 'react';
import Cell from '../components/cells';
import Filter from '../components/filters';

export default class TransactionDisplay extends Component {
  constructor(props){
    super(props);

    this.renderTransaction = this.renderTransaction.bind(this);
  }

  renderTransaction(transaction){
    if (!transaction.isVisible) {
      return;
    }

    return (
      <tr key={ transaction.id }>
        <td><Cell transaction={ transaction } property={ "description" } onSubmitCell={ this.props.onEditTransaction } isEditable={true} /></td>
        <td><Cell transaction={ transaction } property={ "category" }  onSubmitCell={ this.props.onEditTransaction } options={ this.props.categories } isEditable={true} /></td>
        <td><Cell transaction={ transaction } property={ "individual" }  onSubmitCell={ this.props.onEditTransaction } options={this.props.individuals } isEditable={true} /></td>
        <td><Cell transaction={ transaction } property={ "date" }  onSubmitCell={ this.props.onEditTransaction } isEditable={true} /></td>
        <td><Cell transaction={ transaction } property={ "amount" }  onSubmitCell={ this.props.onEditTransaction } isEditable={true} /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-striped table-bordered header-fixed">
        <thead>
          <tr>
            <th>Description</th>
            <th><Filter value='Category' options={ this.props.categories } /></th>
            <th><Filter value='Individual' options={ this.props.individuals } /></th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.transactions).reverse().map(day => Object.keys(this.props.transactions[day]).map(id => this.renderTransaction(this.props.transactions[day][id]))) }
        </tbody>
      </table>
    );
  }
}
