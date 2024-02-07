import React , { useState } from 'react'
import './App.css'


const App = () => {
  const [btnClicked, setBtnClicked] = useState('');

  const handleClick = (event) => {
    console.log(event.target.value)
    let strBtn = event.target.value;
    let newString = btnClicked + strBtn;

    let symbols = '+-*/.';
    for (let i=0;i<newString.length; i++){
      if(
        symbols.includes(newString[i]) && 
      symbols.includes(newString[i + 1])){
        newString = newString.slice(0, -1);
        alert('Only one symbol can be present');
      }
    }
    let exampleNum = newString;
    let numString = '123456789';
    for(let i=0; i<exampleNum.length; i++){
      if( 
        !symbols.includes(exampleNum[i]) &&  
        !symbols.includes(exampleNum[i+1]))
        {

        if(
          (exampleNum[i]=='0' && numString.includes(exampleNum[i+1])) || 
          exampleNum[i+1] == '0'){
           let add = '';
           let flag = false;
           for(let j=0;j<exampleNum.length;j++){
               if(j !==i){
              add +=exampleNum[j];
              flag =true;
          }
        }

        if(flag){
          exampleNum = add;
          break;

        }
      }
    }
  }
  setBtnClicked(exampleNum);
}

const clickDelete = () =>{
  let newStr = btnClicked.slice(0, -1);
  setBtnClicked(newStr);
}
  

  return (
    <div className='container'> 
      <div className='display'>{btnClicked}</div>
      <div className='button' >
        <button className='buttons' value="ac" onClick={() => setBtnClicked(' ')}>AC</button>
        <button className='buttons' value="Del" onClick={() => clickDelete()}>DEL</button>
        <button className='buttons' value="+" onClick={handleClick}>+</button>
        <button className='buttons' value="1" onClick={handleClick}>1</button>
        <button className='buttons' value="2" onClick={handleClick}>2</button>
        <button className='buttons' value="3" onClick={handleClick}>3</button>
        <button className='buttons' value="4" onClick={handleClick}>4</button>
        <button className='buttons' value="5" onClick={handleClick}>5</button>
        <button className='buttons' value="6" onClick={handleClick}>6</button>
        <button className='buttons' value="7" onClick={handleClick}>7</button>
        <button className='buttons' value="8" onClick={handleClick}>8</button>
        <button className='buttons' value="9" onClick={handleClick}>9</button>
        <button className='buttons' value="0" onClick={handleClick}>0</button>
        <button className='buttons' value="-" onClick={handleClick}>-</button>
        <button className='buttons' value="*" onClick={handleClick}>*</button>
        <button className='buttons' value="/" onClick={handleClick}>/</button>
        <button className='buttons' value="." onClick={handleClick}>.</button>
        <button className='buttons' value="=" onClick={() => {
            let evalAns = eval(btnClicked).toString();
            console.log(evalAns);
            if (evalAns == 'NaN') {
              setBtnClicked('Not a Number');
            } else {
              setBtnClicked(evalAns);
            }
          }}>=</button>
      </div>
    </div>
  )
}

export default App

