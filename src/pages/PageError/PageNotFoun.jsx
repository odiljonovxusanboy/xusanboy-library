
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NotFound from "../../components/notFound/NotFound";
import "./PageNotFoun.css";

function PageNotFoun() {
  return (
    
    <div>
        <Header/>
        <section className="page-error">
      <div className="page-error-content">
        <h1>Page Error</h1>

        <span className="page-error-line"></span>

        <p>
          There are many variations of passages of Lorem Ipsum available, have
          <br className="desktop-break" />
          suffered alteration in some form.
        </p>
      </div>
    </section>
    <NotFound/>
    <Footer/>
    </div>
  );
}

export default PageNotFoun;
