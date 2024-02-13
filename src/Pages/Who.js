import React, { useEffect } from 'react'
import imgWho from '../Components/assent/sess-1.jpg'
import imgWhot from '../Components/assent/ses-2.jpg'
import imgWhott from '../Components/assent/sess-3.jpg'
import '../Components/who/who.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Who = () => {
  
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);

  return (
    <React.Fragment>
      <div className="who">
        <div className="container">
          <div className="row">
            <div className="massege d-flex align-items-center ">
              <div className="img-who">
                <img src={imgWho} alt="" />
              </div>
              <div className="text-who" data-aos="fade-left">
                <h1 className="fs-6">الرسالة</h1>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في
                  نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                  يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                  إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
              </div>
            </div>
            <div className="masseget d-flex align-items-center mt-4 ">
              <div className="text-who">
                <h1 className="fs-5">الرؤية</h1>
                <p className="twotext fd" data-aos="fade-left">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في
                  نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                  يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                  إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
              </div>
              <div className="img-who">
                <img src={imgWhot} alt="" />
              </div>
            </div>
            <div className="massege d-flex align-items-center mt-4 ">
              <div className="img-who">
                <img src={imgWhott} alt="" />
              </div>
              <div className="text-who" data-aos="fade-left">
                <h1 className="fs-5">كلمة المدير التنفيذى</h1>
                <p className="fs-5 fd" data-aos="fade-right">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في
                  نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                  يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                  إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
              </div>
            </div>
            <div
              className="masseget d-flex align-items-center mt-4 "
              data-aos="fade-bottom"
            >
              <div className="text-who">
                <h1 className="fs-5">القيم</h1>
                <p className="twotext fd">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في
                  نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                  يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                  إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
              </div>
              <div className="img-who">
                <img src={imgWhot} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Who
