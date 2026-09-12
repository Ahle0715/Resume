import React, { useEffect, useRef } from "react";
import "./Career.css";

const careerData = [
  {
    year: "2026",
    title: "Software Engineer Intern",
    company: "CODEX Studio",
    period: "September 2026 – Present",
    description:
      "Gaining hands-on experience in software engineering and professional development while contributing to real-world software projects.",
  },
  {
    year: "2026",
    title: "AIOTIE 2026 Competition",
    company: "Silver Award",
    period: "2026",
    description:
      "Developed an AI-powered Accident Detection and Reporting System using YOLOv8, Django, Flutter, and computer vision technologies.",
  },
  {
    year: "2025",
    title: "Bachelor of Software Engineering",
    company: "New Era University College (CGPA:3.93/4.00)",
    period: "2025 – Present",
    description:
      "Currently pursuing a Bachelor of Software Engineering with a focus on software development, artificial intelligence, web technologies, and computer vision.",
  },
  {
    year: "2024",
    title: "Website Technical Assistant",
    company: "Thye Hin Computer",
    period: "February 2024 – May 2024",
    description:
      "Managed website and e-commerce platforms, updated product data and media, provided hardware troubleshooting and technical support, and developed a Return Merchandise Authorization (RMA) System to streamline product return management.",
  },
  {
    year: "2023",
    title: "Capture The Flag (CTF) Competition Achievement",
    company: "New Era University College",
    period: "2023",
    description:
      "Participated in the New Era University College Capture The Flag (CTF) Cyber Security Competition, gaining hands-on experience in cybersecurity challenges, problem-solving, and identifying vulnerabilities through practical tasks."
  },
  {
    year: "2023",
    title: "Diploma in Computer Science",
    company: "New Era University College (CGPA:3.89/4.00)",
    period: "2023 – 2025",
    description:
      "Built a strong foundation in programming, software development, databases, and computer science fundamentals.",
  },
  {
    year: "2022",
    title: "Python Full Stack Certificate",
    company: "Completion of Python Full Stack Certificate by Six Star Education",
    period: "2021 – 2022",
    description:
      "Developed practical skills in Python programming, web development, database management, and full-stack application development through hands-on projects and coursework.",
  },
];

function Career() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");

    if (!timelineItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="section career-section" id="career">
      <div className="career-container">

        <div className="career-header">
          <span className="section-subtitle">
            MY JOURNEY
          </span>

          <h2>Career & Education</h2>

          <p>
            My journey through education, professional
            experience, and software development.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>

          {careerData.map((item, index) => (
            <div
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-left"
                  : "timeline-right"
              }`}
              key={`${item.year}-${item.title}`}
            >

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span className="timeline-period">
                  {item.period}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Career;
