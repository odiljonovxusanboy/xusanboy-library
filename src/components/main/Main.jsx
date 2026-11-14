import book from "../../assets/image.png"
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <div className="main-container">

        <section className="main-left">
          <span className="welcome">Welcome to Pages</span>

          <h1>
            Books are uniquely
            <br />
            portable magic
          </h1>

          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>

          <div className="main-buttons">
            <button>Order Today</button>
            <a href="#">Read Free Demo</a>
          </div>

          <div className="book-info">
            <div>
              <h3>🟡 Pages:</h3>
              <span>586 pages</span>
            </div>

            <div>
              <h3>🟡 Length:</h3>
              <span>10 Hours</span>
            </div>

            <div>
              <h3>🟡 Ratings:</h3>
              <span>4.5/5 (305 ratings)</span>
            </div>
          </div>
        </section>

        <section className="main-right">
          <div className="book-image">
            <img src={book} alt="The Dark Light book" />
          </div>
        </section>

      </div>
    </main>
  );
}

export default Main;
