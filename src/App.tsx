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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';

import Home from "./pages/Home"
import DigitalArt from "./pages/DigitalArt";
import GraDsign from "./pages/GraDsign";
import TradArt from "./pages/TradArt";
import ThreeDee from "./pages/ThreeDee";
import Photo from "./pages/Photo";
import Disco from "./pages/Disco";
import Video from "./pages/Video";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className='font-display'>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/digital' element={<DigitalArt />} />
            <Route path='/traditional' element={<TradArt />} />
            <Route path='/graphic' element={<GraDsign />} />
            <Route path='/threedee' element={<ThreeDee />} />
            <Route path='/photography' element={<Photo />} />
            <Route path='/discography' element={<Disco />} />
            <Route path='/video' element={<Video />} />
            <Route path='/about' element={<About />} />
          </Routes>

          {/* TODO: Ukuran teks kecil (bila di mobile) */}
          <div>
            <center><p className="max-sm:text-xs md:text-xs text-ctp-subtext1 m-5">Coyright &copy; 2025 Akhmad Zaky Maulana. </p></center>
          </div>

      </div>
    </Router>

  );
}

export default App;