// import './App.css'
// import NavBar  from './NavBar'

// function App() {
//   return (
//     <div className='font-display'>
//       <>
//         <NavBar /> {/*Navigation Bar Component*/}
//       </>

//         <div className='xs:ml-5 xs:mr-5 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-10 lg:mr-10 lg:grid-cols-2 md:grid-cols-2 gap-5 welcome'>
//           <div className="content-center">
//             <h1 className="text-7xl font-bold leading-21">Hello, I'm <br>Akhmad Zaky Maulana</br></h1>
//             <h1 className="text-5xl font-light">and this is my portfolio.</h1>
//             <p className="leading-15 text-2xl">I'm an artist, musician, photographer, and a student.</p>
//             <br>
//             <button className="font-bold bg-ctp-text text-ctp-mantle pt-5 pb-5 pl-7 pr-7 rounded-2xl transition hover:bg-ctp-mantle hover:text-ctp-text text-2xl">About Me -{'>'}</button>
//             </br>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default App

// MASIH BINGUNG MASALAH NYA DI MANA... MINTA BANTUAN AI AH...
// YAA NAMANYA MASIH BELAJAR, PASTI AJA ADA TRIAL DAN ERROR NYA

// 08/12/25 FUCK I USE AI AGAIN 

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from "./pages/Home"
import DigitalArt from "./pages/DigitalArt";
import GraDsign from "./pages/GraDsign";
import TradArt from "./pages/TradArt";
import ThreeDee from "./pages/ThreeDee";
import Photo from "./pages/Photo";
import Disco from "./pages/Disco";
import Video from "./pages/Video";
import Projects from "./pages/Projects";
import About from "./pages/About";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition> <Home /> </PageTransition>} />
        <Route path='/digital' element={<PageTransition> <DigitalArt /> </PageTransition>} />
        <Route path='/traditional' element={<PageTransition> <TradArt /> </PageTransition>} />
        <Route path='/graphic' element={<PageTransition> <GraDsign /> </PageTransition>} />
        <Route path='/threedee' element={<PageTransition> <ThreeDee /> </PageTransition>} />
        <Route path='/photography' element={<PageTransition> <Photo /> </PageTransition>} />
        <Route path='/discography' element={<PageTransition> <Disco /> </PageTransition>} />
        <Route path='/video' element={<PageTransition> <Video /> </PageTransition>} />
        <Route path='/projects' element={<PageTransition> <Projects /> </PageTransition>} />
        <Route path='/about' element={<PageTransition> <About /> </PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='font-display'>
        <NavBar />
        <main><AnimatedRoutes /></main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

// function App() {
//   const location = useLocation();
//   return (
//       <div className='font-display'>
//         <NavBar />
//         <AnimatePresence mode='wait'>
//           <Routes location={location} key={location.pathname}> 
//             <Route path='/' element={<Home />} />
//             <Route path='/digital' element={<DigitalArt />} />
//             <Route path='/traditional' element={<TradArt />} />
//             <Route path='/graphic' element={<GraDsign />} />
//             <Route path='/threedee' element={<ThreeDee />} />
//             <Route path='/photography' element={<Photo />} />
//             <Route path='/discography' element={<Disco />} />
//             <Route path='/video' element={<Video />} />
//             <Route path='/about' element={<About />} />
//           </Routes>
//           </AnimatePresence>
//         <Footer />
//         </div>
//   );
// }

export default App;
