import { useEffect } from "react";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";

const ThreeDee = () => {
    const { t } =  useLanguage();
    const [modalData, setModalData] = useState<{src:string;} | null>(null);

    const images = [
      {
        src: "/photos/3d/A-fuckin-donut.gif",
      },
      
      {
        src: "/photos/3d/agatetothe-heaven.gif",
      },
      
      {
        src: "/photos/3d/res.gif",
      },

      {
        src: "/photos/3d/1.png",
      },

      {
        src: "/photos/3d/2.png",
      },

      {
        src: "/photos/3d/3.png",
      },

      {
        src: "/photos/3d/4.png",
      },

      {
        src: "/photos/3d/5.png",
      }
    ];

      useEffect(() => {
        document.title = t("title.3D");
      },[t]
    );

    return (
      <PageTransition>
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
        <ImageModal src={modalData.src} onClose={() => setModalData(null)} />
      )}
        </div>
      </PageTransition>
    );
}
export default ThreeDee