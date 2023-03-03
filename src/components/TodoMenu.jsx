import React from 'react'
import {
  IoMdCheckmark as CheckIcon,
  IoMdCreate as EditIcon,
  IoMdTrash as DeleteIcon,
} from 'react-icons/io'

const TodoMenu = ({
  closeMenu,
  todo,
  deleteTodo,
  handleEditTodo,
  completeTodo,
}) => {
  const handleEditTodos = () => {
    handleEditTodo(todo)
    setTimeout(() => {
      closeMenu()
    }, 500)
  }

  const handleCompleteTodo = () => {
    completeTodo(todo.id)
    setTimeout(() => {
      closeMenu()
    }, 300)
  }
  return (
    <div
      className='absolute right-0 top-0 w-[160px]
  h-full flex items-center shadow-s2 justify-center gap-5 bg-white'
    >
      <div className='btn deleteBtn' onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </div>
      <div className='btn editBtn' onClick={() => handleEditTodos(todo)}>
        <EditIcon />
      </div>
      <div
        className={`btn completeBtn ${todo.completed ? 'completed' : ''}`}
        onClick={handleCompleteTodo}
      >
        <CheckIcon />
      </div>
    </div>
  )
}

export default TodoMenu
