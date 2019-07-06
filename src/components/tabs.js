import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let tabs=['transactions', 'budget', 'analysis'];

export default class Tabs extends Component {
  getStyles(type){
    let allTabStyles = {
      padding: '5px 10px',
      backgroundColor: 'white',
      borderRadius: '5px 5px 0px 0px',
      border: '1px solid #eee',
      borderBottom: '0px'
    };

    let selectedTabStyles = {
      backgroundColor: '#ddd',
    }

    if (type==this.props.type)
      return {...allTabStyles, ...selectedTabStyles};
    return allTabStyles;

  }

  renderTab(type){
    let link = `/${type}/2018${(type=='transactions') ? '/8' : ''}`;
    return <Link key={type} to= {link}><div style={this.getStyles(type)}>{type.toUpperCase()}</div></Link>;
  }

  render() {
    return (
      <span className="tabs" style={{display: 'inline-flex'}}>
        {tabs.map(tab => this.renderTab(tab))}
      </span>
    );
  }
}
