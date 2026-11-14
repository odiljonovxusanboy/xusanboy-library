import img1 from "../../assets/Book1.png";
import img2 from "../../assets/Book1.png";
import img3 from "../../assets/Book1.png";
import img4 from "../../assets/image.png";
import img5 from "../../assets/image.png";
import img6 from "../../assets/image.png";

import "./MyStore.css";

function MyStore() {
  return (
    <section className="store-section">
      <div className="store-container">

        <div className="store-card">
          <div className="store-image">
            <img src={img1} alt="Atomic One's" />
          </div>
          <div className="store-info">
            <h3>Atomic One’s</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

        <div className="store-card">
          <div className="store-image">
            <img src={img2} alt="Atomic One's" />
          </div>
          <div className="store-info">
            <h3>Atomic One’s</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

        <div className="store-card">
          <div className="store-image">
            <img src={img3} alt="Atomic One's" />
          </div>
          <div className="store-info">
            <h3>Atomic One’s</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

        <div className="store-card">
          <div className="store-image">
            <img src={img4} alt="The Dark Light" />
          </div>
          <div className="store-info">
            <h3>The Dark Light</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

        <div className="store-card">
          <div className="store-image">
            <img src={img5} alt="The Dark Light" />
          </div>
          <div className="store-info">
            <h3>The Dark Light</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

        <div className="store-card">
          <div className="store-image">
            <img src={img6} alt="The Dark Light" />
          </div>
          <div className="store-info">
            <h3>The Dark Light</h3>
            <span className="store-price">$23.89</span>
          </div>
          <p className="store-description">
            Many variations of passages of Lorem Ipsum
            willing arise alteration in some form.
          </p>
          <div className="store-type">
            <span className="store-dot"></span>
            <span>Printed Books</span>
          </div>
          <button className="store-button">Order Today</button>
        </div>

      </div>
    </section>
  );
}

export default MyStore;