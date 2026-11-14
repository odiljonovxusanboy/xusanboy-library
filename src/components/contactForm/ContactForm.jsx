
import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="keep-contact">
      <div className="keep-contact-container">
        <div className="keep-contact-info">
          <h2>Keep in Touch</h2>
          <div className="keep-contact-line"></div>

          <p className="keep-contact-description">
            There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words
            which don't look even slightly believable.
          </p>

          <div className="keep-contact-item">
            <div className="keep-contact-icon">⌂</div>
            <div>
              <h3>Visit Us :</h3>
              <p>No: 09a, Downtown, San Dieago, USA.</p>
            </div>
          </div>

          <div className="keep-contact-item">
            <div className="keep-contact-icon">✉</div>
            <div>
              <h3>Drop Us :</h3>
              <p>support@pages.com</p>
            </div>
          </div>

          <div className="keep-contact-item">
            <div className="keep-contact-icon">♧</div>
            <div>
              <h3>Call Us :</h3>
              <p>Call: 1-800-123-9999</p>
            </div>
          </div>
        </div>

        <form
          className="keep-contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="keep-contact-row">
            <div className="keep-contact-input">
              <span>♙</span>
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                required
              />
            </div>

            <div className="keep-contact-input">
              <span>✉</span>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
          </div>

          <div className="keep-contact-input">
            <span>♧</span>
            <input
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
            />
          </div>

          <div className="keep-contact-message">
            <span>☑</span>
            <textarea
              placeholder="Message"
              aria-label="Message"
              required
            ></textarea>
          </div>

          <label className="keep-contact-checkbox">
            <input type="checkbox" />
            <span>
              Keep me up to date with news and offers from time to
              time by email
            </span>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
