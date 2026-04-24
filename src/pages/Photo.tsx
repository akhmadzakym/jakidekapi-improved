import { useEffect } from "react";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";
import OpenGraphMeta from "../components/OpenGraphMeta";

const Photo = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; titletext: string; desc: string } | null>(null);

  const images = [
    {
      src: "/photos/photograp/IMG_4153.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/3.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/4.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/5.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/6.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/7.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/8.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/9.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/10.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/11.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/12.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/13.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna3.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna4.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna5.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/fauna6.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran3.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran4.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran5.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran6.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/keran7.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/water1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/water2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/water3.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/water4.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/sunflower.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/brodukt1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/brodukt2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/assphoto.gif",
      titletext: "",
      desc: "",
    },
  ]

  const images1 = [
    {
      src: "/photos/photograp/20230122_123917.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_161920.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_162037-(1).gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_162048-(1).gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20250103_070841.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20250103_070926.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20250103_074422.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20250103_070015.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20221028_190445.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/20221120_054028.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/mtmerapi.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/photograp/pemecahombak.gif",
      titletext: "",
      desc: "",
    },

  ]

  useEffect(() => {
    document.title = t("title.photography");
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

      <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">Using DSLR</h1>
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


      <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">Using Phone Camera</h1>
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

export default Photo
