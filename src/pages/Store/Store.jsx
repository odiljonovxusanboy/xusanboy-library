
import Footer from "../../components/footer/Footer";
import FreeChapter from "../../components/freeChapter/FreeChapter";
import Header from "../../components/header/Header";
import MyStore from "../../components/myStore/MyStore";
import "./Store.css";

function Store() {
  return (
    <div>
        <Header/>
        <section className="my-store">
      <div className="my-store-content">
        <h1>My Store</h1>

        <span className="my-store-line"></span>

        <p>
          There are many variations of passages of Lorem Ipsum available, have
          <br className="my-store-break" />
          suffered alteration in some form.
        </p>
      </div>
    </section>
    <MyStore/>
    <FreeChapter/>
    <Footer/>
    </div>
  );
}

export default Store;
