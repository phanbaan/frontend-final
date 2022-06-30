import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import IMAGES from "../../../../assets/images";
import InputField from "../../../../components/input";
import { register } from "../../../../redux/authSlice";
import "./style.scss";
const Register = () => {
  const dispath = useDispatch();
  // const status = useSelector(statusSelector);
  // const [isToast, setIsToast] = useState(false);
  // const [title, setTitle] = useState("Thất bại");
  // const [message, setMessage] = useState("Kiểm tra  lại thông tin đăng ký");
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Kiểu email").required("Email phải bắt buộc"),
    name: Yup.string().required("Họ tên phải bắt buộc"),
    password: Yup.string().required("Mật khẩu phải bắt buộc"),
    // .matches(/^[a-z]+$/, "Mật khẩu phải có 1 chữ thường")
    // .matches(/^[A-Z]+$/, "Mật khẩu phải có 1 chữ hoa")
    // .matches(/^\d+$/, "Mật khẩu phải có 1 chữ số"),
  });
  const handleSubmitForm = async (values, actions) => {
    await dispath(register(values));
    actions.resetForm({ values: "" });
    // setTitle("Thành công");
    // setMessage(
    //   "Bạn đã đăng ký thành công tài khoản , đến trang đăng nhập để đăng nhập"
    // );
  };
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
                onSubmit={handleSubmitForm}
              >
                {(props) => {
                  return (
                    <Form className="form-box" onClick={props.handleSubmit}>
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

export default Register;
