import React from 'react'
import './Login.css'
import Anputo from '../auth/Anputo';
import { Link } from 'react-router-dom';
const ForgetPass = () => {
  return (
    <React.Fragment>
      <div className="forget">
        <div className="container">
          <div className="row">
            <div className="wel text-center mt-4">
              <h1 className="fs-5 mt-2 text-black"> استعادة كلمة المرور</h1>
              <p className="text-black-50 fw-small  fs-6">ادخل رقم جوالك</p>
            </div>
            <form className="form-login">
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black fs-6"
                >
                  رقم الجوال <span className="text-danger">*</span>
                </label>

                <Anputo
                  className="form-control py-2"
                  id="formGroupExampleInput"
                  placeholder="ادخل رقم الجوال"
                  type="number"
                />
              </div>
              <div className="loginbtn mt-4 mb-3">
                <Link
                  to="/vaild"
                  type="submit"
                  className="text-decoration-none"
                >
                  <button type="submit" className="color-btn ">
                    ارسال
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgetPass