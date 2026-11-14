
import book1 from "../../assets/Book1.png";
import book2 from "../../assets/image.png";
import "./Books.css";

function Books() {
  return (
    <section className="books-section">
      <h2 className="section-title">Author’s Book Includes</h2>

      <div className="books-container">
        <div className="book-card">
          <div className="book-cover">
            <img src={book1} alt="Atomic One’s" />
          </div>

          <div className="book-details">
            <h3>Atomic One’s</h3>
            <p>
              Many variations of passages of Lorem Ipsum
              using arise from alteration in some form.
            </p>

            <div className="book-stats">
              <span>🟡 Pages:</span>
              <span>🟡 Length:</span>
            </div>

            <div className="book-values">
              <span>586 pages</span>
              <span>10 Hours</span>
            </div>

            <button>Order Today</button>
          </div>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <img src={book2} alt="The Dark Light" />
          </div>

          <div className="book-details">
            <h3>The Dark Light</h3>
            <p>
              Many variations of passages of Lorem Ipsum
              using arise from alteration in some form.
            </p>

            <div className="book-stats">
              <span>🟡 Pages:</span>
              <span>🟡 Length:</span>
            </div>

            <div className="book-values">
              <span>586 pages</span>
              <span>10 Hours</span>
            </div>

            <button>Order Today</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Books;
