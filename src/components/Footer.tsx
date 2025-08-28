import LangSwitcher from "./LangSwitch";

const Footer = () => {
  return (
    <footer className="bg-ctp-crust text-ctp-subtext1 py-5 md:px-20 max-sm:px-3 md:mt-17 max-sm:mt-41 border-t-2 font-display">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-5">

        <p className="md:text-sm max-sm:text-xs">
          © {new Date().getFullYear()} Akhmad Zaky Maulana. All rights reserved.
        </p>

        <p className="text-sm italic">Made using React & Tailwind :3</p>
      </div>
      
      <div className="flex flex-row px-5 my-5 items-center justify-between">
        <ul className="grid gap-2 text-sm">
            <li className="md:text-2xl max-sm:text-base font-bold">My Socials</li>
            <li>Instagram</li>
            <li>Bluesky</li>
            <li>Bandcamp</li>
        </ul>

        <div className="self-start">
            <div className="grid grid-cols-2 gap-3">
                <p className="text-right self-center max-sm:text-xs">Change Language:</p>
                <LangSwitcher />
            </div>
        </div>
      </div>

        <div className="md:mt-20 md:mb-10 max-sm:mt-10 px-5">
            <img src="/svg/jakidekapi_text_only.svg"></img>
        </div>


    </footer>
  );
};

export default Footer;
