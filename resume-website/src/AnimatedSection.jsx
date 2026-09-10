import { useEffect, useRef, useState } from "react";

function AnimatedSection({ children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    // if the AnimatedSection found then observe the current section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // clean up the effect
    return () => {
      if (sectionRef.current) {
        // cancel observation of the current section
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;