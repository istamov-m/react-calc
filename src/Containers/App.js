import { Component } from 'react';
import Theme from '../Components/Theme';
import InputSpace from '../Components/InputSpace';
import Keys from '../Components/Keys';
import Key from '../Components/Key';
import './App.css';

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

  }

  // color change

  onColorChangeMain(){
    this.setState({
      mainBgColor: 'main-bg', 
      color: '', 
      keypadBg: 'keypad-bg', 
      swtchColor: '', 
      fontColor: 'font-main', 
      inputBg: ''
    });
  }

  onColorChangeLight(){
    this.setState({mainBgColor: 'light-bg', 
      color: 'light-key-bg', 
      keypadBg: 'keypad-bg-light', 
      swtchColor: 'switch-slider-light', 
      swtchBg: 'switch-theme-light',
      fontColor: 'font-light', 
      inputBg: 'input-space-light'});
  }

  onColorChangePurple(){
    this.setState({mainBgColor: 'purple-bg', 
      color: 'purple-key-bg', 
      keypadBg: 'keypad-bg-purple', 
      swtchColor: 'switch-slider-purple', 
      swtchBg: 'switch-theme-purple', 
      fontColor: 'font-purple', 
      inputBg: 'input-space-purple'});
  }

  // calculations

  typeNine = () => {
    this.setState({content: this.state.content += "9"});
  }

  typeEight = () => {
    this.setState({content: this.state.content += "8"});
  }

  typeSeven = () => {
    this.setState({content: this.state.content += "7"});
  }

  typeSix = () => {
    this.setState({content: this.state.content += "6"});
  }

  typeFive = () => {
    this.setState({content: this.state.content += "5"});
  }

  typeFour = () => {
    this.setState({content: this.state.content += "4"});
  }

  typeThree = () => {
    this.setState({content: this.state.content += "3"});
  }

  typeTwo = () => {
    this.setState({content: this.state.content += "2"});
  }

  typeOne = () => {
    this.setState({content: this.state.content += "1"});
  }

  typeZero = () => {
    this.setState({content: this.state.content += "0"});
  }

  typeDot = () => {
    this.setState({content: this.state.content += "."});
  }

  typeReset = () => {
    this.setState({
      content: "", 
      calcResult: ''
    });
  }

  typeDel = () => {
    this.setState({content: this.state.content.slice(0, -1)});
  }

  checkForFirstValue(){
    if(this.state.fValue == 0){
      this.setState({fValue: this.state.fValue = parseFloat(this.state.content)});
    }
  }

  checkForPlus(){
    if(this.state.checkPlus){
      this.setState({
        sValue: this.state.sValue = parseFloat(this.state.content), 
        fValue: this.state.fValue = this.state.fValue + this.state.sValue, 
        checkPlus: false
      });
    } 
  }

  checkForMinus(){
    if(this.state.checkMinus){
      this.setState({
        sValue: this.state.sValue = parseFloat(this.state.content), 
        fValue: this.state.fValue = this.state.fValue - this.state.sValue, 
        checkMinus: false
      });
    }
  }

  checkForTimes(){
    if(this.state.checkTimes){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content), 
        fValue: this.state.fValue = this.state.fValue * this.state.sValue, 
        checkTimes: false
      });
    } 
  }

  checkForDivision(){
    if(this.state.checkDivision){
      this.setState({sValue: this.state.sValue = parseFloat(this.state.content), 
        fValue: this.state.fValue = this.state.fValue / this.state.sValue, 
        checkDivision: false
      });
    }
  }

  checkForOperations(){
    this.checkForPlus();
    this.checkForMinus();
    this.checkForTimes(); 
    this.checkForDivision();
  }

  typePlus = () => {
    this.checkForFirstValue();

    this.checkForOperations();

    this.setState({
      checkPlus: true, 
      content: ''
    })
  }

  typeMinus = () => {
    this.checkForFirstValue();

    this.checkForOperations();

    this.setState({
      checkMinus: true, 
      content: ''
    })
  }

  typeTimes = () => {
    this.checkForFirstValue();

    this.checkForOperations();

    this.setState({
      checkTimes: true, 
      content: ''
    });
  }

  typeDivision = () => {
    this.checkForFirstValue();

    this.checkForOperations();

    this.setState({
      checkDivision: true, 
      content: ''
    });
  }

  typeEqual = () => {
    this.setState({sValue: this.state.sValue = parseFloat(this.state.content)});

    if(this.state.checkPlus) this.setState({calcResult: this.state.calcResult = this.state.fValue + this.state.sValue});
    else if(this.state.checkMinus) this.setState({calcResult: this.state.calcResult = this.state.fValue - this.state.sValue});
    else if(this.state.checkTimes) this.setState({calcResult: this.state.calcResult = this.state.fValue * this.state.sValue});
    else if(this.state.checkDivision) this.setState({calcResult: this.state.calcResult = this.state.fValue / this.state.sValue});

    this.setState({
      content: this.state.content = String(this.state.calcResult),
      checkPlus: false, 
      checkMinus: false, 
      checkTimes: false, 
      checkDivision: false,
      fValue: 0, 
      sValue: 0
    });
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
