import { Rating } from "@mui/material";
import tqueimg from '../assent/cars-1.webp'
const Taquem = [
  {
    id: 1,
    imge: tqueimg,
    title: "سيارة حديثة",
    ratiung: (
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />

        <Rating.Star filled={false} />
      </Rating>
    ),
    desc: "هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص هذاالنص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص",
  },
  {
    id: 2,
    imge: tqueimg,
    title: "سيارة حديثة",
    ratiung: (
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />

        <Rating.Star filled={false} />
      </Rating>
    ),
    desc: "هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص هذاالنص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص",
  },
  {
    id: 3,
    imge: tqueimg,
    title: "سيارة حديثة",
    ratiung: (
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />

        <Rating.Star filled={false} />
      </Rating>
    ),
    desc: "هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص هذاالنص هو مثال يمكن ان يستبدل فى نفس المساحة هذا النص",
  },
];
export default Taquem