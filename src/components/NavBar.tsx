import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar flex flex-row mt-5 mb-20 mr-10 ml-10 gap-5">
      <Link to="/" className="text-3xl font-bold">jakidekapi.net</Link>
      <Link to="/digital" className="font-light transition ease-in-out hover:text-3xl hover:font-bold">digital</Link>
      <Link to="/traditional" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">traditional</Link>
      <Link to="/graphic" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">graphic design</Link>
      <Link to="/threedee" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">3D</Link>
      <Link to="/photography" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">photography</Link>
      <Link to="/discography" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">discography</Link>
      <Link to="/video" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">video</Link>
      <Link to="/about" className="font-light transition duration-300 ease-in-out hover:text-3xl hover:font-bold">about</Link>
    </div>
  );
};

export default NavBar;