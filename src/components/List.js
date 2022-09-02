import React, { useState } from "react"
import ListItem from "./ListItem"
import TaskForm from "./TaskForm"

const List = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === "") return

    setTasks([...tasks, task])
    setTask("")
    e.target.reset()
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <main className="  max-w-md mx-auto mt-10 bg-gray-400/30 p-6 rounded-md">
      <TaskForm handleSubmit={handleSubmit} setTask={setTask} />
      <section>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            task={task}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default List
