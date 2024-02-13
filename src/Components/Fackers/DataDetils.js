import { Rating } from "@mui/material";
import imgcars from '../assent/cc.jpg'
let detils = [
  {
    id: 1,
    title: "سيارة حديثة",
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
];
export default detils