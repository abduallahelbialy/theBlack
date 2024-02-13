import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/Login.css'
const Confercreat = () => {
  return (
    <React.Fragment>
      <div className="vaildtion">
        <div className="container">
          <div className="row">
            <div className="wel text-center mt-4">
              <h1 className="fs-5 mt-2 text-black">كود التحقق</h1>
              <p className="text-black-50 fw-small  fs-8 fw-bold">
                ادخل كود التحقق المرسل اليك
              </p>
            </div>
            <form className="form-login">
              <div className="d-flex justify-content-center align-items-center code">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div className="loginbtn mt-4">
                <Link
                  to="/login"
                  type="submit"
                  className="text-decoration-none"
                >
                  <button type="submit" className="color-btn mb-2 ">
                    ارسال
                  </button>
                </Link>
                <Link to="/forget" className="fs-7 text-black-50 ">
                  لم يصلك كود؟
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Confercreat