import bobo from "../../assets/bookbobo.png"
import "./MyStory.css";

function MyStory() {
  return (
    <section className="my-story">
      <div className="my-story-container">

        <div className="my-story-content">
          <h2>My Story</h2>
          <div className="my-story-line"></div>

          <p className="my-story-intro">
            Making this the first true generator on the Internet.
            It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures.
          </p>

          <div className="story-timeline">

            <div className="story-item">
              <div className="story-number">01</div>
              <div className="story-text">
                <h3>Great Author Awards - 1996 & 2000</h3>
                <p>
                  How to navigate around the interface and toggle
                  on/off the panels you wish to use.
                </p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-number">02</div>
              <div className="story-text">
                <h3>10 Times New York Times ® Best Seller</h3>
                <p>
                  How to navigate around the interface and toggle
                  on/off the panels you wish to use.
                </p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-number">03</div>
              <div className="story-text">
                <h3>Writer of Hack Productivity</h3>
                <p>
                  How to navigate around the interface and toggle
                  on/off the panels you wish to use.
                </p>
              </div>
            </div>

          </div>
        </div>

      
        <div className="my-story-image">
          <img src={bobo} alt="Author working" />
        </div>

      </div>
    </section>
  );
}

export default MyStory;
