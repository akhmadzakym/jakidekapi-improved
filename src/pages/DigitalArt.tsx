import { useEffect } from "react";
import { useState } from "react";

import { useLanguage } from "../context/LanguageContext";
import ImageModal from "../components/ImageModal";
import PageTransition from "../components/PageTransition";

const DigitalArt = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string;} | null>(null);

  const images = [
    {
      src: "/photos/digita/yumenosekai_fainaru.gif",
    },

    {
      src: "/photos/digita/spcbi.gif",
    },

    {
      src: "/photos/digita/kle.gif",
    },

    {
      src: "/photos/digita/INTOTHEUNKNOWN_ANJA.png",
    },

    {
      src: "/photos/digita/INTOTHEUNKNOWN_TOBY.png",
    },

    {
      src: "/photos/digita/toby's-room-revised.gif",
    },

    {
      src: "/photos/digita/latihan_onepointperspective.gif",
    },

    {
      src: "/photos/digita/lukas-FILE-NGECRASH_rev2.gif",
    },

    {
      src: "/photos/digita/meettheartist_homophobeversion.gif"
    }

    {
      src: "/photos/digita/selfport.gif",
    },

    {
      src: "/photos/digita/jaki.gif",
    },

    {
      src: "/photos/digita/saya-sendiri_1.gif",
    },

    // {
    //   src: "/photos/digita/export202401081434415690.gif",
    // },

    {
      src: "/photos/digita/artblock1.gif",
    },

    // {
    //   src: "/photos/digita/idkbro.gif",
    // },

    // {
    //   src: "/photos/digita/strboenstr2.gif",
    // },

    {
      src: "/photos/digita/ikari.gif",
    },

    {
      src: "/photos/digita/cat_resized.gif",
    },

    {
      src: "/photos/digita/FROG_RESIZED.gif",
    },

    {
      src: "/photos/digita/BZZZT_RESIZED.gif",
    },

    {
      src: "/photos/digita/THE_SHENANIGANS_RESIZED.gif",
    },

    // {
    //   src: "/photos/digita/untitled-something.gif",
    // },

    {
      src: "/photos/digita/Untitled189.gif",
    },

    {
      src: "/photos/digita/Untitled190.gif",
    },

    // {
    //   src: "/photos/digita/Untitled40.png",
    // },

    // {
    //   src: "/photos/digita/Untitled228.gif",
    // },

    // {
    //   src: "/photos/digita/Artboard 1.png",
    // },

    // {
    //   src: "/photos/digita/desktopa.png",
    // },

    // {
    //   src: "/photos/digita/Artboard 1a.png",
    // },

    // {
    //   src: "/photos/digita/Untitled38.png",
    // },

    // {
    //   src: "/photos/digita/Untitled39.png",
    // },

    // {
    //   src: "/photos/digita/Untitled42.png",
    // },

    // {
    //   src: "/photos/digita/Untitled78.png",
    // },

    // {
    //   src: "/photos/digita/Untitled46.png",
    // },
  ];

  useEffect(() => {
    document.title = t("title.digital");
  }, [t]
  );

  return (
    <PageTransition>
    {/* wish me luck semoga gridnya responsif */}
    <div className="max-sm:ml-5 max-sm:mr-5 md:ml-10 md:mr-10 xs:ml-5 xs:mr-5 columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((img, index) => (
            <div key={index} className="mb-3 break-inside-avoid cursor-pointer" onClick={() => setModalData(img)}>
              <img src={img.src} className="w-full rounded-2xl transition hover:opactity-80" />
            </div>
          ))}

      {modalData && (
        <ImageModal src={modalData.src} onClose={() => setModalData(null)} />
      )}
    </div>
    </PageTransition>
  );
}

export default DigitalArt
