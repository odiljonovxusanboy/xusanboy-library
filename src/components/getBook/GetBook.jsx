
import cofe from "../../assets/cofe.png";
import "./GetBook.css";

function GetBook() {
  return (
    <section className="get-book">
      <div className="get-book-container">
        <div className="get-book-text">
          <h2>Get Book Copy Today!</h2>

          <p>
            This the first true value generator on the Internet.
            It uses alphas dictionary of over 200 Latin words.
          </p>

          <button>Order Today</button>
        </div>

        <div className="get-book-image">
          <img src={cofe} alt="Coffee and book" />
        </div>
      </div>
    </section>
  );
}

export default GetBook;
