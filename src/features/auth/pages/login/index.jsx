import React from "react";
import { FastField, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import InputField from "../../../../components/input";
import { Link } from "react-router-dom";
import IMAGES from "../../../../assets/images";
import "./style.scss";
import { login } from "../../../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { isLogginSelector } from "../../../../redux/selectors";

const Login = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const isLoggin = useSelector(isLogginSelector);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email phải bắt buộc"),
    password: Yup.string().required("mat khau bat buoc"),
  });

  // function handleSubmit(e, user) {
  //   e.preventDefault();
  //   dispath(login(user));
  //   if (isLoggin) {
  //     navigate("/todos");
  //   }
  // }
  return (
    <div>
      <div className="container">
        {/* {status && (
          <Toast
            title="Thất bại"
            message="Tài khoản hoặc mật khẩu không hợp lệ"
          />
        )} */}
        <div className="login">
          <div className="login__left">
            <img src={IMAGES.ic_login1} alt="" className="login__left--1" />
            <img src={IMAGES.ic_login2} alt="" className="login__left--2" />
            <img src={IMAGES.ic_login3} alt="" className="login__left--3" />
          </div>
          <div className="login__right">
            <div className="form">
              <div className="form__title">Đăng nhập tài khoản</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  dispath(login(values));
                  if (isLoggin) {
                    navigate("/todos");
                  }
                }}
              >
                {(props) => {
                  return (
                    <Form className="form-box" onSubmit={props.handleSubmit}>
                      <FastField
                        name="email"
                        component={InputField}
                        label="Email"
                        placeholder=""
                        type="text"
                      />
                      <FastField
                        name="password"
                        component={InputField}
                        label="password"
                        placeholder=""
                        type="password"
                      />
                      <div className="remember-div">
                        <input
                          type="checkbox"
                          name=""
                          id="remember"
                          className="remomeber__input"
                        />
                        <label className="remember">Remember me</label>
                      </div>
                      <div className="input-group">
                        <input
                          type="submit"
                          className="input btn"
                          value="Đăng nhập"
                        />
                      </div>
                      <div className="input-group">
                        <p>
                          Đăng ký tài khoản mới?
                          <Link to="/signup">Đăng ký</Link>
                        </p>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
