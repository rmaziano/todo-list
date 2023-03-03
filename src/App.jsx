import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [todos, setTodos] = useLocalStorage([])
  const [input, setInput] = useState('')
  const [editTodo, setEditTodo] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // EDIT TODO

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((curr) => curr.id === id)
    setEditTodo(findTodo)
    setIsOpen(true)
  }

  // DELETE TODO

  const deleteTodo = (todoId) => {
    setTodos((curr) => curr.filter((todo) => todo.id !== todoId))
  }

  //COMPLETE TODO

  const completeTodo = (todoId) => {
    setTodos((curr) =>
      curr.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: todo.completed ? false : true }
          : todo
      )
    )
  }

  return (
    <div className='container-div font-sans'>
      <h1 className='text-5xl text-black font-bold mb-8 z-1'>TODO APP</h1>
      <h1 className='text-2xl text-black font-bold mt-8 z-1'>
        Drag and Drop to reorder list
      </h1>
      {/* TODO LIST */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        handleEditTodo={handleEditTodo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {/* TODO INPUT */}
      <TodoInput
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default App
