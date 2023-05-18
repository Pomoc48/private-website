import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import "./style.scss";
import { verticalScroll } from "../../functions/scroll";

export default function Navbar() {
    const [elevated, setElevated] = useState(false);
    const [open, setOpen] = useState(false);

    console.log("render");

    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset !== 0) {
                setElevated(true);
            } else {
                setElevated(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [elevated]);

    let headerClass = "surface";

    if (elevated) {
        headerClass += " elevated";
    }

    if (open) {
        headerClass += " elevated open";
    }

    return (
        <header className={headerClass}>
            <div className="container">
                <button className="logo" onClick={() => verticalScroll("root", 64)}>
                    <img src={Logo} alt="Logo" height={32} />
                    <p className="primary-text title-medium">mLukawski</p>
                </button>
                <nav>
                    <a className="text icon" href="https://github.com/Pomoc48">
                        <span className="material-symbols-outlined">code</span>
                        <p className="label-large">GitHub Profile</p>
                    </a>
                    <a className="text icon" href="https://www.linkedin.com/in/mkljlkwsk/">
                        <span className="material-symbols-outlined">work</span>
                        <p className="label-large">linkedIn Page</p>
                    </a>
                </nav>
            </div>
            <button onClick={() => setOpen(!open)}>
                <span className="material-symbols-outlined primary-text">menu</span>
            </button>
        </header>
    );
}
