import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov", "Dec"];
let minDate;
let maxDate;

export default class DateBar extends Component {
  setDateRange(){
    let dateRange = Object.keys(this.props.transactions).map(id => this.props.transactions[id].date).sort();

    minDate = this.formatDate(dateRange[0]);
    maxDate = this.formatDate(dateRange[dateRange.length - 1]);
  }

  formatDate(argDate){
    let oldFormatDate = new Date(argDate)
    return oldFormatDate.getFullYear() * 100 + oldFormatDate.getMonth() + 1;
  }

  getArrow(monthsMoved, arrowIcon){
    let newDate = this.getDateObj(monthsMoved);
    newDate = this.checkAgainstRange(newDate);

    if(newDate.isEndOfRange)
      return (
        <span style={this.getStyle(true)}>{arrowIcon}</span>
      );

    return (
      <Link to={this.getLink(newDate)} style={this.getStyle(false)}>{arrowIcon}</Link>
    );
  }

  getLink(newDate){
    if (this.props.type=='transactions')
      return `/${this.props.type}/${newDate.year}/${newDate.month}`;

    return `/${this.props.type}/${newDate.year}`;
  }

  getDateObj(monthsMoved){
    let newMonth = this.props.month == null ? 1 : this.props.month;
    let newDate = new Date;
    newDate.setFullYear(this.props.year, (newMonth-1) + monthsMoved,1); //monthIndex needs to be passed to setFullYear

    return {year:newDate.getFullYear(),month:newDate.getMonth() + 1, isEndOfRange:false};
  }

  checkAgainstRange(newDate){ 
    if(newDate.year * 100 + newDate.month < minDate){
      return this.getCappedDate(minDate);
    }else if(newDate.year * 100 + newDate.month > maxDate){
      return this.getCappedDate(maxDate);
    }
    return newDate;
  }

  getCappedDate(cappedDate){
    let cappedYear = Math.floor(cappedDate/100);
    return {
      year: cappedYear,
      month: cappedDate%100,
      isEndOfRange: this.props.year*100 + this.props.month == cappedDate
                || this.isEndOfYearRange(this.props.year, cappedYear)
    };
  }

  isEndOfYearRange(curYear, cappedYear){
    return this.props.month == null && curYear == cappedYear;
  }

  getStyle(isEndOfRange){
    let styles = {color:'grey', cursor:'default'};
    return isEndOfRange ? styles : {};
  }

  render() {
    this.setDateRange();
    let barStyle = {textAlign:'center', backgroundColor:'#ddd'};
    let spanStyle = {width: '110px', margin: '5px'};
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