import React from 'react'
import Anputo from '../auth/Anputo';
import { Link } from 'react-router-dom';
import create from "../Fackers/CreateAcountData";

const OneData = () => {
  return (
    <div className="bacone">
      <form className="form-creatt">
        {create.map((c) => {
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
              to="/"
            >
              حفظ
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OneData
