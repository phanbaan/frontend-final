import React, { useEffect } from "react";
import Toast from "../../components/toast";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { todosList } from "./todoSlice";
import { isLogginSelector, todoSelector } from "../../redux/selectors";

const Todos = () => {
  const dispath = useDispatch();
  const isLoggin = useSelector(isLogginSelector);
  const todos = useSelector(todoSelector);
  useEffect(() => {
    dispath(todosList());
  }, []);

  if (!isLoggin) {
    return;
  }
  return (
    <div>
      <div className="dashboard">
        {/* {status && (
          <Toast
            title="Đăng nhập thành công"
            message={` Chào mừng bạn ${name} đến với trang quản lý danh sách công việc của ban`}
          />
        )} */}

        <Header />
        <div className="dashboard__content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
