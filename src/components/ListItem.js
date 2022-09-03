import React, { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import ListItemChecked from "./ListItemChecked"
import ListItemUnchecked from "./ListItemUnchecked"

const ListItem = ({ task, index, handleDelete }) => {
  const [isFinished, setIsFinished] = useState(false)
  return (
    <article className="relative w-full bg-gray-800/50 rounded-md px-3 py-2 mb-4 text-white flex items-center ease-in-out">
      {isFinished ? (
        <ListItemChecked
          task={task}
          setIsFinished={setIsFinished}
          isFinished={isFinished}
        />
      ) : (
        <ListItemUnchecked
          task={task}
          setIsFinished={setIsFinished}
          isFinished={isFinished}
        />
      )}

      <AiFillDelete
        className="absolute right-3 text-xl cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => handleDelete(index)}
      />
    </article>
  )
}

export default ListItem
