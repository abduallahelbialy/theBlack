import { Rating } from "@mui/material";
import imgcars from "../assent/carhome2.jpg";


 const HomeData = [
   {
     id: 1,
     title: "سيارة حديثة",
     t: "عرض التقيمات",
     imge: imgcars,
     tye: "كيا",
     year: "2024",
     nty: "سبورتاج",
     color: "احمر",
     numpeo: "4ركاب",
     ratiung: (
       <Rating>
         <Rating.Star />
         <Rating.Star />

         <Rating.Star filled={false} />
       </Rating>
     ),
     totle: "المبلغ اليومى للتأجير:",
   },
   {
     id: 2,
     title: "سيارة حديثة",
     imge: imgcars,
     tye: "كيا",
     year: "2024",
     nty: "سبورتاج",
     color: "احمر",
     numpeo: "4ركاب",
     data: "top",

     ratiung: (
       <Rating>
         <Rating.Star />
         <Rating.Star />

         <Rating.Star filled={false} />
       </Rating>
     ),
     totle: "المبلغ اليومى للتأجير:",
   },
   {
     id: 3,
     title: "سيارة حديثة",
     imge: imgcars,
     tye: "كيا",
     year: "2024",
     nty: "سبورتاج",
     color: "احمر",
     numpeo: "4ركاب",
     data: "left",

     ratiung: (
       <Rating>
         <Rating.Star />
         <Rating.Star />

         <Rating.Star filled={false} />
       </Rating>
     ),
     totle: "المبلغ اليومى للتأجير:",
   },
   {
     id: 4,
     title: "سيارة حديثة",
     imge: imgcars,
     tye: "كيا",
     year: "2024",
     nty: "سبورتاج",
     color: "احمر",
     numpeo: "4ركاب",
     data: "right",
     ratiung: (
       <Rating>
         <Rating.Star />
         <Rating.Star />

         <Rating.Star filled={false} />
       </Rating>
     ),
     totle: "المبلغ اليومى للتأجير:",
   },
 ];
export default HomeData;