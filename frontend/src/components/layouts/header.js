import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../../assets/js/jquery.meanmenu.min.js';

import Login from './login';
import logo from '../../assets/img/logo/logo.png';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div id="main-menu" className="main-menu-container">
          <div className="main-menu">
            <div className="container">
              <div className="navbar-default">
                <nav className="navbar-menu float-left">
                  <div className="nav-menu ul-li">
                    <ul>
                      <li className="menu-item-has-children ul-li-block">
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li>
                        <Link to="/about-us">Nghề nghiệp</Link>
                      </li>
                      <li>
                        <Link to="/shop">Trường</Link>
                      </li>
                      <li>
                        <Link to="/contact">Sự kiện</Link>
                      </li>
                      <li>
                        <Link to="/contact">Hỏi đáp</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <nav className="navbar-menu float-right">
                  <div className="nav-menu ul-li">
                    <ul>
                      <li>
                        <Link to="/about-us">Đăng nhập</Link>
                      </li>
                      <li>
                        <Link to="/shop">Đăng Ký</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="mobile-menu">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home 1</Link>
                          </li>
                          <li>
                            <Link to="/home-2">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/home-3">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/home-4">Home 4</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/#!">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/teacher">Teacher</Link>
                          </li>
                          <li>
                            <Link to="/teacher-details">Teacher Details</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-single">Blog Single</Link>
                          </li>
                          <li>
                            <Link to="/course">Course</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/checkout">CheckOut</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>

                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
