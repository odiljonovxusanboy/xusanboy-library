import AuthorInfo from "../../components/authorInfo/AuthorInfo";
import Books from "../../components/books/Books";
import Footer from "../../components/footer/Footer";
import FreeChapter from "../../components/freeChapter/FreeChapter";
import Header from "../../components/header/Header";
import MyStory from "../../components/myStory/MyStory";
import Trusted from "../../components/trusted/Trusted";
import "./About.css";

function About() {
  return (
    <div>
      <Header />
      <section className="about-hero">
        <div className="about-content">
          <h1>About the Author</h1>

          <div className="about-line"></div>

          <p>
            There are many variations of passages of Lorem Ipsum available, have
            <br className="about-desktop-break" />
            suffered alteration in some form.
          </p>
        </div>
      </section>
      <AuthorInfo />
      <MyStory />
      <Books />
      <Trusted />
      <FreeChapter />
      <Footer/>
    </div>
  );
}

export default About;
