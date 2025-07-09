import { Component } from 'react';
import Theme from '../Components/Theme';
import InputSpace from '../Components/InputSpace';
import Keys from '../Components/Keys';
import Key from '../Components/Key';
import './App.css';
import { values } from '../values';

class App extends Component{
  constructor() {
    super();
    this.state = {
      // color change
      color: '',
      mainBgColor: '',
      keypadBg: '',
      swtchColor: '',
      swtchBg: '',
      fontColor: '',
      inputBg: '',

      // calculations
      content: '',
      childData: '',
      values: values,
      checkPlus: false,
      checkMinus: false,
      checkTimes: false,
      checkDivision: false,
      fValue: 0.0,
      sValue: 0.0,
      calcResult: 0.0
    }
    this.onColorChangeMain = this.onColorChangeMain.bind(this);
    this.onColorChangeLight = this.onColorChangeLight.bind(this);
    this.onColorChangePurple = this.onColorChangePurple.bind(this);

    // this.contentType = this.contentType.bind(this);
  }

  // color change

  onColorChangeMain(){
    this.setState({mainBgColor: 'main-bg'})
    this.setState({color: ''})
    this.setState({keypadBg: 'keypad-bg'})
    this.setState({swtchColor: ''})
    this.setState({swtchBg: ''})
    this.setState({fontColor: 'font-main'})
    this.setState({inputBg: ''})
  }

  onColorChangeLight(){
    this.setState({mainBgColor: 'light-bg'});
    this.setState({color: 'light-key-bg'});
    this.setState({keypadBg: 'keypad-bg-light'})
    this.setState({swtchColor: 'switch-slider-light'})
    this.setState({swtchBg: 'switch-theme-light'})
    this.setState({fontColor: 'font-light'})
    this.setState({inputBg: 'input-space-light'})
  }

  onColorChangePurple(){
    this.setState({mainBgColor: 'purple-bg'})
    this.setState({color: 'purple-key-bg'});
    this.setState({keypadBg: 'keypad-bg-purple'})
    this.setState({swtchColor: 'switch-slider-purple'})
    this.setState({swtchBg: 'switch-theme-purple'})
    this.setState({fontColor: 'font-purple'})
    this.setState({inputBg: 'input-space-purple'})
  }

  // calculations

  typeNine = () => {
    this.setState({content: this.state.content += "9"})
  }

  typeEight = () => {
    this.setState({content: this.state.content += "8"})
  }

  typeSeven = () => {
    this.setState({content: this.state.content += "7"})
  }

  typeSix = () => {
    this.setState({content: this.state.content += "6"})
  }

  typeFive = () => {
    this.setState({content: this.state.content += "5"})
  }

  typeFour = () => {
    this.setState({content: this.state.content += "4"})
  }

  typeThree = () => {
    this.setState({content: this.state.content += "3"})
  }

  typeTwo = () => {
    this.setState({content: this.state.content += "2"})
  }

  typeOne = () => {
    this.setState({content: this.state.content += "1"})
  }

  typeZero = () => {
    this.setState({content: this.state.content += "0"})
  }

  typeDot = () => {
    this.setState({content: this.state.content += "."})
  }

  typeReset = () => {
    this.setState({content: ""})
    this.setState({calcResult: ''})
  }

  typeDel = () => {
    this.setState({content: this.state.content.slice(0, -1)})
  }

  checkForFirstValue(){
    if(this.state.fValue == 0){
      this.setState({fValue: this.state.fValue = parseFloat(this.state.content)})
    }
  }

  checkForPlus(){
    if(this.state.checkPlus){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content)})
      this.setState({fValue: this.state.fValue = this.state.fValue + this.state.sValue})
      this.setState({checkPlus: false})
    } 
  }

  checkForMinus(){
    if(this.state.checkMinus){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content)})
      this.setState({fValue: this.state.fValue = this.state.fValue - this.state.sValue})
      this.setState({checkMinus: false})
    }
  }

  checkForTimes(){
    if(this.state.checkTimes){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content)})
      this.setState({fValue: this.state.fValue = this.state.fValue * this.state.sValue})
      this.setState({checkTimes: false})
    } 
  }

  checkForDivision(){
    if(this.state.checkDivision){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content)})
      this.setState({fValue: this.state.fValue = this.state.fValue / this.state.sValue})
      this.setState({checkDivision: false})
    }
  }

  typePlus = () => {
    this.checkForFirstValue();

    this.checkForMinus();
    this.checkForTimes(); 
    this.checkForDivision();

    this.setState({checkPlus: true})
    this.setState({content: ''})
  }

  typeMinus = () => {
    this.checkForFirstValue();

    this.checkForPlus(); 
    this.checkForTimes(); 
    this.checkForDivision();


    this.setState({checkMinus: true})
    this.setState({content: ''})
  }

  typeTimes = () => {
    this.checkForFirstValue();

    this.checkForPlus();  
    this.checkForMinus();
    this.checkForDivision();

    this.setState({checkTimes: true})
    this.setState({content: ''})
  }

  typeDivision = () => {
    this.checkForFirstValue();

    this.checkForPlus(); 
    this.checkForMinus();
    this.checkForTimes();

    this.setState({checkDivision: true})
    this.setState({content: ''})
  }

  typeEqual = () => {
    this.setState({sValue: this.state.sValue = parseFloat(this.state.content)})
    if(this.state.checkPlus) this.setState({calcResult: this.state.calcResult = this.state.fValue + this.state.sValue})
    if(this.state.checkMinus) this.setState({calcResult: this.state.calcResult = this.state.fValue - this.state.sValue})
    if(this.state.checkTimes) this.setState({calcResult: this.state.calcResult = this.state.fValue * this.state.sValue})
    if(this.state.checkDivision) this.setState({calcResult: this.state.calcResult = this.state.fValue / this.state.sValue})
    this.setState({content: this.state.content = String(this.state.calcResult)})
    this.setState({checkPlus: false})
    this.setState({checkMinus: false})
    this.setState({checkTimes: false})
    this.setState({checkDivision: false})
    this.setState({fValue: 0})
    this.setState({sValue: 0})
  }

  render() {
    return(
      <body className={this.state.mainBgColor}>
        <div>
          <Theme 
          bgChangeM={this.onColorChangeMain}
          bgChangeL={this.onColorChangeLight}
          bgChangeP={this.onColorChangePurple}
          swtchColor={this.state.swtchColor}
          swtchBgColor={this.state.swtchBg}
          fontColor={this.state.fontColor}
          />
          <InputSpace 
          inptBgColor={this.state.inputBg}
          numContent={this.state.content}
          />
          <Keys 
          Color={this.state.color}
          KeyPad={this.state.keypadBg}
          TypeOne={this.typeOne}
          TypeTwo={this.typeTwo}
          TypeThree={this.typeThree}
          TypeFour={this.typeFour}
          TypeFive={this.typeFive}
          TypeSix={this.typeSix}
          TypeSeven={this.typeSeven}
          TypeEight={this.typeEight}
          TypeNine={this.typeNine}
          TypeZero={this.typeZero}
          TypeDel={this.typeDel}
          TypeEqual={this.typeEqual}
          TypePlus={this.typePlus}
          TypeMinus={this.typeMinus}
          TypeTimes={this.typeTimes}
          TypeDivision={this.typeDivision}
          TypeReset={this.typeReset}
          TypeDot={this.typeDot}
          />
        </div>
      </body>
    )
  }
}

export default App;
