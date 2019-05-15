import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = [
      {color1:``},
      {color2:``},
      // {showing: false},
      // {color1RGB:``},
      // {color2RGB:``}
      {R1:"00"},
      {G1:"00"},
      {B1:"00"},
      {R2:"00"},
      {G2:"00"},
      {B2:"00"},
      {P1:"0"},
      {P2:"0"},


      {R3:"00"},
      {G3:"00"},
      {B3:"00"},
      {color3:''}
    

    
    ]
  }
  
  R1Change = (event) => {
    let R1Value = event.target.value;
    this.checkValue(R1Value);
    this.setState({R1:R1Value})
    this.rgbToHex();

  }
  G1Change = (event) => {
    let G1Value = event.target.value;
    this.checkValue(G1Value);

    this.setState({G1:G1Value})
    this.rgbToHex();
  }
  B1Change = (event) => {
    let B1Value = event.target.value;
    this.checkValue(B1Value);

    this.setState({B1:B1Value})
    this.rgbToHex();
  }
  R2Change = (event) => {
    let R2Value = event.target.value;
    this.checkValue(R2Value);
    this.setState({R2:R2Value})
    this.rgbToHex();
  }
  G2Change = (event) => {
    let G2Value = event.target.value;
    this.checkValue(G2Value);
    this.setState({G2:G2Value})
    this.rgbToHex();
  }
  B2Change = (event) => {
    let B2Value = event.target.value;
    this.checkValue(B2Value);
    this.setState({B2:B2Value});
    this.rgbToHex();
  }
  P1Change = (event) => {
    let P1Value = event.target.value;
    this.setState({P1:P1Value})
    this.addColor();
  }
  P2Change = (event) => {
    let P2Value = event.target.value;
    this.setState({P2:P2Value});
    this.addColor();
    
  }
  checkValue=(n)=>{
    if (Number(n)>256){
      alert("The number needs to be lower than 256");

      
    }
  }
  rgbToHex = () =>{
    let R1hex = Number(this.state.R1).toString(16);
    if(R1hex.length<2){
      R1hex="0"+R1hex;}
      let G1hex = Number(this.state.G1).toString(16);
    if(G1hex.length<2){
      G1hex="0"+G1hex;}
      let B1hex = Number(this.state.B1).toString(16);
      if(B1hex.length<2){
        B1hex="0"+B1hex;}
        let R2hex = Number(this.state.R2).toString(16);
        if(R2hex.length<2){
          R2hex="0"+R2hex;}
          let G2hex = Number(this.state.G2).toString(16);
        if(G2hex.length<2){
          G2hex="0"+G2hex;}
          let B2hex = Number(this.state.B2).toString(16);
          if(B2hex.length<2){
            B2hex="0"+B2hex;}
      let color1Hex ="#"+R1hex+G1hex+B1hex
      this.setState({color1:color1Hex})
      let color2Hex ="#"+R2hex+G2hex+B2hex
      this.setState({color2:color2Hex})
      console.log(
        color1Hex
      )
      }
    addColor=()=>{
      let addR3 = Math.round(this.state.R1*this.state.P1+this.state.R2*this.state.P2).toString(16);
      let addG3 = Math.round(this.state.G1*this.state.P1+this.state.G2*this.state.P2).toString(16);
      let addB3 = Math.round(this.state.B1*this.state.P1+this.state.B2*this.state.P2).toString(16);
      this.setState({R3:addR3})
      this.setState({G3:addG3})
      this.setState({B3:addB3})


      // let R3hex = Number(this.state.R3).toString(16);
      // console.log("R3HEX", R3hex);
    if(addR3.length<2){
      addR3="0"+addR3;}
      // let G3hex = Number(this.state.G3).toString(16);
      if(addG3.length<2){
        addG3="0"+addG3;}
      // let B3hex = Number(this.state.B3).toString(16);
      if(addB3.length<2){
        addB3="0"+addB3;}
        let color3Hex ="#"+addR3+addG3+addB3
        this.setState({color3:color3Hex})
        console.log(color3Hex)
  
   

    
    
      
}





 


  
  render() {
    return (
      <div className="App">
        <div className='title'>
        Color Mixer
        </div>
<div className='box'>
   
        <div className='flex1'  style={{backgroundColor: this.state.color1}}>
        <h2>Color1</h2>
        <p>R (0-256):<input onInput = {this.R1Change}></input></p>
        <p>G (0-256):<input onInput = {this.G1Change}></input></p>
        <p> B (0-256):<input onInput = {this.B1Change}></input></p>
        <p>proportion (0-1):<input onInput = {this.P1Change}></input></p>
    
      </div>

      <div className='flex2' style={{backgroundColor: this.state.color2}}>
      <h2>Color2</h2>
      <p>R (0-256):<input onInput = {this.R2Change}></input></p>
      <p>G (0-256):<input onInput = {this.G2Change}></input></p>
      <p>B (0-256):<input onInput = {this.B2Change}></input></p>
      <p>proportion (0-1):<input onInput = {this.P2Change}></input></p>
     
      </div>

      
     
</div>




      <div className='flex3'  style={{backgroundColor: this.state.color3}}>
      <h2>Color3</h2>
    
     </div>



   
      

     
  </div>
   
      




      
      
     
      
    
      


      
    );
  }
}

export default App;
