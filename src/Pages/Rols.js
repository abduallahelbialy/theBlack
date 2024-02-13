import React from "react";
import "../Components/who/who.css";
import flag from "../Components/assent/flag-3d-round-250.png";
import flagtwo from "../Components/assent/flag-round-250.png";
const Rols = () => {
  return (
    <React.Fragment>
      <div className="Branches">
        <div className="container">
          <div className="row">
            <p className="text-center">
              هذا النص هو مثال يمكن ان يستبدل فى نفس المساحة
            </p>
            <div className="text-Branches d-flex justify-content-center gap-3">
              <div className="countone d-flex gap-1">
                <div className="flag-img">
                  <img src={flagtwo} alt="" />
                </div>
                <p className="text-danger fw-medium ">
                  المملكة العربية السعودية
                </p>
              </div>
              <div className="countone d-flex  gap-1 ">
                <div className="flag-img">
                  <img src={flag} alt="" />
                </div>
                <p className="text-danger fw-medium">
                  الامارات العربية المتحدة
                </p>
              </div>
            </div>
            <div className="map d-flex justify-content-between mt-3">
              <div className="map-s">
                <iframe
                  title="Google Map"
                  className="mapss"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944273.282288918!2d55.72849192663893!3d23.871732705297443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1706779401057!5m2!1sar!2seg"
                  width="500"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="text-center mt-2 fs-5">
                  المملكة العربية السعودية جدة
                </p>
              </div>
              <div className="map-s">
                <iframe
                  className="mapss"
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.3057079264!2d56.590470095184806!3d24.336138810224497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2z2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1706779631907!5m2!1sar!2seg"
                  width="500"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="text-center mt-2 fs-5">
                  الامارات العربية المتحده السعودية جدة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rols;
