import React, { Component, PureComponent } from 'react';

export default class Cells extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: this.getInitialValue(),
      isReadOnly:true
    }
  }

  getInitialValue(){
    if (this.props.property != 'date') {
      return this.props.transaction[this.props.property];
    } else{
      var trDate = new Date(this.props.transaction.date);
      return trDate.toLocaleDateString();
    }
  }

  onDoubleClick(){
    this.setState({
      isReadOnly: false
    });
  }

  onInputChange(event){
    this.setState({
      value:event.target.value
    });
  }

  onBlur(transaction, property){
    if (!this.state.isReadOnly) {
      this.props.onSubmitCell(transaction, property, this.state.value);

      this.setState({
        isReadOnly:true
      });
    }
  }

  render(){
    if (!this.props.isEditable) {
      return (
        <input value={ this.state.value } />
      );
    } else if ( this.props.options && !this.state.isReadOnly ) {
      const sOptions = [];
      Object.keys(this.props.options).forEach(id => {
        if(this.props.options[id].subItems){
          return this.props.options[id].subItems.forEach(subItem => sOptions.push(subItem.name));
        }else{
          return sOptions.push(this.props.options[id].name);
        }
      });

      return (
        <select
          value={ this.state.value }
          onDoubleClick={ (e) => this.onDoubleClick()}
          onChange={ (e) => this.onInputChange(e) }
          onBlur={ (e) => this.onBlur(this.props.transaction, this.props.property)}>
            { sOptions.sort().map(o => <option key={o} value={o}>{o}</option>) }
        </select>
      );
    } else {
        return (
          <input
            value={ this.state.value }
            onDoubleClick={ (e) => this.onDoubleClick()}
            onChange={ (e) => this.onInputChange(e) }
            onBlur={ (e) => this.onBlur(this.props.transaction, this.props.property)}
            readOnly={ this.state.isReadOnly }/>
        );
    }
  }
}
