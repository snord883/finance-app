import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Homepage extends Component{
  render(){
    return <Link to='/transactions/2018/8'>TRANSACTIONS</Link>;
  }

}
