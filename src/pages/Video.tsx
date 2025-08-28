import { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    document.title = "JAKIDEKAPI | Video";
  }, []);

  const videos = [
    { id: "CWHXb7S4AHw", title: "Man" },
    { id: "DugDkLWyfqU", title: "broktin - elektrionk" },
  ];

  return (
    <div className="md:mx-10 xs:mx-5 flex flex-col gap-6">
      {videos.map((video, idx) => (
        <div key={idx} className="relative w-full aspect-video overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default Video;

// I'm a disgrace to this world.