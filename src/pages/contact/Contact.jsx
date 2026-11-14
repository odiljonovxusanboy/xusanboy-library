
import ContactForm from "../../components/contactForm/ContactForm";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Contact.css";

function Contact() {
  return (
    <div>
        <Header/>
        <section className="contact-hero">
      <h1>Contact Us</h1>
      <div className="contact-hero-line"></div>

      <p>
        There are many variations of passages of Lorem Ipsum available, have
        <br className="contact-desktop-break" />
        suffered alteration in some form.
      </p>
    </section>
    <ContactForm/>
    <FAQ/>
    <Footer/>
    </div>
  );
}

export default Contact;
