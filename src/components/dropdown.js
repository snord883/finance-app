import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props){
    super(props);

    this.state= {
      isExpanded: false,
      isChecked: this.isInitiallyChecked(this.props.option)
    }

    this.isInitiallyChecked = this.isInitiallyChecked.bind(this);
  }

  showSubGroup(event){
    event.preventDefault();

    this.setState({isExpanded: !this.state.isExpanded});
  }

  toggleCheck(event){
    event.preventDefault();

    this.setState({isChecked: !this.state.isChecked});
  }

  isInitiallyChecked(option){
    if(option.subItems){
      return option.subItems.filter(o => !o.isIncluded).length == 0;
    }
    return option.isIncluded;
  }

  render(){
    let option = this.props.option;

    return(
      <li key={ option.name } >
        <input value={option.name} type="checkbox" onChange={(e) => this.toggleCheck(e)} checked={this.state.isChecked}/>
        <span>{option.name}</span>
        { (option.subItems) && <button className="btn btn-secondary btn-sm" onClick={(e) => this.showSubGroup(e)}>{ this.state.isExpanded ? '-' : '+' }</button> }
        { (option.subItems && this.state.isExpanded) && <ul>{ option.subItems.map(subOption => <Dropdown key={subOption.name} option={ subOption } />) }</ul> }
      </li>
    );
  }
}
