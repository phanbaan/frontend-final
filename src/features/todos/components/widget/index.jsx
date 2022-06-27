import { useState } from "react";
import {
  MdCalendarToday,
  MdDeleteOutline,
  MdOutlineAttachFile,
  MdOutlineLogout,
  MdOutlineNotifications,
  MdOutlineWbSunny,
  MdRepeat,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { todoEditSelector, todoSelector } from "../../../../redux/selectors";
import { removeTodo, updateTodo } from "../../todoSlice";
import Check from "../check";
import Start from "../star";
import "./style.scss";

const Widget = () => {
  const dispath = useDispatch();

  const todoEdit = useSelector(todoEditSelector);
  const { id, name, completed, priority, userId, created_at } = todoEdit;
  const [completedEdit, setCompletedEdit] = useState(completed);
  const [priorityEdit, setPriorityEdit] = useState(priority);
  const [nameEdit, setNameEdit] = useState(name);
  const todos = useSelector(todoSelector);
  function handleRemove() {
    const isId = todos.find((todo) => todo.id === id);
    if (isId) {
      const result = window.confirm(
        `Bạn có muốn xóa công việc ${name} không ?`
      );
      if (result) {
        const todo = {};
        todo.id = id;
        todo.userId = userId;
        dispath(removeTodo(todo));
        // dispath(decrementCouter());
      }
    }
  }
  function handleOnChange(e) {
    setNameEdit(e.target.value);
  }
  function handleEditTodo(e) {
    e.preventDefault();
    const todoEdit = {};
    todoEdit.id = id;
    todoEdit.userId = userId;
    todoEdit.name = nameEdit;
    dispath(updateTodo(todoEdit));
    setNameEdit(name);
  }
  return (
    <div className="widget">
      <div className="widget__content">
        <div className="content-header" key={id}>
          <div className="check-icon">
            <Check status={completed} editTodo={todoEdit} />
          </div>
          <input
            type="text"
            defaultValue={name}
            name="nameEdit"
            className="input-header"
            onChange={handleOnChange}
            onBlur={handleEditTodo}
          />
          <div className="important-icon">
            <Start status={priority} todoEdit={todoEdit} />
          </div>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineWbSunny />
            <span>Thêm vào ngày của tôi</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineNotifications />
            <span>Nhắc tôi</span>
          </button>
          <button>
            <MdCalendarToday />
            <span>Thêm ngày đến hạn</span>
          </button>
          <button>
            <MdRepeat />
            <span>lặp lại</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineWbSunny />
            <span>Chọn danh mục</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineAttachFile />
            <input type="file" name="Thêm tệp" id="" />
          </button>
        </div>
      </div>
      <div className="widget__footer">
        <MdOutlineLogout className="footer-icon" />
        <span>
          Đã tạo ngày
          {((time) => {
            const index = time?.indexOf("T");
            return " " + time?.slice(0, index);
          })(created_at)}
        </span>
        <MdDeleteOutline className="footer-icon" onClick={handleRemove} />
      </div>
    </div>
  );
};

export default Widget;
