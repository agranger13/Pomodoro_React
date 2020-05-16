import React, {Component} from 'react';
import './App.css';

export default class TimeOnController extends Component{
    triggerIncrement = ()=>{
        this.props.incrementOnTime()
    }
    triggerDecrement = ()=>{
        this.props.decrementOnTime()
    }

  render() {
    return (
      <div className="controller">
        <p>TIME ON : </p>
        <button onClick={this.triggerDecrement}> - </button>
        <span> {this.props.onTime} </span>
        <button onClick={this.triggerIncrement}> + </button>
      </div>
    );
  }
}