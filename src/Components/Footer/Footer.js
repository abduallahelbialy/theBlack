import React from 'react'
import './footer.css'
import imgfooter from '../assent/gradient-car-service-logo_23-2149725129.avif'
import fot1 from '../assent/fot1.jpg'
import fot2 from '../assent/fot2.jpg'
import fot3 from '../assent/fot3.jpg'
import fot4 from '../assent/fot4.jpg'
import fot5 from '../assent/fot5.jpg'
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiAncientGateLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { FiChevronsLeft } from "react-icons/fi";
import { useLocation } from 'react-router-dom'



const Footer = () => {
  const location =useLocation()
  const footerma = location.pathname === "/creataccount" ;
  return (
    <React.Fragment>
      {footerma ? (
        <div className="footer " style={{ marginTop: "76rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <img src={imgfooter} alt="" className="bg-white img-foo " />
                  <h2 className="text-end me-4 text-dark">
                    شركة السهم الناري
                  </h2>
                  <p className="text-dark">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <h2 className="fs-7 mb-4 me-5 text-black">روابط سريعة</h2>
                  <ul className="link d-flex gap-5 align-item-center text-white ">
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      تسجيل كمستثمر
                    </li>
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      الشكاوى المقترحات
                    </li>
                  </ul>
                  <ul className="link d-flex gap-5 align-item-center">
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      التوظيف
                    </li>
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      طرق الدفع
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <h2 className="mb-4 text-black">تواصل معنا عبر</h2>
                  <span className="text-white">
                    {<MdOutlineLocalPhone className="text-danger fs-4 ms-1 " />}
                    01028924906
                  </span>
                  <div className="icons mt-3 fs-5 gap-4 d-flex">
                    <RiAncientGateLine className="text-primary " />
                    <FaWhatsapp className="text-success" />
                    <FaSnapchat className="text-warning" />
                    <FaInstagram className="text-danger" /> <IoLogoTiktok />{" "}
                    <FaFacebook className="text-primary" />
                    <FaPiggyBank className="text-secondary" />
                  </div>
                  <div className="icons mt-4 fs-4 gap-2 d-flex">
                    <img src={fot1} alt="" />
                    <img src={fot2} alt="" />
                    <img src={fot3} alt="" />
                    <img src={fot4} alt="" />
                    <img src={fot5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer " >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <img src={imgfooter} alt="" className="bg-white img-foo" />
                  <h2 className="text-end me-4 text-black">
                    شركة السهم الناري
                  </h2>
                  <p className="text-white">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <h2 className="fs-7 mb-4 me-5 text-black mt-4">روابط سريعة</h2>
                  <ul className="link d-flex gap-5 align-item-center text-white ">
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      تسجيل كمستثمر
                    </li>
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      الشكاوى المقترحات
                    </li>
                  </ul>
                  <ul className="link d-flex gap-5 align-item-center">
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      التوظيف
                    </li>
                    <li className="text-white">
                      <FiChevronsLeft className="text-danger" />
                      طرق الدفع
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="one-footer">
                  <h2 className="mb-4 text-black mt-4">تواصل معنا عبر</h2>
                  <span className="text-white">
                    {<MdOutlineLocalPhone className="text-danger fs-4 ms-1 " />}
                    01028924906
                  </span>
                  <div className="icons mt-3 fs-5 gap-4 d-flex">
                    <RiAncientGateLine className="text-primary " />
                    <FaWhatsapp className="text-success" />
                    <FaSnapchat className="text-warning" />
                    <FaInstagram className="text-danger" /> <IoLogoTiktok />{" "}
                    <FaFacebook className="text-primary" />
                    <FaPiggyBank className="text-secondary" />
                  </div>
                  <div className="icons mt-4 fs-4 gap-2 d-flex">
                    <img src={fot1} alt="" />
                    <img src={fot2} alt="" />
                    <img src={fot3} alt="" />
                    <img src={fot4} alt="" />
                    <img src={fot5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </React.Fragment>
  );
}

export default Footer