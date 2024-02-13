import React from 'react'
import '../Components/Home/home.css'
const Servces = ({ serDate }) => {
  return (
    <React.Fragment>
      <div className="serverss">
        <div className="container">
          <div className="row">
            {serDate.map((s) => {
              return (
                <React.Fragment>
                  <div
                    key={s.id}
                    className="col-lg-4 col-md-6 mb-3"
                    data-aos="fade-{s.data}"
                  >
                    <div className="card mb-3">
                      <div className="ser-img">
                        <img src={s.img} alt="" className="sera" />
                      </div>
                      <p className="mt-1 p-1">{s.text}</p>
                      <div className="text-center tobun ">
                        <button className="btn btn-danger px-5 mb-2 bser">
                          {s.more}
                        </button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="ser-img">
                        <img src={s.img} alt="" className="sera" />
                      </div>
                      <p className="mt-1 p-1">{s.text}</p>
                      <div className="text-center tobun ">
                        <button className="btn btn-danger px-5 mb-2 bser">
                          {s.more}
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Servces
