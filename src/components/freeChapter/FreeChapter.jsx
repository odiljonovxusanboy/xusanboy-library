
import "./FreeChapter.css";

function FreeChapter() {
  return (
    <section className="free-chapter">
      <div className="free-chapter-box">
        <h2>Read a free chapter</h2>
        <div className="free-chapter-line"></div>

        <p>
          Making this the first true value generator on the Internet.
          It of over 200
          <br className="desktop-break" /> Latin words, combined with a handful.
        </p>

        <form
          className="free-chapter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your Email id..."
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default FreeChapter;
