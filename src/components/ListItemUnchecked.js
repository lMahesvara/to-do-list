import React from "react"
import { ImCheckboxUnchecked } from "react-icons/im"
const ListItemUnchecked = ({ task, handleTask, index }) => {
  return (
    <>
      <p className="overflow-x-auto scrollbar-hide w-4/5 ">{task.task}</p>
      <ImCheckboxUnchecked
        className="absolute right-10 cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => handleTask({ task: task.task, isFinished: true }, index)}
      />
    </>
  )
}

export default ListItemUnchecked
