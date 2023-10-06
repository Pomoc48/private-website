import Navbar from "../components/navbar";
import Photo from "../assets/photo.webp";
import ISO from "../assets/projects/iso.webp";
import Logger from "../assets/projects/logger.webp";
import NoFussPrinting from "../assets/projects/nofussprinting.webp";
import Passer from "../assets/projects/passer.webp";
import ByHeart from "../assets/projects/byheart.webp";
import "./style.scss";
import { verticalScroll } from "../functions/scroll";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <article>
                    <p className="label-large primary-text">Hi, my name is</p>
                    <h1 className="display-small on-surface-text">Mikołaj Łukawski</h1>
                    <p className="body-large on-surface-text">
                        I am a Frontend Developer who specializes mainly in Flutter and React, and has a good
                        understanding of creating responsive, consistent and intuitive user interfaces.
                    </p>
                    <nav>
                        <button className="primary icon" onClick={() => verticalScroll("portfolio", 136)}>
                            <span className="material-symbols-outlined">collections_bookmark</span>
                            <p className="label-large">Check my projects</p>
                        </button>
                        <a className="tonal icon" href="mailto:lukawski.mikolaj@gmail.com">
                            <span className="material-symbols-outlined">alternate_email</span>
                            <p className="label-large">Contact me</p>
                        </a>
                    </nav>
                </article>
                <img src={Photo} width={400} height={400} alt="Mikołaj Łukawski" />
            </main>
            <div className="divider-container">
                <div className="outline-variant divider" />
            </div>
            <section id="portfolio">
                <h2 className="headline-small on-surface-text">Some of my previous work:</h2>
                <div className="gallery">
                    <div className="card">
                        <img src={ByHeart} alt="" loading="lazy" />
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
                                <span className="material-symbols-outlined">open_in_new</span>
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={NoFussPrinting} alt="" loading="lazy" />
                        <div className="details">
                            <h3 className="title-large on-surface-text">NoFussPrinting</h3>
                            <p className="body-medium on-surface-text">
                                Website design and code for NoFussPrinting, a 3D printing company.
                            </p>
                            <a
                                className="primary icon"
                                target="_blank"
                                href="https://nofussprinting.pl"
                                rel="noreferrer"
                            >
                                <span className="material-symbols-outlined">open_in_new</span>
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Passer} alt="" loading="lazy" />
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
                                <span className="material-symbols-outlined">open_in_new</span>
                                <p className="label-large">Website</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Logger} alt="" loading="lazy" />
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
                                <span className="material-symbols-outlined">open_in_new</span>
                                <p className="label-large">Play Store</p>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ISO} alt="" loading="lazy" />
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
                                <span className="material-symbols-outlined">open_in_new</span>
                                <p className="label-large">GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
