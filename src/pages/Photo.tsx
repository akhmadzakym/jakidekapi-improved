import { useEffect } from "react";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";

const Photo = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string;} | null>(null);

  const images = [
    {
      src: "/photos/photograp/IMG_4153.gif",
    },

    {
      src: "/photos/photograp/1.gif",
    },

    {
      src: "/photos/photograp/2.gif",
    },

    {
      src: "/photos/photograp/3.gif",
    },

    {
      src: "/photos/photograp/4.gif",
    },

    {
      src: "/photos/photograp/5.gif",
    },

    {
      src: "/photos/photograp/6.gif",
    },

    {
      src: "/photos/photograp/7.gif",
    },

    {
      src: "/photos/photograp/8.gif",
    },

    {
      src: "/photos/photograp/9.gif",
    },

    {
      src: "/photos/photograp/10.gif",
    },

    {
      src: "/photos/photograp/11.gif",
    },

    {
      src: "/photos/photograp/12.gif",
    },

    {
      src: "/photos/photograp/13.gif",
    },

    {
      src: "/photos/photograp/fauna1.gif",
    },

    {
      src: "/photos/photograp/fauna2.gif",
    },

    {
      src: "/photos/photograp/fauna3.gif",
    },

    {
      src: "/photos/photograp/fauna4.gif",
    },

    {
      src: "/photos/photograp/fauna5.gif",
    },

    {
      src: "/photos/photograp/fauna6.gif",
    },

    {
      src: "/photos/photograp/keran1.gif",
    },

    {
      src: "/photos/photograp/keran2.gif",
    },

    {
      src: "/photos/photograp/keran3.gif",
    },

    {
      src: "/photos/photograp/keran4.gif",
    },

    {
      src: "/photos/photograp/keran5.gif",
    },

    {
      src: "/photos/photograp/keran6.gif",
    },

    {
      src: "/photos/photograp/keran7.gif",
    },

    {
      src: "/photos/photograp/water1.gif",
    },

    {
      src: "/photos/photograp/water2.gif",
    },

    {
      src: "/photos/photograp/water3.gif",
    },

    {
      src: "/photos/photograp/water4.gif",
    },

    {
      src: "/photos/photograp/sunflower.gif",
    },

    {
      src: "/photos/photograp/brodukt1.gif",
    },

    {
      src: "/photos/photograp/brodukt2.gif",
    },

    {
      src: "/photos/photograp/assphoto.gif",
    },
  ]

  const images1 = [
    {
      src: "/photos/photograp/20230122_123917.gif",
    },

    {
      src: "/photos/photograp/LRM_20230718_161920.gif",
    },

    {
      src: "/photos/photograp/LRM_20230718_162037-(1).gif",
    },

    {
      src: "/photos/photograp/LRM_20230718_162048-(1).gif",
    },

    {
      src: "/photos/photograp/20250103_070841.gif",
    },

    {
      src: "/photos/photograp/20250103_070926.gif",
    },

    {
      src: "/photos/photograp/20250103_074422.gif",
    },

    {
      src: "/photos/photograp/20250103_070015.gif",
    },

    {
      src: "/photos/photograp/20221028_190445.gif",
    },

    {
      src: "/photos/photograp/20221120_054028.gif",
    },

    {
      src: "/photos/photograp/mtmerapi.gif",
    },

    {
      src: "/photos/photograp/pemecahombak.gif",
    },

  ]

  useEffect(() => {
    document.title = t("title.photography");
  }, [t]
  );


  return (
    <PageTransition>
    <div>
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
          <ImageModal src={modalData.src} onClose={() => setModalData(null)} />
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
          <ImageModal src={modalData.src} onClose={() => setModalData(null)} />
        )}
      </div>
    </div>
    </PageTransition>
  );
}

export default Photo
