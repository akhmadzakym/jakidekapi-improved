import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const TradArt = () => {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.traditional");
      },[t]
    );
    
    return (
            // wish me luck semoga gridnya responsif
        <div className="max-sm:ml-5 max-sm:mr-5
                        md:ml-10 md:mr-10
                        xs:ml-5 xs:mr-5
                        columns-1 gap-3
                        sm:columns-2 md:columns-3 lg:columns-3
                        [&>img:not(:first-child)]:mt-3">   
                <img className="rounded-2xl" src="/photos/traditional/IMG_005.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/IMG_010.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/IMG_011.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/mysgrl.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/taxidermy_cat.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/Untilted-2.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/A_C_ORJ.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/A_C_PZZ.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/A_C_ORR.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/skndchns.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/jxtadc.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/KAKENROOKEN_STIVLOBITS.GIF"></img>
                <img className="rounded-2xl" src="/photos/traditional/sunsetz.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/whoisthispersonthatiamdrawingidontknowhimforsureandidontknowwhyidrewhim.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/blood.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/reppdots.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/boy.gif"></img>
                <img className="rounded-2xl" src="/photos/traditional/m.gif"></img>
        </div>
    );
}

export default TradArt