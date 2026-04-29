import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";
import OpenGraphMeta from "../components/OpenGraphMeta";

const Announce: React.FC = () => {
    const {t} = useLanguage();

    useEffect(() => {
        document.title = t("title.announce");
    }, [t]
    );
return (
    <PageTransition>
        {/* announcements */}
        <h1 className="text-5xl text-center mt-10 mb-10">Announcements</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 md:gap-10 max-sm:gap-9 xs:ml-5 xs:mr-5 max-sm:ml-5 max-sm:mr-5 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-10 lg:mr-10">
        <OpenGraphMeta 
            title= {t("title.home")}
            desc= {t("meta.desc")}
            url= "https://jakidekapi.netlify.app"
            image= "https://jakidekapi.netlify.app/card/sharing.png"
            siteName= "JAKIDEKAPI"
        />

          <div>
            <img className="block w-full rounded-2xl" src="/photos/digita/strawberryera.gif"></img>
            </div>
            <div>
            <img className="w-2xl block" src="/svg/strawberryera_logo.svg"></img>
            <p className="mt-10">{t("announce.paragraph1")}</p>
            <p className="mt-5 text-2xl"><strong><i>{t("announce.paragraph2")}</i></strong></p>
            <p className="mt-5">{t("announce.paragraph3")}</p>
            <p className="font-bold text-2xl mt-5">{t("announce.paragraph4")}</p>
            </div>
        </div>

    </PageTransition>
    );
};
export default Announce;
