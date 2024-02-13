import React from 'react'
import imganm from '../Components/assent/pikabu.gif'
const ErrorPage = () => {
  return (
    <div className=" Error">
      <div className="container ">
        <div className=" text-center text-2xl">
          <span className=" fw-bold fs-3">404</span>
          <p className='fs-3'>هذه الصفحة التى تحاول الوصول اليها غير موجودة</p>
          <div className=" ">
          <div className='w-img'>
          <img src={imganm} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage
