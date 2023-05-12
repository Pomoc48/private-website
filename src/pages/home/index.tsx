import "./style.scss";

export default function HomePage() {
  return (
    <>
      <header className="surface">
        <p className="on-surface-text headline-medium">mLukawski</p>
      </header>
      <main>
        <article>
          <h1 className="display-small on-surface-text">Mikołaj Łukawski</h1>
          <p className="body-large on-surface-text">
            I'm a Frontend Developer, that mainly specializes in Flutter and React, and has a good understanding of
            creating responsive, consistent and intuitive UI.
          </p>
        </article>
        <img src="https://picsum.photos/400/400" alt="Logo" />
      </main>
    </>
  );
}
