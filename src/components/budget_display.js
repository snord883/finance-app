import React, { Component } from 'react';

let monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov", "Dec"];

let stylesColumnWidths = {display:'grid', gridTemplateColumns: '14% repeat(12, 6.5%) 8%'};
let stylesDataHeaders={display:'table-cell', width:'100%', padding:'12px 6px'};
let stylesRowLabel={display:'table-cell', width:'100%' };
let stylesData={ ...stylesRowLabel, ...{textAlign:'center', fontSize:'14px', lineHeight:'31px'} };
let stylesDataNegative={ ...stylesData, ...{ color:'red' } };
let stylesButton ={ padding: '0 2px', backgroudColor:'inherit', border: 'none' }

class BudgetTransactionRow extends Component {
  getTotal(monthlyAmounts){
    return monthlyAmounts.reduce((total, monthlyAmount) => total + monthlyAmount);
  }
  
  getMonthlyBreakdown(){
    let transactions = this.props.transactions;
    
    let monthlyTransactions = [0,1,2,3,4,5,6,7,8,9,10,11].map(monthId =>    
                                  Object.keys(transactions)
                                    .filter(id =>
                                      new Date(transactions[id].date).getMonth() == monthId
                                    ).reduce((sum, id) =>
                                      sum + transactions[id].amount, 0
                                    )
                              );

    monthlyTransactions.push(this.getTotal(monthlyTransactions));
    return monthlyTransactions; 
  }

  formatNumber(num){
    if(num === 0) return '-';
    return num < 0 ? `(${ (-1 * num.toFixed(2)).toLocaleString() })` : num.toFixed(2).toLocaleString()
  }


  render() {
    let category = this.props.category;
    
    return(
      <tr style={stylesColumnWidths}>
          <td style={stylesRowLabel}>
            { category.name }
            { (this.props.category.subItems) && <button style={ stylesButton } className="btn btn-secondary btn-sm" onClick={(e) => this.props.toggleSubGroup(e, category.name)}>{ this.props.isExpanded ? '-' : '+' }</button> }
          </td>
        { this.getMonthlyBreakdown().map((monthlyAmount,i) =>
          <td
            key={ i }
            style={ monthlyAmount>=0 ? stylesData : stylesDataNegative } >
            { this.formatNumber(monthlyAmount) }
          </td>)
        }
      </tr>
    );
  }
}

export default class BudgetDisplay extends Component {
  constructor(props){
    super(props);

    this.state= {
      expandedGroups: []
    }

    this.toggleSubGroup = this.toggleSubGroup.bind(this);
  }

getTransactionsByCategories = (transactions, category) => 
          Object.keys(transactions)
                  .filter(id =>
                    this.getAllCategoriesFromSubGroupings(category, []).includes(transactions[id].category)
                  )
                  .map(id =>
                    transactions[id]
                  );
      
getAllCategoriesFromSubGroupings = (category, allCategoriesFromSubGroupings) => {
  if(category.subItems){
    category.subItems.forEach(item =>
      this.getAllCategoriesFromSubGroupings(item, allCategoriesFromSubGroupings)
    );
  } else {
    allCategoriesFromSubGroupings.push(category.name);
  }

  return allCategoriesFromSubGroupings;
}

  getVisibleGroups(){
    let visibleGroups = [];
    Object.keys(this.props.categories).forEach(id => {
      visibleGroups = this.addSubItemsToVisibleGroups(this.props.categories[id], visibleGroups);
    });

    return visibleGroups.flat();
  }

  addSubItemsToVisibleGroups(category, visibleGroups){
    visibleGroups.push(category)
    
    if(this.state.expandedGroups.includes(category.name) && category.subItems){
        category.subItems.forEach(item =>
          this.addSubItemsToVisibleGroups(item, visibleGroups)
        );
    }

    return visibleGroups;
  }

  toggleSubGroup(e, name){
    e.preventDefault();
    
    let tempArr = this.state.expandedGroups;
    if(!this.state.expandedGroups.includes(name))
      tempArr.push(name);
    else
      tempArr = tempArr.filter(element => element !== name)

    this.setState({ expandedGroups: tempArr });
  }

  render(){
    return(
      <table className="table table-striped table-bordered header-fixed" style={{tableLayout: 'fixed'}}>
        <thead>
          <tr style={stylesColumnWidths}>
            <th style={stylesDataHeaders}>CATEGORY</th>
            {monthMap.map(m => <th key={m} style={stylesDataHeaders}>{m.toUpperCase()}</th>)}
            <th style={stylesDataHeaders}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          { 
            this.getVisibleGroups().map((category,i) =>
              <BudgetTransactionRow
                key={ i }
                category= { category }
                isExpanded= { this.state.expandedGroups.includes(category.name) }
                toggleSubGroup= { this.toggleSubGroup }
                transactions= { 
                  category.name==='ALL' ?
                    this.props.transactions
                    :
                    this.getTransactionsByCategories(this.props.transactions, category) }
              />
            )
          }
        </tbody>
      </table>
    );
  }
}