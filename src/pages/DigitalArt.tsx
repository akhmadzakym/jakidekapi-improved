import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const DigitalArt = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; caption: string } | null>(null);

  const images = [
    {
      src: "/photos/digita/spcbi.gif",
      caption: "fkajsdkjflksd",
    },

    {
      src: "/photos/digita/kle.gif",
      caption: "",
    },

    {
      src: "/photos/digita/selfport.gif",
      caption: "",
    },

    {
      src: "/photos/digita/export202401081434415690.gif",
      caption: "",
    },

    {
      src: "/photos/digita/artblock1.gif",
      caption: "",
    },

    {
      src: "/photos/digita/idkbro.gif",
      caption: "",
    },

    {
      src: "/photos/digita/strboenstr2.gif",
      caption: "",
    },

    {
      src: "/photos/digita/ikari.gif",
      caption: "",
    },

    {
      src: "/photos/digita/cat_resized.gif",
      caption: "",
    },

    {
      src: "/photos/digita/FROG_RESIZED.gif",
      caption: "",
    },

    {
      src: "/photos/digita/BZZZT_RESIZED.gif",
      caption: "",
    },

    {
      src: "/photos/digita/THE_SHENANIGANS_RESIZED.gif",
      caption: "",
    },

    {
      src: "/photos/digita/untitled-something.gif",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled189.gif",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled190.gif",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled40.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled228.gif",
      caption: "",
    },

    {
      src: "/photos/digita/Artboard 1.png",
      caption: "",
    },

    {
      src: "/photos/digita/desktopa.png",
      caption: "",
    },

    {
      src: "/photos/digita/Artboard 1a.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled38.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled39.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled42.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled78.png",
      caption: "",
    },

    {
      src: "/photos/digita/Untitled46.png",
      caption: "",
    },
  ];

  useEffect(() => {
    document.title = t("title.digital");
  }, [t]
  );

  return (
    <PageTransition>
    // wish me luck semoga gridnya responsif
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
    </PageTransition>
  );
}

export default DigitalArt
