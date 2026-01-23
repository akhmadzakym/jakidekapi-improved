import { useEffect } from "react";
//TODO: add useLanguage.
import { useLanguage } from "../context/LanguageContext";

import PageTransition from "../components/PageTransition"

function Projects() {
  const { t } = useLanguage();

  const projects_website = [
    {
      title: "JAKIDEKAPI (2023 Prototype)",
      desc: "'Hmm... Why don't i make my own portfolio website for my artworks? I know how to do it.' is the thing that popped up on my head. The reason why i made this website is because my teacher tell us students to make our own portfolio. While other students uploaded their artworks on Instagram, I chose to put it on my website instead. And here's the prototype. And fun fact: On this website I finally using <div> tag for the first time...",
      url: "/oldies/jakidekapi_2023/",

    },

    {
      title: "JAKIDEKAPI (2024 early version)",
      desc: "This one is a bit better because I had the motivation to improve it. Decided to make it 'responsive' using JavaScript. It's time-consuming.",
      url: "/oldies/jakidekapi_2024-early/",

    },

    {
      title: "JAKIDEKAPI (2024)",
      desc: "This is the final version.",
      url: "/oldies/jakidekapi2024/",
    },
  ];

  const projects_early = [
    {
      title: "blockytube (2021)",
      desc: "This might be the earliest project that i have. So, the whole idea of this project is I want to make a website like YouTube but it's targeted to Minecraft player so they can post their Minecraft video. It's unfinished.",
      url: "/oldies/blockytube/"
    },
    {
      title: "user12052008 homepage (2022)",
      desc: "This website will make your eyeball singe. 'user12052008' is my alias for my early music project.",
      url: "/oldies/user12052008_old/"
    },
    {
      title: "user12052008 homepage (2022 better version)",
      desc: "I decided to remake it from scratch and it turns out to be a bit better than before. This website originally hosted on 000webhost. But now it has been shut down because 000webhost is closing. Thank you for giving me a free website hosting. You'll be remembered. Now I'm on Netlify.",
      url: "/oldies/user12052008_new/"
    }
  ];

  const projects_misc = [
    {
      title: "TigaJS",
      desc: "A three.js test.",
      url: "https://tigajs.netlify.app/"

    }
  ]

  useEffect(() => {
    document.title = t("title.projects");
  }, [t]
  );

 return (
    <PageTransition>
      <div className="p-10 space-y-10">
          <div className="text-5xl font-bold">
          <h1>{t("projects.title1")}</h1>
        </div>

        <div className="text-ctp-subtext0">
          <p>{t("projects.subtext1")}</p>
        </div>

        {projects_website.map((p, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-ctp-subtext1">{p.desc}</p>

            <div className="w-full h-[70vh] rounded-xl overflow-hidden border">
              <iframe
                src={p.url}
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <a
              href={p.url}
              target="_blank"
              className="inline-block mt-2 underline text-sm"
            >
              Open in new tab →
            </a>
          </div>
        ))}

        <div className="text-5xl font-bold">
          <h1>{t("projects.title2")}</h1>
        </div>

        <div className="text-ctp-subtext1">
          <p>{t("projects.subtext2")}</p>
        </div>
        
        {projects_early.map((p, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-ctp-subtext1">{p.desc}</p>

            <div className="w-full h-[70vh] rounded-xl overflow-hidden border">
              <iframe
                src={p.url}
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <a
              href={p.url}
              target="_blank"
              className="inline-block mt-2 underline text-sm"
            >
              Open in new tab →
            </a>
          </div>
        ))}

        <div className="text-5xl font-bold">
          <h1>Miscellanous</h1>
        </div>

        <div className="text-ctp-subtext1">
          <p>I don't even know what i'm making.</p>
        </div>

        {projects_misc.map((p, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-ctp-subtext1">{p.desc}</p>

            <div className="w-full h-[70vh] rounded-xl overflow-hidden border">
              <iframe
                src={p.url}
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <a
              href={p.url}
              target="_blank"
              className="inline-block mt-2 underline text-sm"
            >
              Open in new tab →
            </a>
          </div>
        ))}



      </div>
    </PageTransition>
  );
};

export default Projects;