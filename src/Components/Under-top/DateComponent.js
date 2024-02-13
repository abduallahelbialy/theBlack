import React, { useEffect, useState } from "react";

const DateComponent = () => {
  const [date, setDate] = useState(getFormattedDate());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  function getFormattedDate() {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("ar-EG", options);
  }
  return (
    <div>
      <span>{date} </span>
    </div>
  );
};

export default DateComponent;
