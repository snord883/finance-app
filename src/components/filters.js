import React, { Component } from 'react';
import Dropdown from '../components/dropdown';

export default class Filters extends Component {
  constructor(props){
    super(props);

    this.state= {
      visibility: false
    }

    this.toggleFilter = this.toggleFilter.bind(this);
  }
  toggleFilter(event){
    event.preventDefault();

    this.setState({
      visibility: !this.state.visibility
    });
  }

  render(){
    return (
      <span>
        {this.props.value}
        <i className="fas fa-filter" onClick={ this.toggleFilter }></i>
        {
          this.state.visibility &&
          <form className={`filter_form ${this.props.value}`}>
            <ul>
              { Object.keys(this.props.options).map(option => <Dropdown key={option} option={this.props.options[option]} />) }
            </ul>
            <div className="filter_buttons">
              <button className='btn btn-danger btn-sm' onClick={this.toggleFilter}>Cancel</button>
              <button className='btn btn-success btn-sm'>Filter</button>
            </div>
          </form>
        }
      </span>
    );
  }
}
