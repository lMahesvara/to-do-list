import React from "react"
import { ImCheckboxChecked } from "react-icons/im"
const ListItemChecked = ({ task, setIsFinished, isFinished }) => {
  return (
    <>
      <p className="overflow-x-auto scrollbar-hide w-4/5 line-through text-gray-400">
        {task}
      </p>
      <ImCheckboxChecked
        className="absolute right-10  cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => setIsFinished(!isFinished)}
      />
    </>
  )
}

export default ListItemChecked
