import React from "react";
import { FastField, Form, Formik } from "formik";
import "./style.scss";
import InputField from "../../../../components/input";
import * as Yup from "yup";
const Popup = () => {
  const initialValues = {
    name: "",
    age: "",
    address: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Kiểu email").required("Email phải bắt buộc"),
    name: Yup.string().required("Họ tên phải bắt buộc"),
    age: Yup.number("Phải nhập số").required("Tuổi phải bắt buộc "),
    address: Yup.string("Nhập kiểu string").required("bắt buộc nhập địa chỉ"),
  });
  const handleSubmitForm = async (values, actions) => {
    console.log("value", values);
  };
  return (
    <div className="popup-edit">
      <div className="popup-edit__content signup__right ">
        <div className="form">
          <div className="popup-title">Cập nhật thông tin tài khoản</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {(props) => {
              return (
                <Form className="form-box" onClick={props.handleSubmit}>
                  <div className="input-group">
                    <FastField
                      name="name"
                      component={InputField}
                      placeholder="Họ và Tên"
                      type="text"
                    />
                    <FastField
                      name="age"
                      component={InputField}
                      placeholder="Tuổi"
                      type="text"
                    />
                  </div>
                  <div className="input-group">
                    <FastField
                      name="address"
                      component={InputField}
                      placeholder="Địa chỉ"
                      type="text"
                    />
                    <FastField
                      name="email"
                      component={InputField}
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="input-group input-group-avatar">
                    <FastField
                      name="avatar"
                      component={InputField}
                      placeholder="avatar"
                      type="file"
                    />
                    <label>Avatar</label>
                  </div>
                  <div className="input-group input-group-birthday">
                    <label>Ngày sinh</label>
                    <FastField
                      name="birthday"
                      component={InputField}
                      placeholder=""
                      type="date"
                      className="input date"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="submit"
                      className="input btn"
                      value="Cập nhật"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Popup;
