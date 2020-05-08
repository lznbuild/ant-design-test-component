import React,{ useState, useEffect } from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import './App.css';


// node.textContent  dom.innerText

function App() {
  const [arr, setArr] = useState(['1','2']);

  useEffect(()=> {
    const tuple = <T extends string[]>(...args: T) => args
    console.log(tuple('1','2'));
  },[])

  return (
    <div className="App">
    {
      arr.map((item,index)=> {
        return <div key={index}>{item}</div>
      })
    }
    <Button type="primary">Primary</Button>
    </div>
  );
}

export default App;
