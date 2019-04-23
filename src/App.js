import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = [
      {color1:``},
      {color2:``},
      {showing: false}
    
    ]
  }
  
  color1Change = (event) => {
    let color1Value = event.target.value;
    this.setState({color1:color1Value})
  }



  color2Change = (event) => {
    let color2Value = event.target.value;
    this.setState({color2:color2Value})
  }
  



  
  render() {
    return (
      <div className="App">
        <div className='title'>
        Color Mixer
        </div>
<div className='box'>
        <div className='color1'  style={{backgroundColor: this.state.color1}}>
        Hex Color1:<input onInput = {this.color1Change}></input>
      </div>

      <div className='color2' style={{backgroundColor: this.state.color2}}>
        Hex Color2:<input onInput = {this.color2Change}></input>
      </div>

      </div>
      


      </div>
    );
  }
}

export default App;
