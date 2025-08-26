function Home () {
    return (
    <div className="font-display">
      <div className="xs:ml-5 xs:mr-5 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-10 lg:mr-10 lg:grid-cols-2 md:grid-cols-2 gap-5 welcome">
        <div className="content-center">
          <h1 className="text-7xl font-bold leading-21">
            Hello, I'm <br /> Akhmad Zaky Maulana
          </h1>
          
          <h2 className="text-5xl font-light">and this is my portfolio.</h2>
          <p className="leading-15 text-2xl">
            I'm an artist, musician, photographer, and a student.
          </p>
          <br />

          <button className="font-bold bg-ctp-text text-ctp-mantle pt-5 pb-5 pl-7 pr-7 rounded-2xl transition hover:bg-ctp-mantle hover:text-ctp-text text-2xl">
            About Me -{'>'}
          </button>

        </div>
        <div>
            <img className="rounded-2xl" src="src/assets/myself/steve_jobs_from_ohio.gif"></img>
        </div>
      </div>
    </div>
    );
}

export default Home