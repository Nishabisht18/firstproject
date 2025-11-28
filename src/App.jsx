import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainers from "./components/ButtonContainers";
import Display from "./components/Display";
function App(){
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(btnText) => {
    if(btnText==='C'){
      setCalVal("");
    }
    else if(btnText ==='='){
      const result=eval(calVal);
      setCalVal(result);

    }
    else{
      const newdisplayValue=calVal+btnText;
      setCalVal(newdisplayValue);
    }
  };
  return(  
    <div className={styles.calculator}> 
      <Display displayValue={calVal}></Display>    
      <ButtonContainers onButtonClick={onButtonClick}></ButtonContainers>
    </div>
  )
} 
export default App;
