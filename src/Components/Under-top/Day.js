import React, { useEffect, useState } from 'react'

const Day = () => {
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
       };
       return currentDate.toLocaleDateString("ar-EG", options);
     }
  return (
    <div>
      <span>اليوم {date}</span>
    </div>
  );
}

export default Day