import React, { useEffect, useState } from "react";
import Toast from "../../components/toast";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { todoIsSidebar, todosList } from "./todoSlice";
import { isLogginSelector, isSidebarSelector } from "../../redux/selectors";

const Todos = () => {
  const dispath = useDispatch();
  const isLoggin = useSelector(isLogginSelector);
  const isSidebar = useSelector(isSidebarSelector);

  useEffect(() => {
    dispath(todosList());
  }, []);
  function handleResize() {
    const width = window.innerWidth;
    if (width < 900) {
      dispath(todoIsSidebar(false));
    }
  }
  window.addEventListener("resize", handleResize);
  if (!isLoggin) {
    return;
  }
  return (
    <div>
      <div className="dashboard">
        <Header />
        <div className="dashboard__content">
          {isSidebar && (
            <div className="sidebar">
              <Sidebar />
            </div>
          )}
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
