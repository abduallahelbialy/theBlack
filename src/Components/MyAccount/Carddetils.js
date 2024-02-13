import React from "react";
import detils from "../Fackers/DataDetils";
import "./myaccout.css";
import { FaCar } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { IoDiamondSharp } from "react-icons/io5";
import { IoIosColorFill } from "react-icons/io";
import { RiSteering2Fill } from "react-icons/ri";

const Carddetils = () => {
  let tabledata = [
    {
      id: 1,
      th: "ملخص الطلب",
      td: "قيمه التاجير اليومي",
      tdd: " 100.00 رس ",
      dv: "قيمة الطلب",
      ds:"200.00رس"
    },
   
  ];
  let tabledata2 = [
    {
      id: 1,
      th: "رقم الجوال",
      td: "+201028924906",
      tdd: "توفير السائق",
      no:"لا",
      dv: "نوع الحجز",
      day:"يومى",
      ds:"تاريخ بداية الحجز",
      data:"1/11/2023",
      ex:"تاريخ نهاية الحجز",
      dataex:"1/2/2024",
      numday:"عدد ايام الحجز",
      nuy:10,
      vas:"توفير توصيل بالسيارة",
      yes:"نعم",
      name:"الاسم",
      user:"عبدالله احمد"
    },
   
  ];
  return (
    <React.Fragment>
      <div className="Detils">
        <div className="container">
          <div className="row">
            <div className="col-lg md-6">
              {detils.map((d) => {
                return (
                  <div key={d.id}>
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
                            ٍ
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
                            {" "}
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
                    {tabledata.map((t) => {
                      return (
                        <table
                          className="mt-4 tablee rounded-2 mb-3"
                          key={t.id}
                        >
                          <thead className=" p-3 hight-table text-white bgtable ">
                            <tr className="">
                              <th className="fw-medium p-2 ">{t.th}</th>
                              <th> </th>
                              <th> </th>
                              <th> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{t.td}</td>
                              <td>{t.tdd}</td>
                            </tr>
                            <tr>
                              <td>{t.dv}</td>
                              <td>{t.ds}</td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="col-lg md-6">
              {tabledata2.map((f) => {
                return (
                  <table
                    className="table table rounded-2 "
                    border={1}
                    key={f.id}
                  >
                    <thead className="">
                      <tr>
                        <th scope="col">{f.name}</th>
                        <th scope="col">{f.user}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row ">{f.th}</th>
                        <td>{f.td}</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.tdd}</th>
                        <td>لا</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.dv}</th>
                        <td>{f.day}</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.ds}</th>
                        <td>{f.data}</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.ex}</th>
                        <td>{f.dataex}</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.numday}</th>
                        <td>{f.nuy}</td>
                      </tr>
                      <tr>
                        <th scope="row">{f.vas}</th>
                        <td>{f.yes}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carddetils;
