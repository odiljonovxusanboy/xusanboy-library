
import { Link } from "react-router-dom";
import "./NotFound.css";
import bgImage from "../../assets/bg.png";

function NotFound() {
  return (
    <section
      className="not-found"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page not Found!!!</h2>

        <p>
          The page you are looking for doesn't exist.
          Please try searching for some other page,
          or return to the website's homepage to find
          what you're looking for.
        </p>

        <Link to="/" className="not-found-home">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
