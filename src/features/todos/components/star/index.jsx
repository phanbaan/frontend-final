import { MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import IMAGES from "../../../../assets/images";
import { updatePriority, updateTodo } from "../../todoSlice";

import "./style.scss";

const Start = ({ status, todoEdit }) => {
  const dispath = useDispatch();
  function handleClick() {
    const todo = {};
    todo.id = todoEdit.id;
    todo.userId = todoEdit.userId;
    todo.completed = todoEdit.completed;
    todo.priority = !todoEdit.priority;
    todo.name = todoEdit.name;
    dispath(updatePriority(todo));
  }
  return (
    <div className="star" onClick={handleClick}>
      {status ? (
        <MdStarRate className="star-icon" />
      ) : (
        <img src={IMAGES.star} alt="" className="star-img" />
      )}
    </div>
  );
};

export default Start;
