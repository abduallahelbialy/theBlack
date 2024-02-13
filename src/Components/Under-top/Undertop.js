import React from 'react';
import '../Topbar/Topbar.css'
import logo from '../assent/Screenshot_2024-01-11_125829-removebg-preview.png'
import EgyptTime from './EgyptTime';
import UAETime from './UAETime';
import DateComponent from './DateComponent';
import Day from './Day';
const Undertop = () => {
  return (
    <React.Fragment>
      <div className="under-top">
        <div className="container">
          <div className="row">
            <div className="head-top">
              <div className="data">
                <div className="one">
                  {<DateComponent/>}
                </div>
                <div className="one">
                  {<Day/>}
                </div>
              </div>
              <div className="img-head">
                <img src={logo} alt="" />
              </div>
              <div className="data">
                <div className="one">
                {<EgyptTime/>}
                </div>
                <div className="one">
                  {<UAETime/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Undertop