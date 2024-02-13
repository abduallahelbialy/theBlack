import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Undertop from "./Components/Under-top/Undertop";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import Servces from "./Pages/Servces";
import Createacount from "./Components/Createacount/Createacount";
import Cars from "./Pages/Cars";
import ForgetPass from "./Components/Login/ForgetPass";
import Vaildtion from "./Components/Login/Vaildtion";
import ConferPass from "./Components/Login/ConferPass";
import Confercreat from "./Components/Createacount/Confercreat";
import Myaccout from "./Components/MyAccount/Myaccout";
import Footer from "./Components/Footer/Footer";
import Upfooter from "./Components/Footer/Upfooter";
import ErrorPage from "./Pages/ErrorPage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Carddetils from "./Components/MyAccount/Carddetils";
import TquemDetils from "./Components/MyAccount/TquemDetils";
import AskDatDetils from "./Components/MyAccount/AskDatDetils";
import SittingAcoount from "./Components/MyAccount/SittingAcoount";
import Notfiction from "./Components/Notfiaction/Notfiction";
import Contact from "./Pages/Contact";
import Who from "./Pages/Who";
import Policy from "./Pages/Policy";
import Rols from "./Pages/Rols";
import Number from "./Pages/Number";
import NumGold from "./Pages/NumGold";
import serDate from './Components/Fackers/Sevdata'
import Curent from "./Pages/Curent";
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    document.getElementsByTagName("body")[0].style.direction =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Undertop />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/serv" element={<Servces serDate={serDate} />}></Route>
          <Route path="/curent" element={<Curent/>}></Route>
          <Route path="/conercreat" element={<Confercreat />}></Route>
          <Route path="/creataccount" element={<Createacount />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/forget" element={<ForgetPass />}></Route>
          <Route path="/vaild" element={<Vaildtion />}></Route>
          <Route path="/confer" element={<ConferPass />}></Route>
          <Route path="/myaccout" element={<Myaccout />}></Route>
          <Route path="detilsCard" element={<Carddetils />}></Route>
          <Route path="/tque" element={<TquemDetils />}></Route>
          <Route path="/AskDatl" element={<AskDatDetils />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/polcy" element={<Policy />}></Route>
          <Route path="/bransh" element={<Rols />}></Route>
          <Route path="/number" element={<Number />}></Route>
          <Route path="/numbergold" element={<NumGold />}></Route>
          <Route path="/Who" element={<Who />}></Route>
          <Route path="/noft" element={<Notfiction />}></Route>
          <Route path="/SitAcount/*" element={<SittingAcoount />}></Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <Upfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
