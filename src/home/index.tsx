import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ISO from "../assets/projects/iso.webp";
import Logger from "../assets/projects/logger.webp";
import NoFussPrinting from "../assets/projects/nofussprinting.webp";
import Passer from "../assets/projects/passer.webp";
import ByHeart from "../assets/projects/byheart.webp";
import PrzepisyNaZdrowie from "../assets/projects/przepisynazdrowie.webp";
import "./style.scss";
import { verticalScroll } from "../functions/scroll";
import { ReactComponent as CollectionsIcon } from "../assets/icons/collections_bookmark.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/alternate_email.svg";
import { ReactComponent as OpenInNewIcon } from "../assets/icons/open_in_new.svg";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <article>
                    <p className="label-large primary-text">Hi, my name is</p>
                    <h1 className="display-small on-surface-text">Mikołaj Łukawski</h1>
                    <p className="body-large on-surface-text">
                        I am a Frontend Developer specializing in Flutter and React,
                        with the knowledge of creating responsive,
                        consistent and intuitive user interfaces.
                    </p>
                    <nav>
                        <button className="primary icon" onClick={() => verticalScroll("portfolio", 136)}>
                            <CollectionsIcon />
                            <p className="label-large">Check my projects</p>
                        </button>
                        <a className="tonal icon" href="mailto:lukawski.mikolaj@gmail.com">
                            <EmailIcon />
                            <p className="label-large">Contact me</p>
                        </a>
                    </nav>
                </article>
                <img src="photo.webp" width={400} height={400} alt="Mikołaj Łukawski" />
            </main>
            <div className="divider-container">
                <div className="outline-variant divider" />
            </div>
            <section id="portfolio">
                <h2 className="headline-small on-surface-text">Some of my previous work:</h2>
                <div className="gallery">
                    <div className="card">
                        <div className="wrapper">
                            <img src={PrzepisyNaZdrowie} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">Przepisy Na Zdrowie</h3>
                            <p className="body-medium on-surface-text">
                                WordPress website for a dietitian, based on an existing design.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://przepisynazdrowie.com/"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src={ByHeart} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">byHeart</h3>
                            <p className="body-medium on-surface-text">
                                The design and functionality of a flashcards language learning app.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://byheart.io/"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src={NoFussPrinting} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">NoFussPrinting</h3>
                            <p className="body-medium on-surface-text">
                                Website design and code for a 3D printing company.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://nofussprinting.pl"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src={Passer} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">Passer</h3>
                            <p className="body-medium on-surface-text">
                                Free, open-source and self-hosted password manager.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://passer.mlukawski.com"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src={Logger} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">Logger</h3>
                            <p className="body-medium on-surface-text">
                                Flutter mobile and web app, used for tracking life events or activities.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.mlukawski.logger"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">Play Store</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src={ISO} alt="" loading="lazy" width={360} height={250} />
                        </div>
                        <div className="details">
                            <h3 className="title-large on-surface-text">Iso</h3>
                            <p className="body-medium on-surface-text">
                                Mobile game with an orthogonal camera projection that changes colors and perspectives.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://github.com/Pomoc48/iso-game"
                                rel="noreferrer"
                            >
                                <OpenInNewIcon />
                                <p className="label-large">GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
