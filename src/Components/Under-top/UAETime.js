import React, { useEffect, useState } from 'react'

const UAETime = () => {
     const [time, setTime] = useState(getFormattedTime());

     useEffect(() => {
       const intervalId = setInterval(() => {
         setTime(getFormattedTime());
       }, 1000);

       return () => clearInterval(intervalId);
     }, []);
     function getFormattedTime() {
       const currentDate = new Date();
       const uaeTime = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000); // توقيت الإمارات (UTC+4)

       let hours = uaeTime.getHours();
       const minutes = uaeTime.getMinutes();
       const seconds = uaeTime.getSeconds();
       const ampm = hours >= 12 ? "PM" : "AM";

       // تحويل الساعات إلى تنسيق 12 ساعة
       hours = hours % 12;
       hours = hours ? hours : 12; // 12 ساعة عندما تكون الساعة 0

       return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
         seconds < 10 ? "0" + seconds : seconds
       } ${ampm}`;
     }
  return <span>توقيت الامارات {time}</span>;
}

export default UAETime