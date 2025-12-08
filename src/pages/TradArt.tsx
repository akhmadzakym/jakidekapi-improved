import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const TradArt = () => {
  const { t } = useLanguage();
    const [modalData, setModalData] = useState<{src:string; caption: string} | null>(null);

    const images = [
      {
        src: "/photos/traditional/IMG_011.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/mysgrl.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/taxidermy_cat.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/Untilted-2.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/skndchns.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/jxtadc.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/KAKENROOKEN_STIVLOBITS.GIF",
        caption: "",
      },

      {
        src: "/photos/traditional/sunsetz.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/whoisthispersonthatiamdrawingidontknowhimforsureandidontknowwhyidrewhim.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/blood.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/boy.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/m.gif",
        caption: "",
      },
    ];

    const images1 = [
      {
        src: "/photos/traditional/A_C_ORJ.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/A_C_PZZ.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/A_C_ORR.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/reppdots.gif",
        caption: "",
      },

      {
        src: "/photos/traditional/IMG_010.gif",
        caption: "",
      },

    ];

  useEffect(() => {
    document.title = t("title.traditional");
  }, [t]
  );

  return (
    <PageTransition>
    <div>
      <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">Personal Works</h1>
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

      <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">School Assignments</h1>
      <div className="max-sm:ml-5 max-sm:mr-5
                        md:ml-10 md:mr-10
                        xs:ml-5 xs:mr-5
                        columns-1 gap-3
                        sm:columns-2 md:columns-3 lg:columns-3
                        [&>img:not(:first-child)]:mt-3">
        
      {images1.map((img, index) => (
        <img key={index} src={img.src} className="rounded-2xl cursor-pointer transition hover:opacity-80" onClick={() => setModalData(img)} />
      ))}

      {modalData && (
        <ImageModal src={modalData.src} caption={modalData.caption} onClose={() => setModalData(null)} />
      )}
      </div>
    </div>
    </PageTransition>
  );
}

export default TradArt
