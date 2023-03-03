import { useEffect, useState } from 'react'

export default function useLocalStorage(params) {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || initialValue
  )

  // SET TODOS
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return [todos, setTodos]
}
