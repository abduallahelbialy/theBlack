import React, { useEffect } from 'react'
import '../Components/who/who.css'
import numc from '../Components/Fackers/number';
import { Link } from 'react-router-dom';
import cardnum from '../Components/Fackers/cardnum';
import Aos from 'aos';
const Number = () => {
   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);
  return (
    <React.Fragment>
      <div className="numbers">
        <div className="container">
          <div className="row">
            {numc.map((n) => {
              return (
                <div className="text-number" key={n.id}>
                  <p className="text-center fs-5">{n.pad}</p>
                </div>
              );
            })}
            {cardnum.map((c) => {
              return (
                <div className="col-lg-3 col-md-6 p-2" data-aos={c.data}>
                  <div className="cardnum" key={c.id}>
                    <div>
                      <img src={c.img} alt="" />
                    </div>
                    <div className="titlenum">{c.num}</div>
                    <div className="contentnum">
                      <p className='p-1'> {c.pag}</p>
                      <div className="text-center mb-2">
                        <Link to="/numbergold">
                          <button className="btn btn-danger px-5 mb-2">
                            {c.more}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Number
