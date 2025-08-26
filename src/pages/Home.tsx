import { useEffect } from "react";

function Home () {
  useEffect(() => {
    document.title = "JAKIDEKAPI | Home";
  },[]
);

    return (
    <div className="font-display">

      <div className="xs:ml-5 xs:mr-5
                      sm:ml-5 sm:mr-5
                      md:ml-10 md:mr-10
                      lg:ml-10 lg:mr-10
                      lg:grid-cols-2 md:grid-cols-2 md:gap-5 xs:gap-9 welcome">

        <div className="xs:block sm:block md:hidden lg:hidden">
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
        </div>
               
        <div className="content-center">
          <h1 className="lg:text-7xl md:text-7xl sm:text-6xl xs:text-5xl font-bold">
            Hello, I'm <br /> Akhmad Zaky Maulana
          </h1><br />
          
          <h2 className="lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl font-light">and this is my portfolio.</h2><br />
          <p className="text-2xl">
            I'm an artist, musician, photographer, and a student.
          </p>
          <br />

          <button className="font-bold bg-ctp-text text-ctp-mantle
                              pt-5 pb-5 pl-7 pr-7
                              rounded-2xl
                              transition hover:bg-ctp-mantle hover:text-ctp-text text-2xl">
            About Me -{'>'}
          </button>

        </div>
        <div className="xs:hidden sm:hidden md:block lg:block">
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
        </div>
      </div>
    </div>
    );
}

export default Home