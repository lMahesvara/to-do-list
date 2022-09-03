import React, { useState } from "react"
import ListItem from "./ListItem"
import TaskForm from "./TaskForm"

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || []
const initialTask = {
  task: "",
  isFinished: false,
}
const List = () => {
  const [task, setTask] = useState(initialTask)
  const [tasks, setTasks] = useState(initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.task === "") return

    setTasks([...tasks, task])
    setTask(initialTask)
    e.target.reset()
    //localstorage
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]))
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
    //localstorage
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const handleTask = (task, index) => {
    const newTasks = [...tasks]
    newTasks[index] = task
    setTasks(newTasks)
    //localstorage
    localStorage.setItem("tasks", JSON.stringify(newTasks))
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
            handleTask={handleTask}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default List
