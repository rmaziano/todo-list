import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoIosMore as MoreIcon, IoMdClose as CloseIcon } from 'react-icons/io'
import TodoMenu from './TodoMenu'

const TodoItem = ({
  todo,
  handleSort,
  ind,
  editTodo,
  deleteTodo,
  completeTodo,
  handleEditTodo,
  dragItem,
  dragOverItem,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((current) => !current)
  }

  return (
    <motion.div
      className='relative min-h-[55px] flex border-b border-light-gray cursor-move'
      draggable
      onDragStart={(e) => (dragItem.current = ind)}
      onDragEnter={(e) => (dragOverItem.current = ind)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`todoItem ${isOpen ? 'translate-x-[-160px]' : ''}`}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#ccc' : '#333',
        }}
      >
        <span className='flex-[1] text-ellipsis '>{todo.text}</span>
        <div
          onClick={toggleMenu}
          className='w-[30px] h-[30px] bg-white rounded-full shadow-s1 flex items-center justify-center cursor-pointer '
        >
          {isOpen ? <CloseIcon /> : <MoreIcon />}
        </div>
      </div>
      {isOpen ? (
        <TodoMenu
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          closeMenu={toggleMenu}
          handleEditTodo={handleEditTodo}
        />
      ) : null}
    </motion.div>
  )
}

export default TodoItem
