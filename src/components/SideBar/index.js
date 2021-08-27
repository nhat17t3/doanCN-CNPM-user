import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const role = localStorage.getItem("role");

  return (
    <>
      <nav className="category">
        <h3 className="category__heading">
          <i className="category__heading-icon fas fa-list" />
          Danh Muc
        </h3>
        {role === "ROLE_TUTOR" ? (
          <ul className="category-list">
            {/* <li className="category-item category-item--active"><a href="# " className="category-item__link">Chuc nang 1</a></li> */}
            <li className="category-item">
              <Link to="/notifycation" className="category-item__link">
                Thông báo
              </Link>
            </li>
            <li className="category-item">
              <Link to="/listbill" className="category-item__link">
                Hóa đơn
              </Link>
            </li>
            <li className="category-item">
              <Link to="/list-myclass-tutor" className="category-item__link">
                Lớp dạy
              </Link>
            </li>
            <li className="category-item">
              <Link to="#" className="category-item__link">
                More
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="category-list">
            {/* <li className="category-item category-item--active"><a href="# " className="category-item__link">Chuc nang 1</a></li> */}
            <li className="category-item">
              <Link to="/notifycation" className="category-item__link">
                Thông báo
              </Link>
            </li>
            
            <li className="category-item">
              <Link to="/listpost" className="category-item__link">
                Quản lí bài đăng
              </Link>
            </li>
            <li className="category-item">
              <Link to="/list-myclass-student" className="category-item__link">
              Lớp của tôi
              </Link>
            </li>
            <li className="category-item">
              <Link to="#" className="category-item__link">
                More
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
