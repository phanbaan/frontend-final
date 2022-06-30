import { useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoStarOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { MdOutlineMultipleStop } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  todoIsSidebar,
  todoSortByName,
  todoSortByPriority,
  todoSortByTime,
} from "../../todoSlice";
import "./style.scss";
import {
  isSidebarSelector,
  todoSelector,
  todoSortByNameSelector,
  todoSortByPrioritySelector,
  todoSortByTimeSelector,
} from "../../../../redux/selectors";

const Title = ({ title, color, filter, date }) => {
  const [isToggle, setIsToggle] = useState(false);
  const isByName = useSelector(todoSortByNameSelector);
  const isByTime = useSelector(todoSortByTimeSelector);
  const isByPriority = useSelector(todoSortByPrioritySelector);
  const todos = useSelector(todoSelector);
  const isSidebar = useSelector(isSidebarSelector);
  const dispath = useDispatch();

  function handleToggle() {
    setIsToggle(!isToggle);
  }
  function handleSortByPriority() {
    if (isByPriority) {
      let todoSort = [...todos].sort((a, b) => b.priority - a.priority);
      dispath(todoSortByPriority(todoSort));
    } else {
      let todoSort = [...todos].sort((a, b) => a.priority - b.priority);
      dispath(todoSortByPriority(todoSort));
    }
    setIsToggle(!isToggle);
  }
  function handleSortByTime() {
    if (isByTime) {
      let todoSort = [...todos].sort((a, b) =>
        b.update_at.localeCompare(a.update_at)
      );
      dispath(todoSortByTime(todoSort));
    } else {
      let todoSort = [...todos].sort((a, b) =>
        a.update_at.localeCompare(b.update_at)
      );
      dispath(todoSortByTime(todoSort));
    }
    setIsToggle(!isToggle);
  }
  function handleSortByName() {
    if (isByName) {
      let todoSort = [...todos].sort((a, b) => a.name.localeCompare(b.name));
      dispath(todoSortByName(todoSort));
    } else {
      let todoSort = [...todos].sort((a, b) => b.name.localeCompare(a.name));
      dispath(todoSortByName(todoSort));
    }
    setIsToggle(!isToggle);
  }
  function handleIsSidebar() {
    dispath(todoIsSidebar(!isSidebar));
  }
  return (
    <div className="title">
      <div className="left">
        {!isSidebar && (
          <div className="left-menu" onClick={handleIsSidebar}>
            <IoMenuOutline className="icon-header" />
          </div>
        )}
        <h3 className="text" style={{ color: color }}>
          {title}
        </h3>
        <p className="date">{date}</p>
      </div>
      {filter && (
        <div className="right">
          <div className="show">
            <div className="sort show-item" onClick={handleToggle}>
              <AiOutlineSortAscending />
              <span>Sắp xếp</span>
            </div>
            <div className="important  show-item">
              <BsLightbulb />
              <span>Đề xuất</span>
            </div>
          </div>
          {isToggle && (
            <div className="hidden">
              <p className="hidden-title">Sắp xếp theo</p>
              <div className="hidden-body">
                <ul className="sidebar__list">
                  <li className="sidebar__item" onClick={handleSortByPriority}>
                    {isByPriority ? (
                      <span to="/" className="sidebar__link">
                        <IoStarOutline className="sidebar-icon" />
                        <span>Tầm quan trọng</span>
                      </span>
                    ) : (
                      <span to="/" className="sidebar__link">
                        <IoStarOutline className="sidebar-icon" />
                        <span>Không quan trọng</span>
                      </span>
                    )}
                  </li>
                  <li className="sidebar__item">
                    <span to="/" className="sidebar__link">
                      <IoCalendarOutline className="sidebar-icon" />
                      <span>Ngày đến hạn</span>
                    </span>
                  </li>
                  <li className="sidebar__item" onClick={handleSortByName}>
                    {isByName ? (
                      <span to="/" className="sidebar__link">
                        <AiOutlineSortAscending className="sidebar-icon" />
                        <span>Sắp xếp từ A - Z</span>
                      </span>
                    ) : (
                      <span to="/" className="sidebar__link">
                        <MdOutlineMultipleStop className="sidebar-icon" />
                        <span>Sắp xếp từ Z - A</span>
                      </span>
                    )}
                  </li>
                  <li className="sidebar__item" onClick={handleSortByTime}>
                    {!isByTime ? (
                      <span to="/" className="sidebar__link">
                        <IoCalendarNumberOutline className="sidebar-icon" />
                        <span>Ngày cập nhật trước đó</span>
                      </span>
                    ) : (
                      <span to="/" className="sidebar__link">
                        <MdOutlineMultipleStop className="sidebar-icon" />
                        <span>Ngày cập nhật mới đây</span>
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Title;
