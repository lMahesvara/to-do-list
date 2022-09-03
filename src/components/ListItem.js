import { AiFillDelete } from "react-icons/ai"
import ListItemChecked from "./ListItemChecked"
import ListItemUnchecked from "./ListItemUnchecked"

const ListItem = ({ task, index, handleDelete, handleTask }) => {
  return (
    <article className="relative w-full bg-gray-800/50 rounded-md px-3 py-2 mb-4 text-white flex items-center ease-in-out">
      {task.isFinished ? (
        <ListItemChecked task={task} index={index} handleTask={handleTask} />
      ) : (
        <ListItemUnchecked task={task} index={index} handleTask={handleTask} />
      )}

      <AiFillDelete
        className="absolute right-3 text-xl cursor-pointer hover:scale-125 transform transition duration-300"
        onClick={() => handleDelete(index)}
      />
    </article>
  )
}

export default ListItem
