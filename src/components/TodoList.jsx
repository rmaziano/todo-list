import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({
  todos,
  editTodo,
  deleteTodo,
  completeTodo,
  handleEditTodo,
  setTodos,
}) => {
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  //Const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _items = [...todos]
    //remove and save the dragged item content
    const draggedItemContent = _items.splice(dragItem.current, 1)[0]

    // Switch the position
    _items.splice(dragOverItem.current, 0, draggedItemContent)

    //Reset the position ref
    dragItem.current = null
    dragOverItem.current = null

    // Update the array
    setTodos(_items)
    console.log(_items)
  }

  return (
    <motion.div className='w-[500px] max-h-[80%] rounded-[10px] bg-white z-1 mt-12 mb-4 shadow-s1 overflow-y-auto'>
      <AnimatePresence>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            ind={index}
            todo={todo}
            handleSort={handleSort}
            dragItem={dragItem}
            dragOverItem={dragOverItem}
            setTodos={setTodos}
            handleEditTodo={handleEditTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default TodoList
