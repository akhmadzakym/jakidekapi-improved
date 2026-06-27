// MASALAH LAGI ANJING
// GAK PANTES GW DIPANGGIL PROGRAMMER

// I TRIED
// I HAVE TO RELY ON AI TO SOLVE PROBLEMS
// AND I FUCKING HATE IT
// IT FEELS LIKE I'M A PIECE OF SHIT

import React, { useEffect } from "react";

import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";

  // Embed Bandcamp sampah (musik gw sampah semua, ngapain ya gw buat musik?)
  const embeds = [
    "https://bandcamp.com/EmbeddedPlayer/album=1651332226/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=355229537/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=1570861712/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=4195841262/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=1830780947/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=4206725470/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/track=2282741513/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/track=735872634/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=375130663/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=670240320/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    ];

const Disco: React.FC = () => {
    const { t } =  useLanguage();

      useEffect(() => {
        document.title = t("title.music");
      },[t]
    );

  return (
    <PageTransition>
    <div className="max-sm:mx-5 xs:mx-5 md:mx-10">
      <p className="md:text-5xl xs:text-3xl mb-5">{t("disco.title")}</p>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {embeds.map((src, idx) => (
          <div key={idx} className="w-full">
            <div className="relative w-full aspect-square">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                src={src}
                seamless
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Disco;