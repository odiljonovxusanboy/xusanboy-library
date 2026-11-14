
import "./Chapter.css";

function Chapter() {
  return (
    <section className="chapter">
      <h2 className="chapter-title">The Chapter Includes</h2>

      <div className="chapter-container">
        <div className="chapter-card">
          <h3>
            <span>Chapter- 01</span>
            Get Started Intro
          </h3>

          <p>
            Making this the first true value generator on the Internet.
            It of over 200 Latin words, combined with a handful.
          </p>

          <div className="chapter-info">
            <span><i></i> Pages : <small>85pages</small></span>
            <span><i></i> Length : <small>1 Hour 15 mins</small></span>
          </div>
        </div>

        <div className="chapter-card">
          <h3>
            <span>Chapter- 02</span>
            Create a Massive Content
          </h3>

          <p>
            Making this the first true value generator on the Internet.
            It of over 200 Latin words, combined with a handful.
          </p>

          <div className="chapter-info">
            <span><i></i> Pages : <small>85pages</small></span>
            <span><i></i> Length : <small>1 Hour 15 mins</small></span>
          </div>
        </div>

        <div className="chapter-card">
          <h3>
            <span>Chapter- 03</span>
            Maintaining the Creative Arcs
          </h3>

          <p>
            Making this the first true value generator on the Internet.
            It of over 200 Latin words, combined with a handful.
          </p>

          <div className="chapter-info">
            <span><i></i> Pages : <small>85pages</small></span>
            <span><i></i> Length : <small>1 Hour 15 mins</small></span>
          </div>
        </div>

        <div className="chapter-card">
          <h3>
            <span>Chapter- 04</span>
            The Conclusion
          </h3>

          <p>
            Making this the first true value generator on the Internet.
            It of over 200 Latin words, combined with a handful.
          </p>

          <div className="chapter-info">
            <span><i></i> Pages : <small>85pages</small></span>
            <span><i></i> Length : <small>1 Hour 15 mins</small></span>
          </div>
        </div>
      </div>

      <div className="chapter-bottom">
        <button>Start a 15-Days Free Trail</button>
        <p>Short description about each chapter</p>
        <span>
          <a href="#">Have any questions?</a> Contact us
        </span>
      </div>
    </section>
  );
}

export default Chapter;
