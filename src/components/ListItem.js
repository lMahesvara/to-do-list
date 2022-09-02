import React from "react"
import { AiFillDelete } from "react-icons/ai"

const ListItem = ({ task, index, handleDelete }) => {
  return (
    <article className="relative w-full bg-gray-700 rounded-md px-3 py-2 mb-4 text-white flex items-center">
      <p className="overflow-x-auto scrollbar-hide w-4/5">{task}</p>
      <AiFillDelete
        className="absolute right-3 text-xl cursor-pointer"
        onClick={() => handleDelete(index)}
      />
    </article>
  )
}

export default ListItem
