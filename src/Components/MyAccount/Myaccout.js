import React, { useState } from 'react'
import './myaccout.css'
import  acount from'../assent/acouimg.jpg'
import data from '../Fackers/data'
import ask from '../Fackers/Ask'
import dataTwo from '../Fackers/dataTapTwo'
import Cardsdta from '../Fackers/CardData'
import Tquem from '../Fackers/Taquem'
import { Link } from "react-router-dom";


const Myaccout = () => {
     const [activeTab, setActiveTab] = useState("tab1");

     const changeTab = (tabId) => {
       setActiveTab(tabId);
     };
  return (
    <React.Fragment>
      <div className="my-accout">
        <div className="container">
          <div className="row">
            <ul className="tabs">
              <li
                className={`tab ${activeTab === "tab1" && "active"}`}
                onClick={() => changeTab("tab1")}
              >
                الملف الشخصى
              </li>
              <li
                className={`tab ${activeTab === "tab2" && "active"}`}
                onClick={() => changeTab("tab2")}
              >
                العضوية الحالية
              </li>
              <li
                className={`tab ${activeTab === "tab3" && "active"}`}
                onClick={() => changeTab("tab3")}
              >
                النقاط الحالية
              </li>
              <li
                className={`tab ${activeTab === "tab4" && "active"}`}
                onClick={() => changeTab("tab4")}
              >
                الحجوزات السابقة
              </li>
              <li
                className={`tab ${activeTab === "tab5" && "active"}`}
                onClick={() => changeTab("tab5")}
              >
                تقييمات السيارات
              </li>
              <li
                className={`tab ${activeTab === "tab6" && "active"}`}
                onClick={() => changeTab("tab6")}
              >
                الشكاوى والاقتراحات
              </li>
            </ul>
            <div className="tab-content-ttt mt-4  ">
              {data.map((e) => {
                return (
                  <div key={e.u}>
                    <div
                      id="tab1"
                      className={`tab-content ${
                        activeTab === "tab1" && "active"
                      }`}
                    >
                      <div className="protfoli d-flex justify-content-between align-items-center p-3 ">
                        <div>
                          <p className="fw-medium fs-6"> {e.name}</p>

                          <span className="d-flex align-items-center justify-content-center fs-6 text-black-50 fw-semibold ">
                            <p className="text-danger mb-1 ">{e.icon1}</p>
                            {e.abdallah}
                          </span>
                        </div>
                        <div>
                          <p className="fw-medium fs-6">{e.post}</p>
                          <span className="d-flex align-items-center justify-content-center fs-6 text-black-50 fw-semibold ">
                            <p className="text-danger mb-1">{e.icon2}</p>
                            {e.mail}
                          </span>
                        </div>
                        <div>
                          <p className="fw-medium fs-6">{e.phone}</p>
                          <span className="d-flex align-items-center justify-content-center fs-6 text-black-50 fw-semibold ">
                            <p className="text-danger mb-1">{e.icon3}</p>
                            {e.num}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div
                id="tab2"
                className={`tab-content ${activeTab === "tab2" && "active"}`}
              >
                {dataTwo.map((u) => {
                  return (
                    <div
                      className="casrd d-flex align-items-center justify-content-center gap-2 "
                      key={u.c}
                    >
                      <img src={u.imga} alt="" className="mb-3 d-block" />
                      <div className="text-ds">
                        <h2 className="fs-6">{u.nuper}</h2>

                        <p className="mt-1">{u.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                id="tab3"
                className={`tab-content ${activeTab === "tab3" && "active"}`}
              >
                <div className="text-center tap-thre">
                  <img src={acount} alt="" />
                  <p className="bg-white ">
                    عدد النقاط{" "}
                    <span className="text-danger fs-3 mt-2">1380</span>
                  </p>
                </div>
              </div>
              <div
                id="tab4"
                className={`tab-content ${activeTab === "tab4" && "active"}`}
              >
                {Cardsdta.map((a) => {
                  return (
                    <div key={a.id}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg col-md-6 p-4">
                            <Link to="/detilsCard" className="text-black">
                              <div className="cardm ">
                                <div className="img-card d-flex gap-4">
                                  <img src={a.image} alt="" />
                                  <div className="detils-card ">
                                    <p className=" fw-bold fs-7 fsd">{a.num}</p>
                                    <p className="text-black-50 fsp">
                                      {a.exnt}
                                    </p>
                                    <p className=" text-black-50 fsp">
                                      {a.datarequst}
                                    </p>
                                    <p className="text-black-50 fsp fw-bold">
                                      {a.valu}
                                      <span className=" fw-bold colop">
                                        {a.numreq}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg col-md-6 p-4">
                            <Link to="/detilsCard" className="text-black">
                              <div className="cardm ">
                                <div className="img-card d-flex gap-4">
                                  <img src={a.imagee} alt="" />
                                  <div className="detils-card ">
                                    <p className=" fw-bold fs-7 fsd">{a.num}</p>
                                    <p className="text-black-50 fsp">
                                      {a.exnt}
                                    </p>
                                    <p className=" text-black-50 fsp">
                                      {a.datarequst}
                                    </p>
                                    <p className="text-black-50 fsp fw-bold">
                                      {a.valu}
                                      <span className=" fw-bold colop">
                                        {a.numreq}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="tab5"
                className={`tab-content ${activeTab === "tab5" && "active"}`}
              >
                {Tquem.map((s)=>{
                  return (
                    <div className="tquem" key={s.id}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg col-md-6 ">
                            <Link to="/tque" className="text-black">
                              <div className="cartquem d-flex g-2">
                                <div className="par d-flex">
                                  <div className="img-tqu">
                                    <img src={s.imge} alt="" />
                                  </div>
                                  <div className="tqutext">
                                    <p className="fw-bold">{s.title}</p>
                                    <span>{s.ratiung}</span>
                                    <p className=" text-black-50 fsT">
                                      {s.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg col-md-6  ">
                            <Link to="/tque" className="text-black">
                              <div className="cartquem d-flex g-2">
                                <div className="par d-flex">
                                  <div className="img-tqu">
                                    <img src={s.imge} alt="" />
                                  </div>
                                  <div className="tqutext">
                                    <p className="fw-bold">{s.title}</p>
                                    <span>{s.ratiung}</span>
                                    <p className=" text-black-50 fsT">
                                      {s.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="tab6"
                className={`tab-content ${activeTab === "tab6" && "active"}`}
              >
               {ask.map((k)=>{
                  return (
                    <div className="Ask" key={k.id}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg col-md-6">
                            <Link to="/AskDatl" className="text-black">
                              <div className="cardAsk d-flex gap-2">
                                <div className="ask-img">
                                  <img src={k.img} alt="" />
                                </div>
                                <div className="detAsk">
                                  <p className="fw-bold">{k.title}</p>
                                  <p className="text-black-50">{k.dataask}</p>
                                  <p className="border"></p>
                                  <div className="d-flex gap-1 groud">
                                    <p>{k.case}</p>
                                    <p className="text-danger fw-medium">
                                      {k.ok}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg col-md-6">
                            <Link to="/AskDatl" className="text-black">
                              <div className="cardAsk d-flex gap-2">
                                <div className="ask-img">
                                  <img src={k.img} alt="" />
                                </div>
                                <div className="detAsk">
                                  <p className="fw-bold">{k.title}</p>
                                  <p className="text-black-50">{k.dataask}</p>
                                  <p className="border"></p>
                                  <div className="d-flex gap-1 groud">
                                    <p>{k.case}</p>
                                    <p className="text-danger fw-medium">
                                      {k.ok}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Myaccout