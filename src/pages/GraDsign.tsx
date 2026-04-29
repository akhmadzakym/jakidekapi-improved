import { useEffect } from "react";
import { useState } from "react";

import { useLanguage } from "../context/LanguageContext";
import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const GraDsign = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; titletext: string; desc: string } | null>(null);

  const images = [
    {
      src: "/photos/gradsign/AE_SIGN_POSTER.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/AE_PLUS_POSTER.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/it's-music-to-my-ears.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/oneohtrix-point-never.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/secrr.gif",
      titletext: "",
      desc: "",
    },

  ];

  const images1 = [
    {
      src: "/photos/gradsign/CATALOGUE.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/ulangan-poster-promosi-ppdb.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_5.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/gradsign/HOGGIES DOGGIES-01.jpg",
      titletext: "",
      desc: "",
    },
    {
      src: "/photos/gradsign/Artboard 1a.png",
      titletext: "",
      desc: "",
    },
    {
      src: "/photos/gradsign/READYROOOOOOOO-VER2.gif",
      titletext: "",
      desc: "",
    },

  ];

  useEffect(() => {
    document.title = t("title.graphic_design");
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

export default GraDsign