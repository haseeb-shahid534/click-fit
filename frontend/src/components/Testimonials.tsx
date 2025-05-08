import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real people who transformed their lives with Click
            Fit
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <blockquote className="text-xl text-gray-600 text-center italic mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Click Fit completely transformed my approach to fitness. I've lost 30 pounds and gained confidence I never thought possible.",
    name: "Jessica K.",
    achievement: "Lost 30 lbs in 6 months",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    quote:
      "As someone who always struggled with staying consistent, Click Fit provided the structure and motivation I needed to finally stick with my fitness goals.",
    name: "Mark T.",
    achievement: "Gained 15 lbs of muscle",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },
  {
    quote:
      "The coaches at Click Fit truly care about your success. Their personalized approach helped me achieve results I couldn't get from years of trying on my own.",
    name: "Sophia L.",
    achievement: "Completed first marathon",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

export default Testimonials;
