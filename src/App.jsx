import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './components/contacto/contacto-form/ContactoForm'
import ContactoForm from './components/contacto/contacto-form/ContactoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <ContactoForm/>


    </>
  )
}

export default App
