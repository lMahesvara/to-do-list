import React from "react"
import { ImCheckboxChecked } from "react-icons/im"
const ListItemChecked = ({ task, handleTask, index }) => {
  return (
    <>
      <p className="overflow-x-auto scrollbar-hide w-4/5 line-through text-gray-400">
        {task.task}
      </p>
      <ImCheckboxChecked
        className="absolute right-10  cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() =>
          handleTask({ task: task.task, isFinished: false }, index)
        }
      />
    </>
  )
}

export default ListItemChecked
