import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Home () {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.home");
      },[t]
    );



    return (
    <div className="font-display">

      <div className="xs:ml-5 xs:mr-5 max-sm:ml-5 max-sm:mr-5
                      sm:ml-5 sm:mr-5
                      md:ml-10 md:mr-10
                      lg:ml-10 lg:mr-10
                      lg:grid-cols-2 md:grid-cols-2 md:gap-5 max-sm:gap-9 welcome"> { /*AKAR MASALAH MENGAPA KALO DI BROWSER BERBASIS CHROME (DI MOBILE VIEW) WEBSITE INI JADI BERANTAKAN!!!!!!!! */ }
                                                                                { /*CHROME BIKIN MASALAH TERUS ANJING :( THAT'S WHY I USE FIREFOX*/ }

        <div className="max-sm:block xs:block sm:block md:hidden lg:hidden">
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
        </div>
               
        <div className="content-center">
          <h1 className="lg:text-7xl md:text-7xl sm:text-6xl xs:text-5xl max-sm:text-3xl font-bold">
            {t("home.title")}<br></br> {t("home.titlelanjutan")}
          </h1><br />
          
          <h2 className="lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl max-sm:text-2xl font-light">{t("home.subtitle")}</h2><br />
          <p className="text-2xl">
            {t("home.content")}
          </p>
          <br /><br />          

        <Link to="/about" className="font-bold bg-ctp-text text-ctp-mantle
                                     md:pt-5 md:pb-5 md:pl-7 md:pr-7 max-sm:pt-4 max-sm:pb-4 max-sm:pl-7 max-sm:pr-7
                                     rounded-2xl
                                     transition hover:bg-ctp-mantle hover:text-ctp-text md:text-2xl max-sm:text-lg">
          {t("home.button")}
          </Link>


        </div>
        <div className="max-sm:hidden xs:hidden sm:hidden md:block lg:block">
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
        </div>
      </div>
    </div>
    );
}

export default Home