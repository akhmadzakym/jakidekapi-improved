import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const ThreeDee = () => {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.3D");
      },[t]
    );

    return (
        <div className="max-sm:ml-5 max-sm:mr-5
                        md:ml-10 md:mr-10
                        xs:ml-5 xs:mr-5
                        columns-1 gap-3
                        sm:columns-2 md:columns-3 lg:columns-3
                        [&>img:not(:first-child)]:mt-3">   
            <img className="rounded-2xl" src="/photos/3d/A-fuckin-donut.gif"></img>
            <img className="rounded-2xl" src="/photos/3d/agatetothe-heaven.gif"></img>
            <img className="rounded-2xl" src="/photos/3d/res.gif"></img>
        </div>

    );
}
export default ThreeDee