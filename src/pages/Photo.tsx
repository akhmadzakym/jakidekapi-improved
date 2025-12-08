import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import ImageModal from "../components/ImageModal";

const Photo = () => {
  const { t } = useLanguage();
  const [modalData, setModalData] = useState<{ src: string; caption: string } | null>(null);

  const images = [
    {
      src: "/photos/photograp/IMG_4153.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/1.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/2.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/3.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/4.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/5.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/6.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/7.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/8.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/9.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/10.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/11.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/12.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/13.gif",
      caption: "",
    },

  ]

  const images1 = [
    {
      src: "/photos/photograp/20230122_123917.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_161920.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_162037-(1).gif",
      caption: "",
    },

    {
      src: "/photos/photograp/LRM_20230718_162048-(1).gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20250103_070841.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20250103_070926.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20250103_074422.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20250103_070015.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20221028_190445.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/20221120_054028.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/mtmerapi.gif",
      caption: "",
    },

    {
      src: "/photos/photograp/pemecahombak.gif",
      caption: "",
    },

  ]

  useEffect(() => {
    document.title = t("title.photography");
  }, [t]
  );


  return (
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
          <ImageModal src={modalData.src} caption={modalData.caption} onClose={() => setModalData(null)} />
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
          <ImageModal src={modalData.src} caption={modalData.caption} onClose={() => setModalData(null)} />
        )}


        {/*
        <img className="rounded-2xl" src="/photos/photograp/20230122_123917.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/LRM_20230718_161920.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/LRM_20230718_162037-(1).gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/LRM_20230718_162048-(1).gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20250103_070841.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20250103_070926.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20250103_074422.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20250103_070015.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20221028_190445.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/20221120_054028.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/mtmerapi.gif"></img>
        <img className="rounded-2xl" src="/photos/photograp/pemecahombak.gif"></img>
        */}
      </div>
    </div>

  );
}

export default Photo
