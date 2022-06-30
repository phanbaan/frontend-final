import React from "react";
import {
  IoMenuOutline,
  IoPersonOutline,
  IoSunnyOutline,
  IoStarOutline,
  IoCalendarOutline,
  IoHomeOutline,
  IoAttach,
  IoCheckmarkDoneOutline,
  IoPeopleSharp,
  IoMailOutline,
} from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import {
  couterCompletedSelector,
  couterPrioritySelector,
  couterSelector,
  isSidebarSelector,
} from "../../../../redux/selectors";
import { todoCompleted, todoIsSidebar, todoPriority } from "../../todoSlice";
import "./style.scss";

const Sidebar = () => {
  const couter = useSelector(couterSelector);
  const couterPriority = useSelector(couterPrioritySelector);
  const couterCompleted = useSelector(couterCompletedSelector);
  const isSidebar = useSelector(isSidebarSelector);
  const dispath = useDispatch();
  function handleToday() {
    dispath(todoPriority(false));
    dispath(todoCompleted(false));
  }
  function handlePriority() {
    dispath(todoPriority(true));
    dispath(todoCompleted(false));
  }

  function handleCompleted() {
    dispath(todoPriority(false));
    dispath(todoCompleted(true));
  }
  function handleIsSidebar() {
    dispath(todoIsSidebar(!isSidebar));
  }
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__header" onClick={handleIsSidebar}>
        <IoMenuOutline className="icon-header" />
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__list">
          <li className="sidebar__item" onClick={handleToday}>
            <Link to="today" className="sidebar__link">
              <IoSunnyOutline className="sidebar-icon" />
              <span>Ngày của tôi</span>
              <span>{couter}</span>
            </Link>
          </li>
          <li className="sidebar__item" onClick={handlePriority}>
            <Link to="important" className="sidebar__link">
              <IoStarOutline className="sidebar-icon" />
              <span>Quan trong</span>
              <span>{couterPriority}</span>
            </Link>
          </li>
          <li className="sidebar__item" onClick={handleCompleted}>
            <Link to="completed" className="sidebar__link">
              <IoCalendarOutline className="sidebar-icon" />
              <span>Hoàn thành</span>
              <span>{couterCompleted}</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <IoPersonOutline className="sidebar-icon" />
              <span>Đã giao cho tôi</span>
              <span></span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <IoHomeOutline className="sidebar-icon" />
              <span>Tác vụ</span>
              <span></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <ul className="footer__list">
          <li className="footer__item">
            <IoMailOutline />
          </li>
          <li className="footer__item">
            <IoCalendarOutline />
          </li>
          <li className="footer__item">
            <IoPeopleSharp />
          </li>
          <li className="footer__item">
            <IoAttach />
          </li>
          <li className="footer__item">
            <IoCheckmarkDoneOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
