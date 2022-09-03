import React, { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im"

const ListItem = ({ task, index, handleDelete }) => {
  const [isFinished, setIsFinished] = useState(false)
  return (
    <article className="relative w-full bg-gray-800/50 rounded-md px-3 py-2 mb-4 text-white flex items-center ease-in-out">
      {isFinished ? (
        <>
          <p className="overflow-x-auto scrollbar-hide w-4/5 line-through text-gray-400">
            {task}
          </p>
          <ImCheckboxChecked
            className="absolute right-10  cursor-pointer hover:scale-125 transform transition duration-300"
            onClick={() => setIsFinished(!isFinished)}
          />
        </>
      ) : (
        <>
          <p className="overflow-x-auto scrollbar-hide w-4/5 ">{task}</p>
          <ImCheckboxUnchecked
            className="absolute right-10 cursor-pointer hover:scale-125 transform transition duration-300"
            onClick={() => setIsFinished(!isFinished)}
          />
        </>
      )}

      <AiFillDelete
        className="absolute right-3 text-xl cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => handleDelete(index)}
      />
    </article>
  )
}

export default ListItem
