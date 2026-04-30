// I think, therefore i am.
// it is what it is.
// if it's not broke, don't fix it.
// FUCK YEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  NOW IT'S WORKING

// OleSwitcheroo is courtesy of GenAI and myself.
// I should learn to program by myself.
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function OleSwitcheroo() {
    const [frappe, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "frappe") {
            setDark(true);
                 document.documentElement.classList.add("frappe");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !frappe;
        setDark(newTheme);

        document.documentElement.classList.toggle("frappe", newTheme);
        localStorage.setItem("theme", newTheme ? "frappe" : "latte");
    };

    return <button className="relative flex items-center w-16 h-8 rounded-full bg-ctp-surface0 cursor-pointer transition " onClick={toggleTheme}>
        <span className={'absolute left-1 w-6 h-6 rounded-full bg-ctp-text transition-transform ' + (frappe ? 'translate-x-8' : '')}></span>
        <span className="text-xs z-10 ml-1"><Moon /></span>
        <span className="text-xs z-10 ml-auto mr-1"><Sun /></span>
        </button>;
}