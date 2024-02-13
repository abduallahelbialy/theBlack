import { Rating } from "@mui/material";
import imgcars from "../assent/carhome2.jpg";
import imgcarsa from "../assent/carhom1.jpg";
const servTwo = [
  {
    id: 1,
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
  {
    id: 2,
    title: "سيارة حديثة",
    imge: imgcarsa,
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
    id: 3,
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
];
export default servTwo;
