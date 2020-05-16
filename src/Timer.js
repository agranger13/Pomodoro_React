import React, {Component} from 'react';
import './App.css';

export default class Timer extends Component{
    timer = ()=>{
        if(this.props.timerRunning){
            clearInterval(this.props.timerId);
            this.props.setCurrentTime("START !");
            this.props.setTimerRunning();
        }else{
            this.props.cycle === "WORK" ?
            this.props.startTimer(this.props.onTime) :
            this.props.startTimer(this.props.outTime);
        }
    }

  render() {
    return (
      <div className="time">
        <span className={this.props.currentTime<20? 
            "count-down color-red" : "count-down"}
            onClick={this.timer}>
            {this.props.currentTime}
        </span>
        <p className={this.props.cycle === "WORK"? 
            "color-green" : "color-red"}
            >
            Cycle : {this.props.cycle}
        </p>
      </div>
    );
  }
}