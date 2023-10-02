"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navigation from '@/components/navigation'
import Button from "@/components/button"
import { useState, useEffect } from "react"

const todos = [
  { id: 1, description: "Auto putzen gehen" },
  { id: 2, description: "Hausaufgaben erledigen" },
  { id: 3, description: "Hausaufgaben erledigen" },
  { id: 4, description: "Einkaufen gehen" }
]

export default function Homepage() {
  const [myTodos, setMyTodos] = useState(todos)

  const [count, setCount] = useState(10)

  const handleAddTodo = () => {
    setMyTodos(
      [...myTodos, { id: myTodos.length + 1, description: "this is my test todo" }]
    )
  }

  const hanldeIncrement = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("my new todos", myTodos)
  }, [myTodos])

  return (
    <div>
      <main>
        <h1>Welcome to my homepage in Nextjs</h1>
        <br />
        {count}
        <br />
        <br />
        <button onClick={hanldeIncrement}>Increment</button>
        <br />
        <p>Here is my next js app</p>
        <br />
        <ul>
        { myTodos.map(todo => {
          return (
            <li key={todo.id}>{todo.description}</li>
          )
        }) }
        </ul>
        <br />
        <button onClick={handleAddTodo}>Add todo</button>
        {/* 
        <Button 
        onClick={handleAddTodo}
        text={"Todo hinzufügen"} 
        />
        */}
      </main>
    </div>
    
  )
}
