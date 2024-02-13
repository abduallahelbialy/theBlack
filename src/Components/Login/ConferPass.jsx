import React from 'react'
import { Link } from 'react-router-dom';
import Anputo from '../auth/Anputo';

const ConferPass = () => {
  return (
    <React.Fragment>
      <div className="vaildtion">
        <div className="container">
          <div className="row">
            <div className="wel text-center mt-4">
              <h1 className="fs-4 mt-2 text-black">استعادة كلمة المرور</h1>
              <p className="text-black-50 fw-small  fs-8 ">
                ادخل كلمة المرور الجديدة
              </p>
            </div>
            <form className="form-login">
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center fs-7"
                >
                  كلمة المرور <span className="text-danger">*</span>
                </label>
                <Anputo
                  className="form-control py-2"
                  id="formGroupExampleInput"
                  placeholder="ادخل كلمة المرور"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center fs-7"
                >
                 تأكيد كلمة المرور <span className="text-danger">*</span>
                </label>
                <Anputo
                  className="form-control py-2"
                  id="formGroupExampleInput"
                  placeholder="ادخل كلمة المرور"
                  type="password"
                />
              </div>
              <div className="loginbtn mt-4">
                <Link to="/" type="submit" className="text-decoration-none">
                  <button type="submit" className="color-btn mb-2 ">
                    تأكيد
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

export default ConferPass