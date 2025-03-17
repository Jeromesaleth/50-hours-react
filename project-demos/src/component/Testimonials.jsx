import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { Quote: "This is the best product", Author: "Jane Doe" },
    { Quote: "An amazing experience, highly recommended!", Author: "John Smith" },
    { Quote: "Quality and service exceeded my expectations.", Author: "Emily Johnson" },
    { Quote: "Absolutely love this, worth every penny!", Author: "Michael Brown" },
    { Quote: "A game-changer in the industry.", Author: "Sarah Williams" },
    { Quote: "Reliable, efficient, and top-notch!", Author: "David Martinez" },
    { Quote: "I've never been happier with a purchase.", Author: "Laura Wilson" },
    { Quote: "Fantastic product, will buy again.", Author: "Robert Anderson" },
    { Quote: "Great value for the price!", Author: "Sophia Thomas" },
    { Quote: "Impressed by the innovation and quality.", Author: "Daniel Harris" },
  ];

  // Destructure the current testimonial
  const { Quote, Author } = testimonials[currentIndex];

  // Navigation Handlers
  const handlePrevClick = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  const handleNextClick = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section className="testimonial">
      <div className="testimonial-quote">"{Quote}"</div>
      <div className="testimonial-author">- {Author}</div>

      <div className="testimonial-nav">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
