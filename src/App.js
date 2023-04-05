import React from "react";
import {useState} from 'react'

export default function App() {
  
 
  const[count,setCount]=useState(0)

 
 
  
  function handleClick(){
   
   
      setCount(count+1)
    
    
  }
  return (
    <div> {(count%2==0)?
      <h1>{count}</h1>:<h1></h1>}
  <button onClick={handleClick}>IncrementEven</button>
   
    </div>
  );
}
