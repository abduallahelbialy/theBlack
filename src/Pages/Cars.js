import React from "react";
import "../Components/Home/home.css";
import flag from "../Components/assent/flag-3d-round-250.png";
import flagtwo from "../Components/assent/flag-round-250.png";
import { RiSteering2Fill } from "react-icons/ri";
import { Rating } from "@mui/material";
import { IoIosColorFill } from "react-icons/io";
import { IoDiamondSharp, IoTimer } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Carsa from "../Components/Fackers/DAra.json";

const Cars = () => {
  return (
    <React.Fragment>
      <div className="cars">
        <div className="container">
          <div className="row">
            <div className="decription">
              <h1 className="fontcas text-center mt-3">
                هذا النص هو مثال لاى نص يمكن استبداله فى نفس المساحة
              </h1>
              <p
                className="text-black-50 text-center descar"
                data-aos="fade-right"
              >
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
            {Carsa.map((c) => {
              return (
                <div className="col-lg" key={c.id}>
                  <div className="card mt-2">
                    <div className="addser">
                      <img src={c.img} alt="" className="mb-1 img-fluid" />
                    </div>
                    <div className="denone p-2 mb-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fontcas fw-bold text-dark mt-2">
                          {c.title}
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
                          {c.year}
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
                          {c.color}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cars;
