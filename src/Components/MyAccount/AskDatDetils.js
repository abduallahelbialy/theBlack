import React from 'react'
import ask from "../Fackers/AskDetils";
import "./myaccout.css";


const AskDatDetils = () => {
  return (
    <React.Fragment>
      {ask.map((k) => {
        return (
          <div className="Ask" key={k.id}>
            <div className="container">
              <div className="row">
                <div className="col-lg col-md-6">
                  <div className="cardAsk d-flex gap-2">
                    <div className="ask-img">
                      <img src={k.img} alt="" />
                    </div>
                    <div className="detAsk">
                      <p className="fw-bold">{k.title}</p>
                      <p className="text-black-50">{k.dataask}</p>
                      <p className="border"></p>
                      <div className="d-flex gap-1 groud">
                        <p>{k.case}</p>
                        <p className="text-danger fw-medium">{k.ok}</p>
                      </div>
                    </div>
                  </div>
                  <div className="cardAsk d-flex gap-2 mt-2">
                    <div className="detAsk">
                      <p className="fw-bold p-1">{k.title2}</p>
                      <p className="p-1">{k.ok2}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6">
                  <table className="table table-hover " border={1}>
                    <thead className="p-1">
                      <tr>
                        <th scope="col">{k.name}</th>
                        <th scope="col"></th>
                        <th scope="col">{k.nameAbdal}</th>
                      </tr>
                    </thead>
                    <tbody className="p-1">
                      <tr>
                        <td className="fw-semibold">{k.thpePhon}</td>
                        <td></td>
                        <td>{k.typephone}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">{k.typeConatnet} </td>
                        <td></td>
                        <td>{k.proplem}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">{k.pransh}</td>
                        <td></td>
                        <td>{k.gad}</td>
                      </tr>
                      <p className="p-1 fw-semibold "> {k.mess}</p>
                      <p className="p-1 text-blance text-black-50">{k.ok2}</p>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default AskDatDetils
