import { useEffect } from "react";
import { MdAccessTime } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todosSelector } from "../../../../redux/selectors";
import { todoEdit } from "../../todoSlice";
import Check from "../check";
import Start from "../star";
import "./style.scss";
const Table = () => {
  const todos = useSelector(todosSelector) || [];
  const dispath = useDispatch();
  const navigate = useNavigate();
  const onEditTodoClick = (todo) => {
    navigate(`/todos/id/${todo.id}`);
    dispath(todoEdit(todo));
  };

  return (
    <div className="table">
      <ul className="table__list">
        {todos.map((todo) => {
          return (
            <li className="table__item" key={todo?.id}>
              <Check status={todo.completed} editTodo={todo} />
              <div className="text" onClick={() => onEditTodoClick(todo)}>
                <p className="text-title">{todo?.name}</p>
                <p className="text-desc">
                  <MdAccessTime className="time" />
                  {((time) => {
                    const index = time.indexOf("T");
                    const lastIndex = time.indexOf(".");
                    return (
                      time.slice(index + 1, lastIndex) +
                      " " +
                      time.slice(0, index)
                    );
                  })(todo.update_at)}
                </p>
              </div>
              <Start status={todo?.priority} todoEdit={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Table;
