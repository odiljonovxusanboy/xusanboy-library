
import "./Reviews.css";

const reviews = [
  {
    name: "Martin Philips",
    title: "Awesome Impact",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    className: "review-martin",
  },
  {
    name: "James Anderson",
    title: "Mind Blowing Words",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    className: "review-james",
  },
  {
    name: "Christina Louis",
    title: "Great Books Collections",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    className: "review-christina",
  },
];

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-container">

        <div className="reviews-left">
          <h2>
            What Readers
            <br />
            Say About the
            <br />
            Book
          </h2>

          <div className="reviews-line"></div>

          <p>
            If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything
            embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators.
          </p>

          <div className="overall-rating">
            <div className="rating-stars">
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span className="half-star">◐</span>
            </div>

            <strong>(4.8/5)</strong>
          </div>

          <span className="rating-caption">
            Overall Customer Ratings
          </span>
        </div>

        <div className="reviews-right">
          {reviews.map((review) => (
            <article
              className={`review-card ${review.className}`}
              key={review.name}
            >
              <div className="review-user">
                <img
                  className="review-avatar"
                  src={review.image}
                  alt={review.name}
                />

                <div className="review-user-info">
                  <h3>{review.name}</h3>

                  <div
                    className="review-stars"
                    aria-label="4.5 out of 5 stars"
                  >
                    ★★★★<span>◐</span>
                  </div>
                </div>
              </div>

              <h4>“ {review.title} ”</h4>

              <p>
                All the Lorem Ipsum generators on the
                Internet tend to repeat willings
                predefined chunks value.
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
