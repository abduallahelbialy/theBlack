import React from 'react'
import Anputo from '../auth/Anputo';
import "../Login/Login.css";
import { Link } from 'react-router-dom';


const Createacount = () => {
    
  return (
    <React.Fragment>
      <div className="creat">
        <div className="container">
          <div className="row">
            <div className="wel text-center mt-4">
              <h1 className="fs-4 fw-bold"> انشاء حساب</h1>
              <p className="text-black-50 fw  fs-5">قم بالانضمام الينا</p>
            </div>
            <form className="form-creat">
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  الاسم ثلاثى <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل الاسم ثلاثى"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  البريد الالكترونى <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="البريد الالكترونى"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  رقم الجوال <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل رقم الجوال "
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  العنوان <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل العنوان"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  تاريخ الميلاد <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل العنوان"
                  type="date"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  الجنس <span className="text-danger">*</span>
                </label>
                <div className="radio d-flex justify-start">
                  <div className="d-flex gap-4">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="flexRadioDefault1"
                    />
                    <label
                      htmlFor="flexRadioDefault1"
                      class="form-check-label  fs-6"
                    >
                      ذكر
                    </label>
                    <input
                      type="radio"
                      class="form-check-input"
                      id="flexRadioDefault1"
                    />
                    <label
                      htmlFor="flexRadioDefault1"
                      class="form-check-label text-black-60 fs-6"
                    >
                      انثى
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  الجنسية <span className="text-danger">*</span>
                </label>

                <select class="form-select" aria-label="Default select example">
                  <option selected>الجنسية</option>
                  <option value="1">مصرى</option>
                  <option value="2">سعودى</option>
                  <option value="3">المانى</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  رقم الهوية <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل رقم الهوية"
                  type="number"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  تاريخ انتهاء الهوية <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل تاريخ انتهاء الهوية"
                  type="number"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  نوع الرخصة <span className="text-danger">*</span>
                </label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>ادخل نوع الرخصة</option>
                  <option value="1">خاصة</option>
                  <option value="2">اولى </option>
                  <option value="3">تانى</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  تاريخ انتهاء الرخصة <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل تاريخ انتهاء الرخصة"
                  type="number"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  نوع جهة العمل <span className="text-danger">*</span>
                </label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>ادخل نوع العمل</option>
                  <option value="1">خاص</option>
                  <option value="2">حكومى </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  اسم جهة العمل <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل اسم جهة العمل"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  كلمة المرور <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="ادخل كلمة المرور"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label
                  for="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center text-black-50"
                >
                  تأكيد كلمة المرور <span className="text-danger">*</span>
                </label>

                <Anputo
                  id="formGroupExampleInput"
                  placeholder="تأكيد كلمة المرور"
                  type="password"
                />
              </div>
              <div className="loginbtn mt-4">
                <Link
                  to="/conercreat"
                  className="link-underline link-underline-opacity-0"
                >
                  <button type="submit" className="color-btn  ">
                    انشاء حساب
                  </button>
                </Link>
                <div className="d-flex justify-content-center mt-3  ">
                  <Link
                    to="/login"
                    className="link-underline link-underline-opacity-0"
                  >
                    <p className="text-black-50 fw-600 fs-7"> لديك حساب؟ </p>
                  </Link>{" "}
                  <Link className="text-danger fw-500" to="/login">
                    تسجيل الدخول
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Createacount
