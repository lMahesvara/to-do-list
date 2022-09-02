import React from "react"

const TaskForm = ({ setTask, handleSubmit }) => {
  return (
    <section className="mb-4">
      <form className=" max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className=" bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="task"
            placeholder="Add a new task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm
