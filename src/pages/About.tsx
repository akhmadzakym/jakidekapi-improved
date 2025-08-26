const About = () => {
    return (
    <div className="xs:ml-5 xs:mr-5 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-10 lg:mr-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1 md:grid-cols-2">
        <div>
            <img className="rounded-2xl" src="assets/myself/steve_jobs_from_ohio.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0">Photo by Hernowo</p>
        </div>

        <div className="lg:text-lg xs:text-md sm:text-md">
            <h1 className="text-7xl font-black">About Me</h1>
                <p>Akhmad Zaky Maulana, born in 2008, is an Indonesian artist, musician, and photographer based in Bekasi. He is a student in SMK Al-Muhtadin and currently studies Visual Communication Design.</p>
                <p>Sometimes he locks himself in his room all day to create art that he hopes everyone will love. His interest in art started when he was 11 years old. His interest in art began when he started a small project making a Minecraft head avatar. The reason why he decided to pursue art because of his friend who can draw.</p>
                <p>For his musical output, he uses various psudeonyms such as 'user12052008', 'Failed Human Being', and 'broktin' depending on the genre. His primary psudeonym that he currently use is 'broktin'. He has a strong adherence to making electronic music.</p>
        </div>

         <div className="sm:block lg:hidden md:hidden">
            <img className="rounded-2xl" src="assets/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">Photo by Hernowo</p>
        </div>

        <div className="lg:text-lg xs:text-md sm:text-md">
            <p>Started making music at 14, he is highly influenced by a British electronic musician Richard David James also known as Aphex Twin. Akhmad Zaky Maulana also influenced by other musician like Squarepusher, Autechre, Imaginary Softwoods, and Steve Hauschildt.</p>
            <p>Photography is his favorite thing to do other than making music. He does not have a digital camera. So, he shoots everything on his phone. In his works, he shoots everything that he finds interesting. No wonder why his disk drives are always full of random photos. Sky, cloud, tall grass, and sun ray is his favorite subject to shoot. Because it's 'showing the peaceful side of Earth'.</p>
            <p>Besides his interests in arts and music, he also interested in 'computers' and programming. Programming became his interest because of the COVID-19 pandemic. He really doesn't know what to do other than finishing his online school assignment. He learned HTML because he finds it easy to learn. His HTML project was just a simple biography website with a poorly designed CSS. Until now, HTML becoming useful for him to showcasing his art on this website. </p>
        </div>

         <div className="xs:hidden sm:hidden md:block lg:block">
            <img className="rounded-2xl" src="assets/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">Photo by Hernowo</p>
        </div>
    </div>
    );
}

export default About