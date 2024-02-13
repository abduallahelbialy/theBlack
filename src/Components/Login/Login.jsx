import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Anputo from "../auth/Anputo";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange", // Enable onChange mode for real-time validation
  });

  const onSubmit = (data) => {
    // Perform login logic here (replace with your authentication logic)
    // For now, let's assume successful login and navigate to the home page
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="wel text-center mt-4">
              <h1 className="fs-4">تسجيل الدخول</h1>
              <p className="text-black-50 fw-semibold fs-6">اهلا بك وبعودتك</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-login">
              <div className="mb-4">
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label d-flex justify-content-start align-items-center"
                >
                  رقم الجوال <span className="text-danger">*</span>
                </label>
                <Anputo
                  className="form-control py-2"
                  id="formGroupExampleInput"
                  placeholder="ادخل رقم الجوال"
                  type="number"
                  {...register("number", {
                    
                    
                  })}
                />
                <span>{errors.number?.message}</span>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="formGroupExampleInputPassword"
                  className="form-label d-flex justify-content-start align-items-center"
                >
                  كلمة المرور <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control py-2"
                  id="formGroupExampleInputPassword"
                  placeholder="ادخل كلمة المرور"
                  type="password"
                  {...register("password", {
                    required: "هذا الحقل مطلوب",
                    minLength: {
                      value: 5,
                      message: "هذه الكلمة قصيرة للغاية",
                    },
                    maxLength: {
                      value: 20,
                      message: "هذه الكلمة كبيرة للغاية",
                    },
                  })}
                />
                <span>{errors.password?.message}</span>
              </div>
              <div>
                <Link
                  to="/forget"
                  className="text-right d-flex link-underline link-underline-opacity-0 mb-3 forget fs-7"
                >
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="loginbtn mt-4">
                <button type="submit" className="color-btn" disabled={!isValid}>
                  دخول
                </button>
                <Link
                  to="/creataccount"
                  className="link-underline link-underline-opacity-0"
                >
                  <div className="d-flex justify-content-center mt-3  ">
                    <p className="text-black-50 fw-600 fs-7">ليس لديك حساب؟ </p>
                    <Link className="text-danger fw-500" to="/creataccount">
                      انشاء حساب
                    </Link>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
