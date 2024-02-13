import { Fragment } from "react";
import { useTranslation } from "react-i18next";
const Testi18n = () => {
      const { t, i18n } = useTranslation();
      const ChangeEn=()=>{
        i18n.changeLanguage("en")
      }
      const ChangeAr=()=>{
        i18n.changeLanguage("ar")
      }
    return (
      <Fragment>
        <div>
          
          <h1>{t("Welcome to React")}</h1>
        </div>
      </Fragment>
    );
}
 
export default Testi18n;