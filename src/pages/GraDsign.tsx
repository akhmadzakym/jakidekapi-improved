import { useEffect } from "react";
import { useState } from "react";

import { useLanguage } from "../context/LanguageContext";
import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const GraDsign = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; } | null>(null);

  const images = [
    {
      src: "/photos/gradsign/AE_SIGN_POSTER.gif",
    },

    {
      src: "/photos/gradsign/AE_PLUS_POSTER.gif",
    },

    {
      src: "/photos/gradsign/it's-music-to-my-ears.gif",
    },

    // {
    //   src: "/photos/gradsign/oneohtrix-point-never.gif",
    // },

    // {
    //   src: "/photos/gradsign/secrr.gif",
    // },

  ];

  const images1 = [
    {
      src: "/photos/gradsign/CATALOGUE.gif",
    },

    {
      src: "/photos/gradsign/ulangan-poster-promosi-ppdb.gif",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_1.gif",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_2.gif",
    },

    {
      src: "/photos/gradsign/Mockup_A4_Brochure_5.gif",
    },

    {
      src: "/photos/gradsign/HOGGIES DOGGIES-01.jpg",
    },
    {
      src: "/photos/gradsign/Artboard 1a.png",
    },
    {
      src: "/photos/gradsign/READYROOOOOOOO-VER2.gif",
    },

  ];

  const images2 = [
    {
      src: "/photos/gradsign/Tahun Baru Hijriyah (27 Juni 2025).png",
    },


    {
      src: "/photos/gradsign/Hari Anak Nasional (23 Juli 2025).png",
    },

    {
      src: "/photos/gradsign/Hari Kemerdekaan Indonesia (17 Agustus 2025).png",
    },

    {
      src: "/photos/gradsign/Maulid Nabi Muhammad (05 September 2025).png",
    },
  ]

  useEffect(() => {
    document.title = t("title.graphic_design");
  }, [t]
  );

  return (
    <PageTransition>
      <div>
        <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">Personal Works</h1>
          <div className="max-sm:ml-5 max-sm:mr-5 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5 columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-3">
            {images.map((img, index) => (
              <div key={index} className="mb-3 break-inside-avoid cursor-pointer" onClick={() => setModalData(img)}>
                <img src={img.src} className="w-full rounded-2xl transition hover:opactity-80" />
              </div>
            ))}
          </div>

        <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">School Assignments</h1>
          <div className="max-sm:ml-5 max-sm:mr-5 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5 columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-3">
            {images1.map((img, index) => (
              <div key={index} className="mb-3 break-inside-avoid cursor-pointer" onClick={() => setModalData(img)}>
                <img src={img.src} className="w-full rounded-2xl transition hover:opactity-80" />
              </div>
            ))}
          </div>

        <h1 className="text-5xl text-center max-sm:ml-5 mt-10 mb-10 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5">Praktik Kerja Lapangan</h1>
          <div className="max-sm:ml-5 max-sm:mr-5 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5 columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
            {images2.map((img, index) => (
              <div key={index} className="mb-3 break-inside-avoid cursor-pointer" onClick={() => setModalData(img)}>
                <img src={img.src} className="w-full rounded-2xl transition hover:opactity-80" />
              </div>
            ))}

            {modalData && (
              <ImageModal src={modalData.src} onClose={() => setModalData(null)} />
            )}
          </div>
      </div>
    </PageTransition>
  );
}

export default GraDsign