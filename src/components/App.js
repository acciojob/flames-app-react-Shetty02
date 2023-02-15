import React, {Component, useState } from "react";
import '../styles/App.css'

function App() {
  const[str1,setStr1] = useState("");
  const[str2,setStr2] = useState("");
  const[isError, setIsError] = useState(false);
  const[relation,setRealtion] = useState("");
  
  const handleStr1 = (e) =>{
      setStr1(e.target.value);
  }

  const handleStr2 = (e) =>{
      setStr2(e.target.value);
  }

  const relationList = {
    0:"Siblings",
    1:"Friends",
    2:"Love",
    3:"Affection",
    4:"Marriage",
    5:"Enemy"
  }
  const handelCalculate = () =>{
    if(!str1 || !str2) setIsError(true);
    else{
      setIsError(false)
      let sum = 0;
      for(let i = 0; i < str1.length; i++){
        if(str2.includes(str1[i])){
          sum = str1.length + str2.length - 2;
          break;
        }
      }
      let res = sum % 6;
      setRealtion(relationList[res]);
    }
    }

  const handleClear = () =>{
    setStr1("");
    setStr2("");
    setRealtion("");
  }

  let errorMsg = "Please Enter valid input";
  return (
    <div id="main">
    <div>
      <h1>Flames</h1>
      First Name:
      <input type="text" value={str1} data-testid="input1" onChange = {handleStr1}/>
      <br/>
      Second Name:
      <input type="text" value={str2} data-testid="input2" onChange = {handleStr2}/>
      <br/>
      <button  data-testid="calculate_relationship" onClick={handelCalculate}>Calculate RelationShip</button>
      <button data-testid="clear" onClick={handleClear}>Clear</button>
      <h3 data-testid="answer">Result: {isError ? errorMsg: relation}</h3>
    </div>
    </div>
  );
}
export default App;