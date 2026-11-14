import img1 from "../../assets/Articles1.png"
import img2 from "../../assets/Articles2.png"
import img3 from "../../assets/Articles3.png"
import "./Articles.css";

function Articles() {
  return (
    <section className="articles">
      <h2 className="articles-title">Articles & Resources</h2>

      <div className="articles-container">

        <div className="article-card">
          <div className="article-image">
            <img src={img1} alt="Woman reading a book" />
          </div>

          <div className="article-content">
            <h3>The energy efficiency offers hydrotherapy or swim</h3>

            <p>
              The point of using Lorem Ipsum hiter of
              that using making it look like others
              readable will get end.
            </p>

            <div className="article-bottom">
              <a href="#">Read more</a>
              <span>Author - 23.05.2022</span>
            </div>
          </div>
        </div>

        <div className="article-card">
          <div className="article-image">
            <img src={img2} alt="Book on a table" />
          </div>

          <div className="article-content">
            <h3>Release of Letraset sheets tools containing passages</h3>

            <p>
              The point of using Lorem Ipsum hiter of
              that using making it look like others
              readable will get end.
            </p>

            <div className="article-bottom">
              <a href="#">Read more</a>
              <span>Author - 23.05.2022</span>
            </div>
          </div>
        </div>

        <div className="article-card">
          <div className="article-image">
            <img src={img3} alt="Woman reading outdoors" />
          </div>

          <div className="article-content">
            <h3>The energy efficiency offers hydrotherapy or swim</h3>

            <p>
              The point of using Lorem Ipsum hiter of
              that using making it look like others
              readable will get end.
            </p>

            <div className="article-bottom">
              <a href="#">Read more</a>
              <span>Author - 23.05.2022</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Articles;
