import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as Sentry from "@sentry/react";


function App() {
  const [count, setCount] = useState(0)

  return (
   <button type='button' onClick={()=> {throw Error('Oops, something has gone wrong')} }>
     Do not click on this button
   </button>
  )
}

export default Sentry.withProfiler(App);
