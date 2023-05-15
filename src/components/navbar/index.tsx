import { useEffect, useState } from "react";
import "./style.scss";

export default function Navbar() {
    const [elevated, setElevated] = useState(false);

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

    return (
        <header className={elevated ? "surface elevated" : "surface"}>
            <div className="container">
                <p className="on-surface-text headline-small">mLukawski</p>
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
        </header>
    );
}
