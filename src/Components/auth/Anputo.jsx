import React from 'react'

const Anputo = ({label,...otherProps}) => {
     
  return (
    <React.Fragment>
      <div className="mb-4">
        <label
          for="formGroupExampleInput"
          className="form-label d-flex justify-content-start align-items-center"
        >
          {label}<span className="text-danger"></span>
        </label>

        <input className="form-control py-2" {...otherProps} />
      </div>
    </React.Fragment>
  );
}

export default Anputo
