import React, { useEffect, useState } from 'react'

const EgyptTime = () => {
    const [time, setTime] = useState(getFormattedTime());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(getFormattedTime());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);
   function getFormattedTime() {
     const currentDate = new Date();
     const egyptTime = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);

     let hours = egyptTime.getHours();
     const minutes = egyptTime.getMinutes();
     const seconds = egyptTime.getSeconds();
     const ampm = hours >= 12 ? "PM" : "AM";

     // تحويل الساعات إلى تنسيق 12 ساعة
     hours = hours % 12;
     hours = hours ? hours : 12; // 12 ساعة عندما تكون الساعة 0

     return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
       seconds < 10 ? "0" + seconds : seconds
     } ${ampm}`;
   }
  return (
    <div>
      <span>توقيت مصر {time}</span>
    </div>
  );
}

export default EgyptTime