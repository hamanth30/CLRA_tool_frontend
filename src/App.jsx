import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import ClientSubmission from './components/ClientSubmission.jsx'
import ClientTasks from './components/ClientTasks.jsx'
import Admin from './components/Admin.jsx'
import ClientRegisteration from './components/ClientRegisteration.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <Signup />
    // <Login/>
    //<Home />
   //<ClientSubmission/>
     <ClientTasks/>
    // <Admin />
    //<ClientRegisteration />
  )
}

export default App
