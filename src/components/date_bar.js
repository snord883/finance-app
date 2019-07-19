import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov", "Dec"];
let minDate;
let maxDate;

export default class DateBar extends Component {
  setDateRange(){
    let dateRange = Object.keys(this.props.transactions)
                            .map(year => 
                              Object.keys(this.props.transactions[year])
                                .map(month => 
                                  year*100 + month*1)).flat();

    minDate = Math.min(...dateRange);
    maxDate = Math.max(...dateRange);
  }

  getArrow(monthsMoved, arrowIcon){
    let newDate = this.getDate(monthsMoved);
    newDate = this.checkAgainstRange(newDate);

    return (
      <Link to={this.getLink(newDate)} style={this.getStyle(newDate.isCapped)}>{arrowIcon}</Link>
    );
  }

  getLink(newDate){
    if (this.props.type=='transactions')
      return `/${this.props.type}/${newDate.year}/${newDate.month}`;

    return `/${this.props.type}/${newDate.year}`;
  }

  getDate(monthsMoved){
    let newDate = new Date;
    newDate.setFullYear(this.props.year, this.props.month + monthsMoved,1);
    let offset = ((this.props.month + monthsMoved) == 0) ? 1 : 0;

    return {year:newDate.getYear() + 1900 - offset,month:newDate.getMonth() + offset*12, isCapped:false};
  }

  checkAgainstRange(newDate){
    if(newDate.year*100+newDate.month < minDate){
      return {
        year: Math.floor(minDate/100),
        month: minDate%100,
        isCapped: true
      };
    }else if(newDate.year*100+newDate.month>maxDate){
      return {
        year: Math.floor(maxDate/100),
        month: maxDate%100,
        isCapped: true
      };
    }
    return newDate;
  }

  getStyle(isCapped){
    let styles = {color:'grey', cursor:'default'};
    return isCapped ? styles : {};
  }

  render() {
    this.setDateRange();
    let barStyle = {textAlign:'center', backgroundColor:'#ddd'};
    let spanStyle = {width: 'auto', margin: '5px'};
    if (this.props.type=='transactions') {
      return(
        <div className='dateBar' style={barStyle}>
          {this.getArrow(-12,<i className="fas fa-angle-double-left"></i>)}
          {this.getArrow(-1,<i className="fas fa-angle-left"></i>)}
          <span className="btn btn-primary" style={spanStyle}>{`${monthMap[this.props.month -1].toUpperCase()} ${this.props.year}`}</span>
          {this.getArrow(1,<i className="fas fa-angle-right"></i>)}
          {this.getArrow(12,<i className="fas fa-angle-double-right"></i>)}
        </div>
      );
    }
    return (
      <div className='dateBar' style={barStyle}>
        {this.getArrow(-12,<i className="fas fa-angle-double-left"></i>)}
        <span className="btn btn-primary" style={spanStyle}>{`${this.props.year}`}</span>
        {this.getArrow(12,<i className="fas fa-angle-double-right"></i>)}
      </div>
    );
  }
}