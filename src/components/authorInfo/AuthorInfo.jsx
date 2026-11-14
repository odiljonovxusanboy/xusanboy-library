import bobo from "../../assets/oqsoch.jpg"
import "./AuthorInfo.css";

function AuthorInfo() {
  return (
    <section className="author-info">
      <div className="author-info-container">

        <div className="author-photo">
          <img
            src={bobo}
            alt="Dr. John Abraham"
          />
        </div>

        
        <div className="author-details">

          <div className="author-meta">
            <div className="meta-row">
              <strong>Country :</strong>
              <span>United Kingdom</span>
            </div>

            <div className="meta-row">
              <strong>Language :</strong>
              <span>English</span>
            </div>

            <div className="meta-row">
              <strong>Genre :</strong>
              <span>Historiography</span>
            </div>

            <div className="meta-row">
              <strong>Publication date :</strong>
              <span>1991</span>
            </div>

            <div className="meta-row">
              <strong>Share us on:</strong>
              <div className="author-share">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Twitter">♥</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>

          <div className="author-description">
            <h2>About Dr. John Abraham</h2>
            <div className="author-info-line"></div>

            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200
              Latin words, that can combined with a handful of model sentence
              structures.
            </p>

            <button type="button" className="author-contact-btn">
              Contact now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AuthorInfo;
