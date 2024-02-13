import React from "react";
import sitting from "../Fackers/Sitting";
import { MdArrowBackIos } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import OneData from "./OneData";
import TwoDate from "./TwoDate";
import ThreeDate from "./ThreeDate";
import FouerDate from "./FouerDate";

const SittingAcoount = () => {
  return (
    <React.Fragment>
      <div className="Sitting">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 ">
              {sitting.map((s) => {
                return (
                  <ul className="SittChange" key={s.id}>
                    <Link to={s.path}>
                      <div className="d-flex justify-content-between align-items-center">
                        <li className="text-black text-nowrap">{s.li}</li>
                        <span className="">
                          {<MdArrowBackIos className="text-danger arro" />}
                        </span>
                      </div>
                    </Link>
                  </ul>
                );
              })}
            </div>
            <div className="col-lg-10  text-center">
              <Routes>
                <Route path="/oneDae" element={<OneData />}></Route>
                <Route path="/twochange" element={<TwoDate />}></Route>
                <Route path="/threemail" element={<ThreeDate />}></Route>
                <Route path="/FouerDatepas" element={<FouerDate />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SittingAcoount;
