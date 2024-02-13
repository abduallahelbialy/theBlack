import React, { useEffect } from "react";
import contacte from "../Components/Fackers/contacte";
import "../Components/contact/contacte.css";
import inputbox from "../Components/Fackers/inputbox";
import Anputo from "../Components/auth/Anputo";
import Aos from "aos";
const Contact = () => {
   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);
  return (
    <React.Fragment>
      <div className="contacte">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between flex-wrap gbox ">
              {contacte.map((c) => {
                return (
                  <div className="box" key={c.id} data-aos="fade-{c.data}">
                    <div className="img-cont">
                      <img src={c.img} alt="" />
                    </div>
                    <p className="text-center text-danger fs-6 mt-1 fw-medium">
                      {c.conat}
                    </p>
                  </div>
                );
              })}
            </div>
            {inputbox.map((i) => {
              return (
                <React.Fragment>
                  <div key={i.id} className="text-center">
                    <p className="fs-5 fw-bold">{i.send}</p>
                  </div>
                  <div className="groub">
                    <div className="mb-4" data-aos="fade-{i.data}">
                      <label
                        for="formGroupExampleInput"
                        className="form-label d-flex justify-content-start align-items-center text-black fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {i.name}
                        <span className="text-danger">*</span>
                      </label>

                      <Anputo
                        id="formGroupExampleInput"
                        placeholder={i.placeholder}
                        type={i.type}
                      />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <div className="text-center teaxtar" data-aos="fade-{c.data}">
              <textarea placeholder="ادخل نص الرسالة"></textarea>
            </div>
            <div className="text-center btgroud">
              <button className=" text-white mt-1">ارسال</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
