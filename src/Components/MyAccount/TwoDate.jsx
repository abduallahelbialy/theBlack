import React from 'react'
import Anputo from '../auth/Anputo';
import { Link } from 'react-router-dom';
import twodate from '../Fackers/DateTwo'

const TwoDate = () => {
  return (
    <React.Fragment>
      <div className="bacone">
        <form className="form-creatt">
          {twodate.map((c) => {
            return (
              <React.Fragment>
                <div className="mb-4" key={c.id}>
                  <label
                    for="formGroupExampleInput"
                    className="form-label d-flex justify-content-start align-items-center text-black fw-medium"
                    style={{ fontSize: "13px" }}
                  >
                    {c.name}
                    <span className="text-danger">*</span>
                  </label>

                  <Anputo
                    id="formGroupExampleInput"
                    placeholder={c.palceholdeer}
                    type={c.type}
                  />
                </div>
              </React.Fragment>
            );
          })}

          <div className="loginbtn mt-4">
            <div className="d-flex justify-content-center mt-3  ">
              <Link
                className="bg-danger text-white  mb-2 fw-500 save"
                to="/conercreat"
              >
                تأكيد
              </Link>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TwoDate
