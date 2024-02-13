import React from "react";
import detils from "../Fackers/DataDetils";
import { FaCar } from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import "./myaccout.css";
import { IoTimer } from "react-icons/io5";
import { IoDiamondSharp } from "react-icons/io5";
import { IoIosColorFill } from "react-icons/io";
import { Rating } from "@mui/material";
const TquemDetils = () => {
  return (
    <React.Fragment>
      <div className="DetlisTquem">
        <div className="container">
          <div className="row">
            {detils.map((d) => (
              <div key={d.id} className="col-lg col-md-6">
                <div className="d-flex align-items-center cardCArs">
                  <div className="img-cars">
                    <img src={d.imge} alt="" />
                  </div>
                  <div className="denone p-2 mt-3">
                    <p className="fs-5 fw-bold text-dark mt-1">{d.title}</p>
                    <div className="d-flex justify-content-between gap-5 align-items-center p-2  ">
                      <p className="text-black-50 fs-5 ">
                        <span>
                          <FaCar className="text-danger" />
                        </span>
                        {d.tye}
                      </p>
                      <p className="text-black-50 fs-5">
                        <span>
                          <IoTimer className="text-danger " />
                        </span>
                        {d.year}
                      </p>
                      <p className="text-black-50 fs-5">
                        <span>
                          <IoDiamondSharp className="text-danger" />
                        </span>
                        {d.nty}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between gap-5 align-items-center  ">
                      <p className="text-black-50 fs-5 d-flex">
                        <span>
                          <IoIosColorFill className="text-danger" />
                        </span>
                        {d.color}
                      </p>
                      <p className="text-black-50 fs-5 d-flex">
                        <span>
                          <RiSteering2Fill className="text-danger" />
                        </span>
                        {d.numpeo}
                      </p>
                      <span className="text-danger">{d.ratiung}</span>
                    </div>
                    <p className="text-dark fs-5 text-black-50 d-flex align-items-center p-2">
                      {d.totle}
                      <span className=" colop fw-bold">200.00رس</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg col-md-6 ">
              <div className="cartquemt d-flex g-2">
                <div className="par d-flex">
                  <div className="">
                    <span>
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />

                        <Rating.Star filled={false} />
                      </Rating>
                    </span>
                    <p className="fs-6 text-black-50">
                      "هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص
                      هذاالنص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص"
                      "هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص
                      هذاالنص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TquemDetils;
