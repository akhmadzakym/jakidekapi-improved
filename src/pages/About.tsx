import { useEffect } from "react";

const About = () => {
      useEffect(() => {
        document.title = "JAKIDEKAPI | About";
      },[]
    );

    return (
    <div className="max-sm:ml-5 max-sm:mr-5
                    xs:ml-5 xs:mr-5
                    sm:ml-5 sm:mr-5
                    md:ml-10 md:mr-10
                    lg:ml-10 lg:mr-10
                    grid lg:grid-cols-2 gap-10 sm:grid-cols-1 md:grid-cols-2">
        <div>
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0">Photo by Hernowo</p>
        </div>

        <div className="lg:text-lg xs:text-base sm:text-base max-sm:text-sm">
            <h1 className="text-6xl font-black">About Me</h1><br></br>
                <p>Akhmad Zaky Maulana, born in 2008, is an Indonesian artist, musician, and photographer based in Bekasi. He is a student in SMK Al-Muhtadin and currently studies Visual Communication Design.</p><br></br>
                <p>Sometimes he locks himself in his room all day to create art that he hopes everyone will love. His interest in art started when he was 11 years old. His interest in art began when he started a small project making a Minecraft head avatar. The reason why he decided to pursue art because of his friend who can draw.</p><br></br>
                <p>For his musical output, he uses various psudeonyms such as 'user12052008', 'Failed Human Being', and 'broktin' depending on the genre. His primary psudeonym that he currently use is 'broktin'. He has a strong adherence to making electronic music.</p><br></br>
        </div>

         <div className="max-sm:block sm:block lg:hidden md:hidden"> {/*btw ini untuk gambar yang di mobile view*/}
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">Photo by Hernowo</p>
        </div>

        <div className="lg:text-lg xs:text-base sm:text-base max-sm:text-sm">
            <p>Started making music at 14, he is highly influenced by a British electronic musician Richard David James also known as Aphex Twin. Akhmad Zaky Maulana also influenced by other musician like Squarepusher, Autechre, Imaginary Softwoods, and Steve Hauschildt.</p><br></br>
            <p>Photography is his favorite thing to do other than making music. He does not have a digital camera. So, he shoots everything on his phone. In his works, he shoots everything that he finds interesting. No wonder why his disk drives are always full of random photos. Sky, cloud, tall grass, and sun ray is his favorite subject to shoot. Because it's 'showing the peaceful side of Earth'.</p><br></br>
            <p>Besides his interests in arts and music, he also interested in 'computers' and programming. Programming became his interest because of the COVID-19 pandemic. He really doesn't know what to do other than finishing his online school assignment. He learned HTML because he finds it easy to learn. His HTML project was just a simple biography website with a poorly designed CSS. Until now, HTML becoming useful for him to showcasing his art on this website. </p>
        </div>

         <div className="max-sm:hidden xs:hidden sm:hidden md:block lg:block"> {/*kalo ini untuk gambar desktop view*/}
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio1.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">Photo by Hernowo</p>
        </div>

         <div>
            <img className="rounded-2xl" src="/photos/myself/steve_jobs_from_ohio3.gif"></img>
            <p className="text-xs mt-3 text-ctp-subtext0 lg:text-right md:text-left sm:text-left">Photo by Hernowo</p>
        </div>


        <div>
            <h1 className="text-6xl font-black">Credits</h1><br></br>
            <p className="text-2xl">Frontend Developer</p>
            <p>Akhmad Zaky Maulana</p><br></br>

            <p className="text-2xl">Portrait Photo</p>
            <p>Hernowo</p>
        </div>
    </div>
    );
}

export default About