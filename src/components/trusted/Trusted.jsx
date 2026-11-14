
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import "./Trusted.css";

function Trusted() {
  return (
    <section className="trusted">
      <h2 className="trusted-title">Trusted by the Best</h2>

      <div className="trusted-container">
        <div className="trusted-card">
          <div className="trusted-logo">
            <img src={logo1} alt="Amazon Corp" />
          </div>
          <h3>Amazon Corp</h3>
          <p>
            A long established fact that a
            who looking at its layout.
          </p>
        </div>

        <div className="trusted-card">
          <div className="trusted-logo">
            <img src={logo2} alt="Megan Books" />
          </div>
          <h3>Megan Books</h3>
          <p>
            A long established fact that a
            who looking at its layout.
          </p>
        </div>

        <div className="trusted-card">
          <div className="trusted-logo">
            <img src={logo3} alt="Los Books" />
          </div>
          <h3>Los Books</h3>
          <p>
            A long established fact that a
            who looking at its layout.
          </p>
        </div>

        <div className="trusted-card">
          <div className="trusted-logo">
            <img src={logo4} alt="Urban Lib" />
          </div>
          <h3>Urban Lib</h3>
          <p>
            A long established fact that a
            who looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
