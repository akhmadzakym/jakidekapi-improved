import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import PageTransition from "../components/PageTransition";

function Announce() {
    const {t} = useLanguage();

    useEffect(() => {
        document.title = t("title.announce");
    }, [t]
    );
return (
    <PageTransition>
        {/* announcements */}
        <h1 className="text-5xl text-center mt-10 mb-10">Announcements</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 md:gap-5 max-sm:gap-9 xs:ml-5 xs:mr-5 max-sm:ml-5 max-sm:mr-5 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-10 lg:mr-10">
          <div>
            <img className="block w-full rounded-2xl" src="/photos/digita/strawberryera.gif"></img>
            </div>
            <div>
            <img className="w-2xl block" src="/svg/strawberryera_logo.svg"></img>
            <p className="mt-10"><i>"Strawberry Era"</i> is my first ever movie and also my final assignment for my school. It's a documentary about today's youths being called as a "strawberry generation". This movie is 99% made by me. Even all of the soundtracks is made by me. Without using any A.I bullsh*t like Suno whatsoever.</p>
            <p className="mt-5 text-2xl"><strong><i>"If we do not improve and better ourselves, we would truly be crushed like strawberries"</i></strong></p>
            <p className="mt-5">Dokumenter ini mengamati dampak budaya terhadap julukan yang diberikan kepada generasi muda, seperti "Generasi Stroberi". Berdasarkan survei publik yang dilakukan oleh platform media di Taiwan, film ini mengeksplor alasan mengapa generasi muda dengan tegas menolak julukan tersebut. Melalui wawancara dan observasi sehari-hari, dokumenter ini membandingkan apakah julukan tersebut mencerminkan kenyataan atau justru memperkuat kesalahpahaman. Pada akhirnya, film ini mengajak penonton untuk mempertimbangkan kembali bagaimana bahasa membentuk identitas generasi dan persepsi budaya.</p>
            <p className="font-bold text-2xl mt-5">Coming soon on YouTube. TBA.</p>
            </div>
        </div>

    </PageTransition>
    );
};
export default Announce;