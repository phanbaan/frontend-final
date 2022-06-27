import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../../redux/selectors";
import { createTodo } from "../../todoSlice";
// import { incrementCouter } from "../../filterSlice";

import Check from "../check";
import "./style.scss";
const Add = () => {
  const user = useSelector(userSelector);
  const { id } = user;

  const [isIcon, setIsIcon] = useState(true);
  const [name, setName] = useState("");
  const dispath = useDispatch();
  function handleOnKeyup(e) {
    if (e.keyCode === 13) {
      const todo = {};
      todo.name = name;
      todo.userId = id;
      dispath(createTodo(todo));
      // dispath(incrementCouter());
      setName("");
    }
  }

  return (
    <div className="add">
      <div action="" className="add-form">
        {isIcon ? <IoAddSharp className="add-icon" /> : <Check />}
        <input
          type="text"
          value={name}
          placeholder="Thêm tác vụ"
          onClick={() => setIsIcon(!isIcon)}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleOnKeyup}
          onBlur={() => setIsIcon(!isIcon)}
        />
      </div>
    </div>
  );
};

export default Add;
