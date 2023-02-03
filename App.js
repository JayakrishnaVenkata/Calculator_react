import React from 'react';
import {useState}  from "react";
import './index.css';

const App = () => {
  const [value,setValue] = useState("");
  const [ans,setAns] = useState(0);
  const HandleClick = (e) =>{
    setValue(e.target.value);
  }
  return (
    <>
        <div className="container">
        <div className="calculator">
            <div className="displayCont">
            <div className="display">
                <p className="totalNumber" id="totalNumber">{value}</p>
                <h1 id="currentNumber" className="currentNumber">{ans}</h1>
                <p className="tempResult" id="tempResult">{value[value.length-1]}</p>
            </div>
            </div>
            <div className="numberCont">
            <div className="symbol clear"  data-value="C" onClick={()=> setValue(value.substring(0,value.length-1))} id="clear">C</div>
            <div className="symbol clearAll" data-value="CA" onClick={()=>{setValue("");setAns(0)} } id="clearAll">CA</div>
            <div className="operator modulus" data-value="%" onClick={()=>{setValue(value+"%");HandleClick(eval(value))}}>%</div>
            <div className="operator divide" data-value="/" onClick={()=>{setValue(value+"/");HandleClick(eval(value))}}>&#247;</div>
            <div className="number number7" data-value="7" onClick={()=>{setValue(value+"7");HandleClick(eval(value))}}>7</div>
            <div className="number number8" data-value="8" onClick={()=>{setValue(value+"8");HandleClick(eval(value))}}>8</div>
            <div className="number number9" data-value="9" onClick={()=>{setValue(value+"9");HandleClick(eval(value))}}>9</div>
            <div className="operator multiply" data-value="*" onClick={()=>{setValue(value+"*");HandleClick(eval(value))}}>x</div>
            <div className="number number4" data-value="4" onClick={()=>{setValue(value+"4");HandleClick(eval(value))}}>4</div>
            <div className="number number5" data-value="5" onClick={()=>{setValue(value+"5");HandleClick(eval(value))}}>5</div>
            <div className="number number6" data-value="6" onClick={()=>{setValue(value+"6");HandleClick(eval(value))}}>6</div>
            <div className="operator minus" data-value="-" onClick={()=>{setValue(value+"-");HandleClick(eval(value))}}>-</div>
            <div className="number number1" data-value="1" onClick={()=>{setValue(value+"1");HandleClick(eval(value))}}>1</div>
            <div className="number number2" data-value="2" onClick={()=>{setValue(value+"2");HandleClick(eval(value))}}>2</div>
            <div className="number number3" data-value="3" onClick={()=>{setValue(value+"3");HandleClick(eval(value))}}>3</div>
            <div className="operator add" data-value="+" onClick={()=>{setValue(value+"+");HandleClick(eval(value))}}>+</div>
            <div className="number number0" data-value="0" onClick={()=>{setValue(value+"0");HandleClick(eval(value))}}>0</div>
            <div className="number dot" data-value="." onClick={()=>{setValue(value+".");HandleClick(eval(value))}}>.</div>
            <div className="symbol equalTo" data-value="=" id="equalTo" onClick={()=>{setValue("");HandleClick(setAns(eval(value)))}}>=</div>
            </div>
        </div>
        </div>
    </>
  );
}

export default App;