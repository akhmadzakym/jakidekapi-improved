import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const GraDsign = () => {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.graphic_design");
      },[t]
    );

    return (
        <div className="max-sm:ml-5 max-sm:mr-5
                        md:ml-10 md:mr-10
                        xs:ml-5 xs:mr-5
                        columns-1 gap-3
                        sm:columns-2 md:columns-3 lg:columns-3
                        [&>img:not(:first-child)]:mt-3">   
                <img className="rounded-2xl" src="/photos/gradsign/AE_SIGN_POSTER.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/AE_PLUS_POSTER.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/it's-music-to-my-ears.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/oneohtrix-point-never.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/CATALOGUE.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/secrr.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/READYROOOOOOOO-VER2.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/ulangan-poster-promosi-ppdb.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/Artboard 1a.png"></img>
                <img className="rounded-2xl" src="/photos/gradsign/HOGGIES DOGGIES-01.jpg"></img>
                <img className="rounded-2xl" src="/photos/gradsign/Mockup_A4_Brochure_1.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/Mockup_A4_Brochure_2.gif"></img>
                <img className="rounded-2xl" src="/photos/gradsign/Mockup_A4_Brochure_5.gif"></img>
        </div>
    );
}

export default GraDsign