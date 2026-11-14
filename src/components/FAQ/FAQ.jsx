
import { useState } from "react";
import "./FAQ.css";

const questionsLeft = [
  {
    question: "Do you offer discounts for education?",
    answer: "",
  },
  {
    question: "Is Hack Productivity book available on the one stores?",
    answer:
      "Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    extra: "There are many variations of of Lorem Ipsum available.",
  },
  {
    question: "What is Hack Productivity book about?",
    answer:
      "Hack Productivity shares useful ideas and methods to improve your productivity and creativity.",
  },
  {
    question: "Where can I get Hack Productivity book?",
    answer:
      "You can order the book from our website or from your favorite online bookstore.",
  },
  {
    question: "Do you offer discounts for education?",
    answer:
      "Yes, educational discounts may be available for students and educators.",
  },
];

const questionsRight = [
  {
    question: "Do you offer discounts for education?",
    answer:
      "Yes, contact our team to learn more about educational discounts.",
  },
  {
    question: "Is Hack Productivity book available on the one stores?",
    answer:
      "The book may be available through selected online bookstores.",
  },
  {
    question: "What is Hack Productivity book about?",
    answer:
      "It is about improving productivity, building habits, and working creatively.",
  },
  {
    question: "What is Hack Productivity book about?",
    answer:
      "The book offers ideas to help you organize your time and work effectively.",
  },
  {
    question: "Where can I get Hack Productivity book?",
    answer:
      "You can find purchasing information on our book page.",
  },
  {
    question: "Where can I get Hack Productivity book?",
    answer:
      "Check our book collection for more details.",
  },
  {
    question: "Where can I get Hack Productivity book?",
    answer:
      "Visit our website to explore the available books.",
  },
];

function FAQColumn({ questions, startIndex, active, setActive }) {
  return (
    <div className="faq-column">
      {questions.map((item, index) => {
        const id = startIndex + index;
        const isOpen = active === id;

        return (
          <div className="faq-item" key={id}>
            <button
              className="faq-question"
              onClick={() => setActive(isOpen ? null : id)}
              aria-expanded={isOpen}
            >
              <span className="faq-dot"></span>
              <span>{item.question}</span>
            </button>

            {isOpen && (
              <div className="faq-answer">
                <p>{item.answer}</p>
                {item.extra && <p>{item.extra}</p>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function FAQ() {
  const [active, setActive] = useState(1);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequent Questions?</h2>
      <div className="faq-title-line"></div>

      <div className="faq-container">
        <FAQColumn
          questions={questionsLeft}
          startIndex={0}
          active={active}
          setActive={setActive}
        />

        <FAQColumn
          questions={questionsRight}
          startIndex={5}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
}

export default FAQ;
