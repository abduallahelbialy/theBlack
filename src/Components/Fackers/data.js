import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoMaleFemale } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";

const data = [
  {
    u: 1,
    abdallah: "عبدالله احمد",
    name: "الاسم ثلاثى",
    mail: "Abdallah@gmail.come",
    post: "البريد الالكترونى",
    phone: "رقم الجوال",
    num: "01028924906",
    icon1: <CiUser />,
    icon2: <IoIosSend />,
    icon3: <FiPhone />,
  },
  {
    u: 2,
    abdallah: "السعودية ",
    name: "العنوان",
    post: "تاريـخ الميلاد",
    mail: "1-12-1998",
    phone: "الجنس",
    num: "انثى",
    icon1: <CiLocationOn />,
    icon2: <LiaBirthdayCakeSolid />,
    icon3: <IoMaleFemale />,
  },
  {
    u: 3,
    name: "الجنسية",
    abdallah: "سعودى",
    mail: "رقم الهوية",
    post: "0000000",
    phone: "تاريخ انتهاء الهوية",
    num: "30/11/2023",
    icon1: <RiPagesFill />,
    icon2: <MdEventNote />,
    icon3: <LiaBirthdayCakeSolid />,
  },
  {
    u: 4,
    name: "نوع الرخصة",
    abdallah: "رخصة سير",
    mail: "رقم الرخصة",
    post: "0000000",
    phone: "تاريخ انتهاء الرخصة",
    num: "30/11/2023",
    icon1: <RiPagesFill />,
    icon2: <MdEventNote />,
    icon3: <LiaBirthdayCakeSolid />,
  },
  {
    u: 5,
    name: "نوع جهة العمل",
    abdallah: " مكتب",
    mail: "اسم جهة العمل",
    post: "مكتب الموارد البشرية",
    icon1: <RiPagesFill />,
    icon2: <MdEventNote />,
   
  },
];
export default data;
