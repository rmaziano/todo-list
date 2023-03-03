import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { IoIosAdd as AddIcon } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'

const variants = {
  open: {
    right: '50%',
    width: 500,
    height: 70,
    opacity: 1,
    transition: {
      right: {
        ease: 'easeInOut',
        duration: 0.5,
      },
      width: {
        duration: 0.3,
        delay: 0.5,
      },
      height: {
        duration: 0.3,
        delay: 0.5,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  close: {
    right: '0%',
    width: 30,
    height: 30,
    opacity: 0,
    transition: {
      right: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.3,
      },
      width: {
        duration: 0.3,
        delay: 0,
      },
      height: {
        duration: 0.3,
        delay: 0,
      },
      opacity: {
        duration: 0.1,
        delay: 0.7,
      },
    },
  },
}

const TodoInput = ({
  input,
  setInput,
  editTodo,
  setEditTodo,
  todos,
  setTodos,
  isOpen,
  setIsOpen,
}) => {
  const updateTodo = (id, text, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, text, completed } : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  }
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([
        {
          id: uuidv4(),
          text: input,
          completed: false,
        },
        ...todos,
      ])
      setInput('')
      setIsOpen(false)
    } else {
      updateTodo(editTodo.id, input, editTodo.completed)
    }
  }

  return (
    <div className='wrapper-div'>
      <motion.form
        initial={false}
        animate={isOpen ? 'open' : 'close'}
        variants={variants}
        className={`absolute top-[50%] right-0 -translate-y-1/2 translate-x-2/4 w-[30px] h-[30px] bg-white shadow-s1 rounded-[10px] overflow-hidden opacity-0 ${
          isOpen ? 'open' : ''
        }`}
        onSubmit={onFormSubmit}
      >
        <input
          className='w-full h-full text-[1rem] border-0 outline-0 px-4 max-w-[50ch]'
          type='text'
          placeholder='Add new todo'
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </motion.form>
      <button
        className='addButton'
        type='submit'
        onClick={(e) => (isOpen ? onFormSubmit(e) : setIsOpen(true))}
      >
        {isOpen ? 'Add' : <AddIcon size={30} />}
      </button>
    </div>
  )
}

export default TodoInput
