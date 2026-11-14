
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

import "./Article.css";

const articles = [
  {
    image: img1,
    title: "Significant reading has more info number",
  },
  {
    image: img2,
    title: "Release of Letraset sheets tools containing passages",
  },
  {
    image: img3,
    title: "The energy efficiency offers hydrotherapy or swim",
  },
  {
    image: img4,
    title: "The energy efficiency offers hydrotherapy or swim",
  },
  {
    image: img5,
    title: "Release of Letraset sheets tools containing passages",
  },
  {
    image: img6,
    title: "The energy efficiency offers hydrotherapy or swim",
  },
  {
    image: img7,
    title: "The energy efficiency offers hydrotherapy or swim",
  },
  {
    image: img8,
    title: "Release of Letraset sheets tools containing passages",
  },
  {
    image: img9,
    title: "The energy efficiency offers hydrotherapy or swim",
  },
];

function Article() {
  return (
    <section className="articles-section">
      <div className="articles-container">
        {articles.map((article, index) => (
          <article className="article-card" key={index}>
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="article-content">
              <h3>{article.title}</h3>

              <p>
                The point of using Lorem Ipsum is that using
                making it look like others readable will get end.
              </p>

              <div className="article-footer">
                <a href="#read-more">Read more</a>
                <span>Author - 23.05.2022</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Article;
