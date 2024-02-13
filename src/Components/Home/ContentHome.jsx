import React, { useEffect } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import flag from "../assent/flag-3d-round-250.png";
import flagtwo from "../assent/flag-round-250.png";
import { IoDiamondSharp, IoTimer } from "react-icons/io5";
import { IoIosColorFill } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { RiSteering2Fill } from "react-icons/ri";
import { Rating } from "@mui/material";
import imgcars from "../assent/carhom1.jpg";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

import serDate from '../Fackers/Sevdata'
import Ourserver from "./Ourserver";
import servTwo from "../Fackers/servTwo";
import Aos from "aos";

const ContentHome = ({ HomeData }) => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <React.Fragment>
      <div className="text-home">
        <div className="container">
          <div className="row">
            <div className="decription">
              <h1 className="font-medium">اسطول السيارات</h1>
              <p className="text-black-50 text-center descar" >
                هذا النص هو مثال لاى نص اخرى يمكن ان يكتب فى نفس هذا المكان
              </p>
            </div>
            <div className="btn-groub text-center p-2 d-flex gap-3 justify-content-center">
              <button>
                <span>
                  <img src={flagtwo} alt="" className="flag-img p-1" />
                </span>
                المملكة العربية السعودية
              </button>
              <button>جميع الفروع</button>
              <button>
                {" "}
                <span>
                  <img src={flag} alt="" className="flag-img p-1" />
                </span>
                الامارات العربية المتحدة
              </button>
            </div>
            <div className="silder-card mt-3">
              <Swiper
                breakpoints={{
                  477: {
                    slidesPerView: 1,
                    spaceBetween: 190,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 80,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2.4,
                    spaceBetween: 50,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {HomeData.map((d) => (
                  <SwiperSlide key={d.id} data-aos="fade-{d.data}">
                    <div className="card">
                      <div className="d-flex cardcars">
                        <div className=" carsssa">
                          <img src={imgcars} alt="" className="mb-1" />
                        </div>
                        <div className="denone p-2 mb-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="fontcas fw-bold text-dark mt-2">
                              {d.title}
                            </p>
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
                              {d.year}
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
                              {d.color}
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </Swiper>
            </div>
            <Link to="/cars" className="text-center text-black fs-6 fw-medium mt-4">
              عرض المزيد
              <FaLongArrowAltLeft className="mt-1" />
            </Link>
            <Ourserver serDate={serDate} servTwo={servTwo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentHome;
