import React, { Component } from 'react';
import Cell from '../components/cells';

let monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov", "Dec"];
let stylesColumnWidths = {display:'grid', gridTemplateColumns: '12% repeat(12, 6.5%) 10%'};
let stylesDataHeaders={display:'table-cell', width:'100%', padding:'12px 6px'};
let stylesData={display:'table-cell', width:'100%'};

class BudgetCategory extends Component {
  getCategoryTotal(transaction){
    console.log(transaction.category);
  }

  getMonthlyBreakdown(){
      let monthlyTransactions = Object.keys(this.props.transactions)
                .map(month => Object.keys(this.props.transactions[month])
                  .map(day => Object.keys(this.props.transactions[month][day])
                    .filter(transaction =>                      
                      this.props.transactions[month][day][transaction].category === this.props.category.name)
                      ))
                      ;

      // console.log(`${this.props.category.name}: ${monthlyTransactions.map(trans => console.log(trans))}`);   
  }

  render() {
    this.getMonthlyBreakdown();
    return(
      <tr style={stylesColumnWidths}>
        <td style={stylesData}>{this.props.category.name}</td>
      </tr>
    );
  }
}

export default class BudgetDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      type: 'budget'
    }

    this.renderBody = this.renderBody.bind(this);
  }

  renderBody(){
    let categories = this.props.categories;    

    return (
      <tbody>
        { Object.keys(categories).map(n => <BudgetCategory key={n} category={categories[n]} transactions={this.props.transactions}/>) }
      </tbody>
    );
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
        {this.renderBody()}
      </table>
    );
  }
}

//{this.renderBody()}
//Add a reducer for groups so then when I stream through the budget I can go through the groups first and then if they are expanded then I can open it's subitems
//Also it would be easier to create new groups or delete groups.
