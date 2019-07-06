import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onEditTransaction } from '../actions/index';
import { onToggleIsReadOnly } from '../actions/index';
import Cell from '../components/cells';

class TransactionList extends Component {
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
        <td><Cell transaction={ transaction } property={ "description" } onSubmitCell={ this.props.onEditTransaction } /></td>
        <td><Cell transaction={ transaction } property={ "category" }  onSubmitCell={ this.props.onEditTransaction } /></td>
        <td><Cell transaction={ transaction } property={ "individual" }  onSubmitCell={ this.props.onEditTransaction } /></td>
        <td><Cell transaction={ transaction } property={ "date" }  onSubmitCell={ this.props.onEditTransaction } /></td>
        <td><Cell transaction={ transaction } property={ "amount" }  onSubmitCell={ this.props.onEditTransaction } /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Descri2390483029ption</th>
            <th>Category</th>
            <th>Individual</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.transactions).map(key => this.renderTransaction(this.props.transactions[key])) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ transactions }){
  return { transactions };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ onEditTransaction },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
