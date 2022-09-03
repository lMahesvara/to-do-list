import React from "react"
import { ImCheckboxUnchecked } from "react-icons/im"
const ListItemUnchecked = ({ task, setIsFinished, isFinished }) => {
  return (
    <>
      <p className="overflow-x-auto scrollbar-hide w-4/5 ">{task}</p>
      <ImCheckboxUnchecked
        className="absolute right-10 cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => setIsFinished(!isFinished)}
      />
    </>
  )
}

export default ListItemUnchecked
