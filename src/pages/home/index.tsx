import Navbar from "../../components/navbar";
import Photo from "../../assets/photo.jpg";
import "./style.scss";

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
                        <button className="primary icon">
                            <span className="material-symbols-outlined">collections_bookmark</span>
                            <p className="label-large">Check my projects</p>
                        </button>
                        <a className="tonal icon" href="mailto:lukawski.mikolaj@gmail.com">
                            <span className="material-symbols-outlined">alternate_email</span>
                            <p className="label-large">Contact me</p>
                        </a>
                    </nav>
                </article>
                <img src={Photo} width={400} height={400} alt="Logo" />
            </main>
        </>
    );
}
