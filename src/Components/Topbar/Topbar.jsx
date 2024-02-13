import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";

import "./Topbar.css";
import Selectuser from "./Selectuser";
import { Link } from "react-router-dom";
const Topbar = () => {
     
      const ChangeEn=()=>{
        i18n.changeLanguage("ar")
      }
      const ChangeAr=()=>{
        i18n.changeLanguage("en")
      }
const { t, i18n } = useTranslation();
const [selectedCity, setSelectedCity] = useState(null);

const handleChangeLanguage = (code) => {
  i18n.changeLanguage(code);
  // Add your custom logic for each language if needed
  if (code === "ar") {
    console.log("Arabic language selected");
  } else if (code === "en") {
    console.log("English language selected");
  }
};  
  return (
    <React.Fragment>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <ul className="icon-top my-2">
              <Selectuser />

              <li>
                <Link to="/noft" className="text-white">
                  <IoMdNotificationsOutline className="iconss" />
                  {t("notifications")}
                </Link>
              </li>
              <li>
                <HiCurrencyDollar className="iconss" />
                الريال السعودى
              </li>
              <li>
                <div className="card-lang flex justify-content-center bg-transparent">
                  <select
                    className="p-invalid w-full md:w-14rem "
                    onChange={(e) => handleChangeLanguage(e.target.value)}
                    value={selectedCity}
                  >
                    <option value="ar">اللغه العربيه</option>
                    <option value="en">الانجليزية</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
