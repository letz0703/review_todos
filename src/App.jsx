import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import ListTodos from "./components/list_todos/list_todos"

function App () {
  const [todos, setTodos] = useState( [
    { id: 1, task: 'go' }, { id: 2, task: 'work' }
  ] )

  const [inputTask, setInputTask] = useState( '' )
  const handleInputChange = ( e ) => {
    setInputTask( e.target.value )
  }
  const handleClick_add = ( e ) => {
    e.preventDefault()
    setTodos( [...todos, { id: 3, task: inputTask }] )
    setInputTask( '' )
  }

  return (
    <div className='App'>
      <ListTodos todos={todos} />
      <input type="text" value={inputTask} onChange={handleInputChange} />
      <button className="btn_add" onClick={handleClick_add}>Add</button>
    </div>
  )
}

export default App
