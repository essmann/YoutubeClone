import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
import { Form } from "./components/Comp.jsx"


export const Context = React.createContext(null) 

function App() {
  const [theme, setTheme] = useState(false);
  console.log(Context);


  return (
   <Context.Provider value={theme}>
     <div>
      <Form/>
     </div>
    </Context.Provider>
  )
}

export default App
