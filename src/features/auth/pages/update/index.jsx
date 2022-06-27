import { FastField, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import IMAGES from "../../../../assets/images";
import InputField from "../../../../components/input";
import "./style.scss";
const Update = () => {
  const dispath = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email phải bắt buộc"),
    name: Yup.string().email().required("Họ tên phải bắt buộc"),
    password: Yup.string().required("mat khau bat buoc"),
  });
  function handleSubmit(e, user) {
    e.preventDefault();
    // dispath(register(user));
  }
  return (
    <div>
      {/* {status && <Toast title={title} message={message} />} */}
      <div className="container">
        <div className="signup">
          <div className="signup__left">
            <img src={IMAGES.signup} alt="" className="signup__left--1" />
            <img src={IMAGES.ic_login2} alt="" className="signup__left--2" />
            <img src={IMAGES.ic_login3} alt="" className="signup__left--3" />
          </div>
          <div className="signup__right">
            <div className="form">
              <div className="form__title">Đăng ký tài khoản</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {(props) => {
                  const { values } = props;
                  return (
                    <Form
                      className="form-box"
                      onSubmit={(e) => handleSubmit(e, values)}
                    >
                      <FastField
                        name="name"
                        component={InputField}
                        label="họ tên"
                        placeholder=""
                        type="text"
                      />
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
                        label="Mật khẩu"
                        placeholder=""
                        type="password"
                      />
                      <div className="input-group">
                        <input
                          type="submit"
                          className="input btn"
                          value="Đăng ký tài khoản"
                        />
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

export default Update;
