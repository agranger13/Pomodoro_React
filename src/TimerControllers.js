import React, {Component} from 'react';
import TimeOnController from './TimeOnController';
import TimeOutController from './TimeOutController';
import './App.css';

export default class TimerControllers extends Component{
  render() {
    return (
      <div className="time-controllers">
        <TimeOnController  
          setCurrentTime={this.props.setCurrentTime}
          timerRunning={this.props.timerRunning}
          onTime={this.props.onTime}
          incrementOnTime={this.props.incrementOnTime}
          decrementOnTime={this.props.decrementOnTime}
        />
        <TimeOutController 
          timerRunning={this.props.timerRunning}
          outTime={this.props.outTime}
          incrementOutTime={this.props.incrementOutTime}
          decrementOutTime={this.props.decrementOutTime}
        />
      </div>
    );
  }
}