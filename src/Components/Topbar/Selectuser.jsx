import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import "./Topbar.css";

const Selectuser = () => {

   const location = useLocation();
   const AllPages = location.pathname !== "/login";
  return (
    <Link className=" text-decoration-none">
      <li>
        {AllPages ? (
          <div class="dropdown ">
            <CiUser className="iconss " />

            <Link
              className="btn  dropdown-toggle iconss "
              href="/#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              عبدالله احمد
            </Link>

            <ul className="dropdown-menu text-center">
              <li>
                <Link className="dropdown-item" to="/myaccout">
                  حسابى
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/SitAcount">
                  اعدادات الحساب
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button
                    type="submit"
                    className="btn btn-danger text-center px-4 py-0 mb-1 fs-6 text-center mt-2 pb-1"
                  >
                    تسجيل خروج
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className=" d-flex jsutify-content-center ">
            <CiUser className="iconss" />
            دخول/انشاء حساب
          </div>
        )}
      </li>
    </Link>
  );
}

export default Selectuser
