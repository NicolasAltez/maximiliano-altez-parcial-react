import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormStudents from './components/FormStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormStudents />
      <Card />
    </div>
  );
}

export default App
