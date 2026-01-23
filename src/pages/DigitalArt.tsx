import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const DigitalArt = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; titletext: string; desc: string } | null>(null);

  const images = [
    {
      src: "/photos/digita/yumenosekai_fainaru.gif",
      titletext: "Yume no Sekai/Dream World (2025)",
      desc: "My drawing exercise. Created using Clip Studio Paint.",
    },

    {
      src: "/photos/digita/spcbi.gif",
      titletext: "Captain Spaceboy, from OMORI",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    },

    {
      src: "/photos/digita/kle.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/selfport.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/jaki.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/saya-sendiri_1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/export202401081434415690.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/artblock1.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/idkbro.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/strboenstr2.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/ikari.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/cat_resized.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/FROG_RESIZED.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/BZZZT_RESIZED.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/THE_SHENANIGANS_RESIZED.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/untitled-something.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled189.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled190.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled40.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled228.gif",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Artboard 1.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/desktopa.png",
      titletext: "Multiply (2023)",
      desc: "Abstract art that has no meaning.",
    },

    {
      src: "/photos/digita/Artboard 1a.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled38.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled39.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled42.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled78.png",
      titletext: "",
      desc: "",
    },

    {
      src: "/photos/digita/Untitled46.png",
      titletext: "",
      desc: "",
    },
  ];

  useEffect(() => {
    document.title = t("title.digital");
  }, [t]
  );

  return (
    <PageTransition>
    {/* // wish me luck semoga gridnya responsif */}
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
        <ImageModal src={modalData.src} titletext={modalData.titletext} desc={modalData.desc} onClose={() => setModalData(null)} />
      )}
    </div>
    </PageTransition>
  );
}

export default DigitalArt
