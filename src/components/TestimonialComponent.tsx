'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  position: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Gorata Malose",
    position: "Fellow, Princeton Africa",
    content: "Erick Olando is an incredibly dedicated and talented individual. His passion for innovation, problem-solving, and excellence is truly inspiring. Beyond his skills, he is a reliable and supportive friend. Anyone who works with him will quickly see his exceptional work ethic and creativity.",
    avatar: "https://github.com/eritech98/Images_private/raw/main/OIP.jpeg"
  },
  {
    name: "Macs Machete",
    position: "CEO, Mjondol Labs",
    content: "We've worked on a few projects together. One this for sure is that Erick always delivers on his end",
    avatar: "https://github.com/eritech98/Images_private/raw/main/WhatsApp%20Image%202025-02-13%20at%2013.24.23_9b050a27.jpg"
  },
  {
    name: "Safae Zghari",
    position: "Software Engineer, Morocco",
    content: "Erick is a notable colleague who constantly goes above and beyond to ensure projects are completed and to the greatest standard, demonstrating a remarkable ability to adapt to changing conditions. Erick is also a dedicated friend who never leaves you behind.",
    avatar: "https://github.com/eritech98/Images_private/raw/main/SAF.jpg"
  },
  {
    name: "David Lee",
    position: "CTO, InnovateTech",
    content: "Their expertise in cutting-edge technologies is truly impressive.",
    avatar: "https://images.unsplash.com/photo-1495681796091-d84e65e2ad51?w=500&auto=format&fit=crop&q=60"
  }
];

const TestimonialComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/placeholder.svg';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="testimonial-section" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide} onKeyDown={handleKeyDown} tabIndex={0}>
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="avatar" 
              onError={handleImageError}
            />
            <p className="content">"{testimonial.content}"</p>
            <h3 className="name">{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </div>
      <div className="indicators">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Testimonial ${index + 1}`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
      <style>{`
        .testimonial-section {
          padding: 80px 20px;
          background-color: #f8f9fa;
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          color: #333;
          margin-bottom: 40px;
        }

        .testimonial-container {
          display: flex;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .testimonial-card {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease-in-out;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
        }

        .content {
          font-size: 1.2rem;
          font-style: italic;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .name {
          font-size: 1.4rem;
          color: #333;
          margin-bottom: 5px;
        }

        .position {
          font-size: 1rem;
          color: #777;
        }

        .indicators {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ccc;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .indicator.active {
          background-color: #3498db;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialComponent;
