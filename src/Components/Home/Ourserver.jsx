import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import { Rating } from "@mui/material";
import { IoIosColorFill } from "react-icons/io";
import { IoDiamondSharp, IoTimer } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import banr from '../assent/down.jpg'
const Ourserver = ({ serDate, servTwo }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="ser d-flex justify-content-between align-items-center mt-4">
        <div>
          <h1 className="fs-5 fw-semibold">خدماتنا</h1>
          <p className="text-black-50">هذا النص هو مثال لاى نص اخر</p>
        </div>
        <div className="mb-3">
          <Link to="/" className="text-center text-black fs-6 fw-medium mt-4 ">
            عرض المزيد
            <FaLongArrowAltLeft className="mt-1" />
          </Link>
        </div>
      </div>
      {serDate.map((s) => {
        return (
          <React.Fragment>
            <div
              key={s.id}
              className="col-lg-4 col-md-6 mb-3"
              data-aos="fade-{s.data}"
            >
              <div className="card">
                <div className="ser-img">
                  <img src={s.img} alt="" className="sera" />
                </div>
                <p className="mt-1 p-1">{s.text}</p>
                <div className="text-center tobun ">
                  <button className="btn btn-danger px-5 mb-2 bser">
                    {s.more}
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}

      <div className="text-center mt-3 mb-3">
        <h2>العروض الحالية</h2>
        <p>هذا النص يمكن استبداله فى نفس هذه المساحه</p>
      </div>
      {servTwo.map((a) => {
        return (
          <div
            className="col-lg-4 col-md-6 mt-3"
            key={a.id}
            data-aos="fade-{a.data}"
          >
            <div className="card">
              <div className="addser">
                <img src={a.imge} alt="" className="mb-1 " />
              </div>
              <div className="denone p-2 mb-1">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fontcas fw-bold text-dark mt-2">{a.title}</p>
                  <Link
                    to="/"
                    className="text-danger text-decoration-underline "
                  >
                    عرض التقيمات
                  </Link>
                </div>
                <div className="d-flex justify-content-between gap-3 align-items-center p-2  ">
                  <p className="text-black-50 fontcas ">
                    <span>
                      <FaCar className="text-danger" />
                    </span>
                    كيا
                  </p>
                  <p className="text-black-50 fontcas">
                    <span>
                      <IoTimer className="text-danger " />
                    </span>
                    {a.year}
                  </p>
                  <p className="text-black-50 fontcas">
                    {" "}
                    <span>
                      <IoDiamondSharp className="text-danger" />
                    </span>
                    سبورتاج
                  </p>
                </div>
                <div className="d-flex justify-content-between gap-2 align-items-center  ">
                  <p className="text-black-50 fontcas d-flex">
                    <span>
                      <IoIosColorFill className="text-danger" />
                    </span>
                    {a.color}
                  </p>
                  <p className="text-black-50 fontcas d-flex me-1">
                    {" "}
                    <span>
                      <RiSteering2Fill className="text-danger " />
                    </span>
                    4ركاب
                  </p>
                  <span className="text-danger me-1 ">
                    <Rating
                      name="half-rating-read"
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                    />
                  </span>
                </div>
                <div className="d-flex flex-column  ">
                  <p className="text-dark fontcas text-black-50 d-flex align-items-center p-2 me-1">
                    المبلغ اليومى للتأجير
                    <span className="  fw-bold fontcas text-danger">
                      200.00رس
                    </span>
                  </p>
                </div>
                <div className="text-center check">
                  <button>حجز السيارة</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mb-3 text-center mt-3">
        <Link to="/" className="text-center text-black fs-6 fw-medium mt-4 ">
          عرض المزيد
          <FaLongArrowAltLeft className="mt-1" />
        </Link>
      </div>
      <div className="baner">
        <img src={banr} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Ourserver;
