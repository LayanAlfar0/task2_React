import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [count,setCount]=useState(0);
  const name='Layan Alfar';
  const increaseCounter= () =>{
    setCount(count+1);
  }
  return (
    <>
      <button onClick={increaseCounter}><p>{name}</p>{count}</button>
    </>
  )
}

export default App
