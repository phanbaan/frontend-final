import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateCompleted } from "../../todoSlice";
import "./style.scss";

const Check = ({ status, editTodo }) => {
  const dispatch = useDispatch();
  function handleCheck() {
    const todo = {};
    todo.id = editTodo.id;
    todo.name = editTodo.name;
    todo.priority = editTodo.priority;
    todo.completed = !editTodo.completed;
    todo.userId = editTodo.userId;
    dispatch(updateCompleted(todo));
  }
  return (
    <div className="check" onClick={handleCheck}>
      {status && <MdDone className="check--icon" />}
    </div>
  );
};

export default Check;
