import { useEffect } from "react";

const Video = () => {
      useEffect(() => {
        document.title = "JAKIDEKAPI | Video";
      },[]
    );

    return (
        <div className="ml-10 mr-10 flex flex-col flex-wrap gap-3">
            <center>
            <iframe width="996" height="560" src="https://www.youtube.com/embed/CWHXb7S4AHw" title="Man" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </center>
            <center>
            <iframe width="996" height="560" src="https://www.youtube.com/embed/DugDkLWyfqU" title="broktin - elektrionk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </center>
        </div>

    );
}

export default Video