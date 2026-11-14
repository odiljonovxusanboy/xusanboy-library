
import bobo from "../../assets/bobo.png";
import qr from "../../assets/qr.png";
import "./AboutAuthor.css";

function AboutAuthor() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="author-image">
          <img src={bobo} alt="Author" />
        </div>

        <div className="author-info">
          <h2>About Author</h2>

          <p>
            All the Lorem Ipsum generators on the Internet
            tend to repeated predefined chunks as necessary,
            making this the first true value generator on
            the Internet. It uses a dictionary of over 200
            Latin words, combined with a handful.
          </p>

          <div className="author-stats">
            <div>
              <h3>02</h3>
              <span>Books Published</span>
            </div>

            <div>
              <h3>4.5</h3>
              <span>User Reviews</span>
            </div>

            <div>
              <h3>04</h3>
              <span>Best Seller Awards</span>
            </div>
          </div>

          <div className="author-contact">
            <div className="qr-image">
              <img src={qr} alt="QR Code" />
            </div>

            <div>
              <h4>John Abraham, Ph.d</h4>
              <span>Mail : johnabraham@gmail.com</span>
              <span>Phone : (+2) 123 545 9000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;
