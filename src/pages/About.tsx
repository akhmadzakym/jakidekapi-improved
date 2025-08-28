import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.about");
      },[t]
    );


    return (
    <div className="max-sm:ml-5 max-sm:mr-5
                    xs:ml-5 xs:mr-5
                    sm:ml-5 sm:mr-5
                    md:ml-10 md:mr-10
                    lg:ml-10 lg:mr-10
                    grid lg:grid-cols-2 gap-10 sm:grid-cols-1 md:grid-cols-2">
        <div>
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0">{t("about.credits")}</p>
        </div>

        <div className="lg:text-lg xs:text-base sm:text-base max-sm:text-sm">
            <h1 className="text-6xl font-black">{t("about.title1")}</h1><br></br>
                <p>{t("about.paragraph1")}</p><br></br>
                <p>{t("about.paragraph2")}</p><br></br>
                <p>{t("about.paragraph3")}</p><br></br>
        </div>

         <div className="max-sm:block sm:block lg:hidden md:hidden"> {/*btw ini untuk gambar yang di mobile view*/}
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">{t("about.credits")}</p>
        </div>

        <div className="lg:text-lg xs:text-base sm:text-base max-sm:text-sm">
            <p>{t("about.paragraph4")}</p><br></br>
            <p>{t("about.paragraph5")}</p><br></br>
            <p>{t("about.paragraph6")}</p>
        </div>

         <div className="max-sm:hidden xs:hidden sm:hidden md:block lg:block"> {/*kalo ini untuk gambar desktop view*/}
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">{t("about.credits")}</p>
        </div>

         <div>
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio3.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">{t("about.credits")}</p>
        </div>


        <div>
            <h1 className="text-6xl font-black">{t("about.title2")}</h1><br></br>
            <p className="text-2xl">Frontend Developer</p>
            <p>Akhmad Zaky Maulana</p><br></br>

            <p className="text-2xl">Portrait Photo</p>
            <p>Hernowo</p>
        </div>
    </div>
    );
}

export default About