import { useEffect, useState } from "react";
import { IoHelp, IoMegaphoneOutline } from "react-icons/io5";
import {
  MdCake,
  MdDashboard,
  MdDeleteOutline,
  MdEmojiPeople,
  MdLocationOn,
  MdLogout,
  MdOutlineSearch,
  MdOutlineSettings,
  MdCreditScore,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../../../assets/images";
import { logout } from "../../../../redux/authSlice";
import { userSelector } from "../../../../redux/selectors";
import { todoSearch } from "../../todoSlice";
import Popup from "../popup";
import "./style.scss";

const Header = () => {
  const [searchText, setSearchText] = useState();
  const [isPopup, setIsPopup] = useState(false);
  const user = useSelector(userSelector);
  const { name, address, avatar } = user;

  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    dispath(todoSearch(value));
  };
  function handleLogout() {
    dispath(logout());
    navigate("../");
  }
  function handleUpdate(params) {
    setIsPopup(!isPopup);
  }
  // function handleRemove() {
  //   dispath(remove(id));
  //   navigate("../");
  // }
  return (
    <div className="header">
      {isPopup && <Popup />}
      <div className="header__left">
        <Link to="/todos" className="logo">
          <MdDashboard className="logo__icon" />
          <span className="logo__text">Logo</span>
        </Link>
      </div>
      <div className="header__center">
        <form className="search-form">
          <MdOutlineSearch className="search-form__icon" />
          <input
            type="text"
            className="search-form__input"
            value={searchText ?? ""}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="header__right">
        <ul className="acount">
          <div className="acount__item">
            <MdOutlineSettings className="account__icon"></MdOutlineSettings>
          </div>
          <div className="acount__item">
            <IoHelp className="account__icon"></IoHelp>
          </div>
          <div className="acount__item">
            <IoMegaphoneOutline className="account__icon"></IoMegaphoneOutline>
          </div>
          <div className="acount__item">
            <img
              src={avatar ? avatar : IMAGES.avatar}
              alt=""
              className="avatar"
              width={50}
            />
            <div className="info">
              <ul className="info-list">
                <li className="info-item">
                  <MdEmojiPeople />
                  Hello: <span>{name}</span>
                </li>
                <li className="info-item">
                  <MdLocationOn />
                  Địa chỉ: <span> {address ? address : "Vô gia cư"}</span>
                </li>
                <li className="info-item">
                  <MdDeleteOutline />
                  Xóa tài khoản
                </li>
                <li className="info-item" onClick={handleUpdate}>
                  <MdCreditScore />
                  Cập nhật thông tin
                </li>
                <li className="info-item" onClick={handleLogout}>
                  <MdLogout />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
