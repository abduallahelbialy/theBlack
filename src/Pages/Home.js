import React, { useEffect } from 'react'
import '../Components/Home/home.css'
import heroimg from '../Components/assent/خلفيات-سيارات-مرسيدس-29-scaled.webp'
import ContentHome from '../Components/Home/ContentHome'
import HomeData from "../Components/Fackers/DataHome";
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <React.Fragment>
      <div className="header">
        <div className="img-hero" data-aos="fade-left">
          <img src={heroimg} alt="" className="imghero" />
        </div>
        <div className="container">
          <div className="row">
            <ContentHome HomeData={HomeData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home