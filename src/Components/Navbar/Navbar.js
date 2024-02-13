import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import '../Topbar/Topbar.css'

import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Navbar = () => {
 
      const { t } = useTranslation();
const location = useLocation();
const currentPath = location.pathname;
  
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/" ? "active" : ""
                  } text-white fw-normal`}
                  aria-current="page"
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/cars" ? "active" : ""
                  } text-white`}
                  to="/cars"
                >
                  اسطول السيارات
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/serv" ? "active" : ""
                  } text-white`}
                  to="/serv"
                >
                  خدماتنا
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/curent" ? "active" : ""
                  } text-white`}
                  to="/curent"
                >
                  العروض الحالية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/bransh" ? "active" : ""
                  } text-white`}
                  to="/bransh"
                >
                  فروعنا
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/number" ? "active" : ""
                  } text-white`}
                  to="/number"
                >
                  العضويات
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/polcy" ? "active" : ""
                  } text-white`}
                  to="/polcy"
                >
                  سياسة التأجير
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/Who" ? "active" : ""
                  } text-white`}
                  to="/Who"
                >
                  من نحن
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentPath === "/contact" ? "active" : ""
                  } text-white`}
                  to="/contact"
                >
                  اتصل بنا
                </Link>
              </li>
              <li className="nav-item">
                <IoSearchOutline className="search" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar