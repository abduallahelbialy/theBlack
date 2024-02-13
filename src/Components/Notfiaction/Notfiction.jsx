import React, { useState } from "react";
import "./Notf0.css";
import remove from "../Fackers/Remove";
import { useTranslation } from "react-i18next";


const Notfiction = () => {
  const [notifications, setNotifications] = useState(remove);

  const handleRemoveNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };
const { t } = useTranslation();


  return (
    <React.Fragment>
      <div className="notfal">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-center fs-5 mb-3">{t("notifications")}</h1>
              
            </div>
            {notifications.map((m) => (
              <div className="d-flex justify-content-between noba " key={m.id}>
                <p className="text-center">{m.pa}</p>
                <span
                  className="bg-danger text-center text-white fs-4 rounded"
                  onClick={() => handleRemoveNotification(m.id)}
                >
                  {m.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notfiction;
