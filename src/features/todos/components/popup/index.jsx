import { Formik } from "formik";
import * as Yup from "yup";
import "./style.scss";
const Popup = () => {
  const initialValues = {
    name: "",
    age: "",
    address: "",
    email: "",
    file: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Kiểu email").required("Email phải bắt buộc"),
    name: Yup.string().required("Họ tên phải bắt buộc"),
    age: Yup.number("Phải nhập số").required("Tuổi phải bắt buộc "),
    address: Yup.string("Nhập kiểu string").required("bắt buộc nhập địa chỉ"),
    file: Yup.mixed().required(),
  });
  const handleSubmitForm = (values, actions) => {
    console.log("value", values, {
      fileName: values.file.name,
      type: values.file.type,
      size: `${values.file.size} bytes`,
    });
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
            {({
              values,
              handleSubmit,
              setFieldValue,
              touched,
              errors,
              handleBlur,
              handleChange,
            }) => {
              return (
                <div className="form">
                  <form className="form-box" onSubmit={handleSubmit}>
                    <div className="input-group">
                      <div className="group-error">
                        <input
                          type="text"
                          name="name"
                          placeholder="Họ và Tên"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.name && touched.name
                              ? "text-input input error"
                              : "text-input input"
                          }
                        />
                        {errors.name && touched.name && (
                          <div className="input-feedback">{errors.name}</div>
                        )}
                      </div>
                      <div className="group-error">
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Nhập địa chỉ email"
                          className={
                            errors.email && touched.email
                              ? "text-input input error"
                              : "text-input input"
                          }
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="group-error">
                        <input
                          type="text"
                          name="age"
                          value={values.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Nhập tuổi của bạn"
                          className={
                            errors.age && touched.age
                              ? "text-input input error"
                              : "text-input input"
                          }
                        />
                        {errors.age && touched.age && (
                          <div className="input-feedback">{errors.age}</div>
                        )}
                      </div>
                      <div className="group-error">
                        <input
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Nhập địa chỉ address"
                          className={
                            errors.address && touched.address
                              ? "text-input input error"
                              : "text-input input"
                          }
                        />
                        {errors.address && touched.address && (
                          <div className="input-feedback">{errors.address}</div>
                        )}
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                        className="input"
                      />
                      <label className="popup-label">Upload ảnh avatar</label>
                    </div>
                    <div className="input-group">
                      <label className="popup-label">Ngày sinh</label>
                      <input type="date" className="input date" />
                    </div>
                    <div className="input-group">
                      <input
                        type="submit"
                        className="input btn"
                        value="Cập nhật"
                      />
                    </div>
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Popup;
