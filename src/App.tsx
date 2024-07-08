import { useState } from 'react'
import './App.css'

function App() {
  const [tab, setTab] = useState(0)
  const tabs = [<div>test</div>, <div>test2</div>, <div>test3</div>]

  return (
    <>
      <button onClick={() => setTab(0)}></button>
      <button onClick={() => setTab(1)}></button>
      <button onClick={() => setTab(2)}></button>
      {tabs[tab]}
    </>
  )
}

export default App
