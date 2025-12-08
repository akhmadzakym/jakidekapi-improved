import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import ImageModal from "../components/ImageModal";

const ThreeDee = () => {
    const { t } =  useLanguage();
    const [modalData, setModalData] = useState<{src:string; caption: string} | null>(null);

    const images = [
      {
        src: "/photos/3d/A-fuckin-donut.gif",
        caption: "",
      },
      
      {
        src: "/photos/3d/agatetothe-heaven.gif",
        caption: "",
      },
      
      {
        src: "/photos/3d/res.gif",
        caption: "",
      },
    ];

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
        {images.map((img, index) => (
        <img key={index} src={img.src} className="rounded-2xl cursor-pointer transition hover:opacity-80" onClick={() => setModalData(img)} />
      ))}

      {modalData && (
        <ImageModal src={modalData.src} caption={modalData.caption} onClose={() => setModalData(null)} />
      )}
        </div>

    );
}
export default ThreeDee