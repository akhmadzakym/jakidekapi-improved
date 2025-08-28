// import { useEffect } from "react";

// const Disco = () => {
//     useEffect(() => {
//         document.title = "JAKIDEKAPI | Discography";
//       },[]
//     );

//     return (

//         // TODO: Usahakan embed Bandcamp itu responsif di desktop view dan mobile view
//     <>
//     <div className="xs:ml-5 xs:mr-5 md:ml-10 md:mr-10 flex flex-row flex-wrap gap-3">
//         <p className="md:text-5xl xs:text-3xl mb-5">My music is only available on <a className="decoration-2 underline font-bold" href="https://broktin.bandcamp.com/">Bandcamp</a> only. Please support me, I'm struggling :3</p>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=4195841262/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/the-eternal-dancer">The Eternal Dancer by Akhmad Zaky Maulana</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=1651332226/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/manifold-chapter-1-outsider">MANIFOLD Chapter 1 : Outsider by broktin</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=1830780947/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/dilapidated-mind">Dilapidated Mind by broktin</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=4206725470/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/broktinfhbu12052008">BROKTINFHBU12052008 by broktin, Failed Human Being, user12052008</a></iframe>

//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/track=2282741513/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/track/kamar-gelap-for-a-film-2">Kamar Gelap (for a film) by broktin</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/track=735872634/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/track/that-feeling-when-u-sit-on-the-tree-and-the-sun-shines-over-you-in-the-evening-2">that feeling when u sit on the tree and the sun shines over you in the evening by broktin</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=375130663/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/a-really-big-success-terra">A Really Big Success/Terra by broktin</a></iframe>
//             <iframe style={{ border: 0, width: "350px", height: "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=670240320/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://broktin.bandcamp.com/album/seasea-a-lot-of-modulationz">Seasea/A lot of modulationZ by broktin</a></iframe>
//         </div>
//         </>
//     );
// }
// export default Disco

// MASALAH LAGI ANJING
// GAK PANTES GW DIPANGGIL PROGRAMMER

// I TRIED
// I HAVE TO RELY ON AI TO SOLVE PROBLEMS
// AND I FUCKING HATE IT
// IT FEELS LIKE I'M A PIECE OF SHIT

import { useEffect } from "react";

const Disco = () => {
  useEffect(() => {
    document.title = "JAKIDEKAPI | Discography";
  }, []);

  // list of Bandcamp embed URLs (easier to maintain)
  const embeds = [
    "https://bandcamp.com/EmbeddedPlayer/album=4195841262/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=1651332226/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=1830780947/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=4206725470/size=large/bgcol=333333/linkcol=0687f5/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/track=2282741513/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/track=735872634/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=375130663/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
    "https://bandcamp.com/EmbeddedPlayer/album=670240320/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
  ];

  return (
    <div className="xs:mx-5 md:mx-10">
      <p className="md:text-5xl xs:text-3xl mb-5">
        My music is only available on{" "}
        <a
          className="decoration-2 underline font-bold"
          href="https://broktin.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Bandcamp
        </a>{" "}
        only. Please support me, I'm struggling :3
      </p>

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
  );
};

export default Disco;