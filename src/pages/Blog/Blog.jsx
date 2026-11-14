import Article from "../../components/Article/Article";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Blog.css";

function Blog() {
  return (
    <div>
        <Header/>
        <section className="articles-header">
      <h1>Articles</h1>

      <div className="articles-line"></div>

      <p>
        There are many variations of passages of Lorem Ipsum available, have
        <br />
        suffered alteration in some form.
      </p>
    </section>
    <Article/>
    <Footer/>
    </div>
  );
}

export default Blog;