import React, {Component} from 'react';
import Timer from './Timer';
import TimerControllers from './TimerControllers';
import Alert from './Alert';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      timerId : 0,
      timerRunning: false,
      currentTime: "START !",
      cycle : "WORK",
      onTime: 10,
      outTime: 5,
      sound: true
    }
    this.audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/0375.mp3")
  }

  startTimer = (duration) =>{
    this.setState({timerRunning: true});
    let time = duration;
    let minutes;
    let seconds;

    let runningTimer = setInterval(()=>{
      time -= 1;
      this.setState({
        timerId: runningTimer
      });


      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minutes = minutes < 10 ? "0" + minutes: minutes;
      seconds = seconds < 10 ? "0" + seconds: seconds;

      this.setCurrentTime(minutes + " : " + seconds);
      console.log(this.state.currentTime)
      console.log(minutes + " : " + seconds)
      if(time === 0){
        if(this.state.cycle === "WORK"){
          this.setState({
            cycle: "PAUSE",
            timerRunning: false
          })

          if(this.state.sound){
            this.audio.play();
          }
          

          clearInterval(this.state.timerId);
          this.startTimer(this.state.outTime)
        }else{
          this.setState({
            cycle: "WORK",
            timerRunning: false
          })
          clearInterval(this.state.timerId);
          this.startTimer(this.state.onTime)
        }
      }
    },1000)
  }

  setSound = (sound) =>{
    this.setState({
      sound : sound
    })
  }

  setCurrentTime = (currentTime)=>{
    this.setState({
      currentTime : currentTime
    })
  }

  setTimerRunning = ()=>{
    this.setState({
      timerRunning : false
    })
  }

  incrementOnTime= () =>{
    this.setState({
      onTime : this.state.onTime + 1
    })
  }

  incrementOutTime= () =>{
    this.setState({
      outTime : this.state.outTime + 1
    })
  }

  decrementOnTime= () =>{
    this.setState({
      onTime : this.state.onTime - 1
    })
  }

  decrementOutTime= () =>{
    this.setState({
      outTime : this.state.outTime - 1
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Pomodoro</h1>
        <Timer
          onTime={this.state.onTime}
          outTime={this.state.outTime}
          currentTime={this.state.currentTime}
          setCurrentTime={this.setCurrentTime}
          cycle={this.state.cycle}
          timerRunning={this.state.timerRunning}
          setTimerRunning={this.setTimerRunning}
          startTimer={this.startTimer}
          timerId={this.state.timerId}
        />
        <TimerControllers 
          onTime={this.state.onTime}
          outTime={this.state.outTime}
          setCurrentTime={this.setCurrentTime}
          timerRunning={this.state.timerRunning}
          incrementOnTime={this.incrementOnTime}
          decrementOnTime={this.decrementOnTime}
          incrementOutTime={this.incrementOutTime}
          decrementOutTime={this.decrementOutTime}
        />
        <Alert setSound={this.setSound} sound={this.state.sound} />
      </div>
    );
  }
}
