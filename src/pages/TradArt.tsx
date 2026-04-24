import { useEffect } from "react";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";
import OpenGraphMeta from "../components/OpenGraphMeta";

const TradArt = () => {
  const { t } = useLanguage();
    const [modalData, setModalData] = useState<{src:string; titletext:string; desc: string} | null>(null);

    const images = [
      {
        // Oenyglkos Vasarnap
        src: "/photos/traditional/IMG_011.gif",
        titletext: "",
        desc: "",
      },

      {
        // Mysterious Girl that I drew on middle school but i decided to remake it.
        src: "/photos/traditional/mysgrl.gif",
        titletext: "",
        desc: "",
      },

      {
        // Felis Catus.
        src: "/photos/traditional/taxidermy_cat.gif",
        titletext: "",
        desc: "",
      },

      {
        // 
        src: "/photos/traditional/Untilted-2.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/skndchns.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/jxtadc.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/KAKENROOKEN_STIVLOBITS.GIF",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/sunsetz.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/whoisthispersonthatiamdrawingidontknowhimforsureandidontknowwhyidrewhim.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/blood.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/boy.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/m.gif",
        titletext: "",
        desc: "",
      },
    ];

    const images1 = [
      {
        src: "/photos/traditional/A_C_ORJ.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/A_C_PZZ.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/A_C_ORR.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/reppdots.gif",
        titletext: "",
        desc: "",
      },

      {
        src: "/photos/traditional/IMG_010.gif",
        titletext: "",
        desc: "",
      },

    ];

  useEffect(() => {
    document.title = t("title.traditional");
  }, [t]
  );

  return (
    <PageTransition>
    <div>
      <OpenGraphMeta 
        title= {t("title.home")}
        desc= {t("meta.desc")}
        url= "https://jakidekapi.netlify.app"
        image= "https://jakidekapi.netlify.app/cards/sharing.png"
        siteName= "JAKIDEKAPI"
      />

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
        <ImageModal src={modalData.src} titletext={t(modalData.titletext)} desc={t(modalData.desc)} onClose={() => setModalData(null)} />
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
        <ImageModal src={modalData.src} titletext={t(modalData.titletext)} desc={t(modalData.desc)} onClose={() => setModalData(null)} />
      )}
      </div>
    </div>
    </PageTransition>
  );
}

export default TradArt
