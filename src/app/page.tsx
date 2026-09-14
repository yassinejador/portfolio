'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const skills = {
  Languages: ['Java', 'TypeScript', 'Python', 'JavaScript', 'XML', 'HTML', 'CSS'],
  Frameworks: [
    'Spring Framework',
    'Spring Boot',
    'Spring Data JPA',
    'Hibernate',
    'Angular',
    'React',
    'Next.js',
  ],
  Testing: ['JUnit', 'Mockito'],
  APIs: ['REST', 'OpenAPI/Swagger', 'Postman'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  'Cloud / DevOps': [
    'Docker',
    'Kubernetes',
    'AWS',
    'Jenkins',
    'Maven',
    'Nginx',
    'Tomcat',
  ],
  AI: ['Claude Code', 'Codex', 'RAG', 'Transformers'],
  Tools: ['GitLab', 'GitHub', 'Kibana', 'SonarQube', 'Agile'],
  'Operating Systems': ['Linux', 'macOS', 'Windows'],
};

const education = [
  {
    school: 'UPPA - Collège STEE',
    location: 'Pau, France',
    date: 'September 2026 – July 2027',
    degree: "Master’s Degree in Internet Technologies (M2)",
    status: 'Ongoing',
    courses: ['Cloud Infrastructure', 'Computer Systems Security', 'Java'],
  },
  {
    school: 'Faculty of Sciences - El Jadida',
    location: 'El Jadida, Morocco',
    date: 'October 2024 – June 2026',
    degree: 'Master’s Degree in Computer Science and Data Analysis Engineering',
    courses: [
      'Cross-platform development',
      'Distributed architectures',
      'Design Patterns',
      'Machine Learning',
      'Deep Learning',
      'Blockchain technology',
      'Multimedia Data Analysis',
    ],
  },
  {
    school: 'Ecole Normale Supérieure',
    location: 'Tetouan, Morocco',
    date: 'October 2023 – June 2024',
    degree: 'Bachelor’s Degree in Software and Web Development',
    courses: ['Software development', 'Web Architectures and Technologies'],
  },
  {
    school: 'Specialized Institute Of Applied Technology NTIC',
    location: 'Casablanca, Morocco',
    date: 'October 2021 – July 2023',
    degree: 'Specialized Technician Diploma in Full Stack Development',
    courses: [
      'Computer Science',
      'Front-end and Back-end Development',
      'Object Oriented Programming',
      'Node.js',
      'Cloud computing',
    ],
  },
  {
    school: 'Oum Al Koura',
    location: 'Casablanca, Morocco',
    date: 'October 2020 – July 2021',
    degree: 'Baccalaureate Degree in Physics Chemistry',
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Philosophy', 'English'],
  },
];

const experiences = [
  {
    company: 'Done Corp',
    role: 'Software Engineer Intern',
    location: 'Rabat, Morocco',
    date: 'January 2024 – May 2026',
    points: [
      'Designed, developed, and delivered backend features on a super-app serving 100,000+ users, within a team of 10+ engineers.',
      'Designed and built a real-time chat subsystem from the ground up to connect support agents, delivery drivers, and customers; engineered the backing REST APIs, handled media uploads, live messaging via Firebase Realtime Database, and automated periodic message backups to Cloudflare R2.',
      'Implemented message status tracking for sent, delivered, and seen states through optimized state-tracking algorithms, in collaboration with the mobile team.',
      'Eliminated outbound call costs on first-time orders by integrating the Meta WhatsApp Business API, dispatching template-based confirmation messages that let customers approve or cancel directly from WhatsApp.',
      'Took part in code reviews, unit and integration tests, and deployment stages across pre-production and production environments.',
    ],
    stack: [
      'PostgreSQL',
      'Nginx',
      'Elasticsearch',
      'Kibana',
      'Redis',
      'Firebase Realtime Database',
    ],
  },
  {
    company: 'Up Network Maroc',
    role: 'Full-Stack Development Intern',
    location: 'Tetouan, Morocco',
    date: 'January 2024 – June 2024',
    points: [
      'Developed a full-featured conference management platform, with a strong focus on code quality and software engineering best practices.',
      'Designed user-friendly dashboards for various roles (admin, organizers, evaluators, authors and participants) to manage details, statistics, new conferences, new articles, and more.',
      'Implemented automated certificate generation for participants, authors, evaluators, and other roles, ensuring accurate and timely delivery of certificates of participation.',
    ],
  },
  {
    company: 'IA FACTORY',
    role: 'Full-Stack Development Intern',
    location: 'Casablanca, Morocco',
    date: 'April 2023 – May 2023',
    points: [
      'Developed key features for student, teacher, and parent management within the school application, utilizing React and Symfony.',
      'Designed modules for tracking student information, including personal details, academic records, and performance metrics.',
      'Designed the application database and created UML diagrams for its end-to-end workflows.',
    ],
  },
];

const projects = [
  {
    title: 'Whiteboard App',
    description:
      'Built a containerized Angular Spring Boot whiteboard app with Docker, backed by Oracle Database XE, delivering secure JWT-based access, optimized gallery search with pagination, and improved maintainability through clean architecture and DTO-driven APIs.',
    tech: ['Angular', 'Spring Boot', 'Docker', 'Oracle Database XE', 'JWT'],
  },
  {
    title: 'Scopus Chatbot',
    description:
      'Developed an AI-powered research assistant that retrieves academic data from the arXiv database using natural language queries, leveraging NLP, semantic search, and a modular architecture. Implemented unit tests with Pytest and automated testing through GitHub Actions CI/CD for reliable and maintainable code.',
    tech: ['Python', 'NLP', 'Semantic Search', 'Pytest', 'GitHub Actions'],
  },
  {
    title: 'Handwritten Digit Recognition',
    description:
      'Built a machine learning pipeline (scikit-learn) to classify handwritten digits (0–9) with 96.7% accuracy. Implemented preprocessing, model training, and evaluation with reports and visualizations.',
    tech: ['Python', 'scikit-learn', 'Machine Learning'],
  },
  {
    title: 'Roommate Expense Tracker',
    description:
      'Built a React Native Spring Boot app with Docker for roommate expense tracking, featuring JWT-secured APIs, role-based access, real-time updates via WebSockets, Kafka-driven notifications, PostgreSQL persistence, and implemented unit and integration tests using JUnit and Mockito for robust, reliable functionality.',
    tech: [
      'React Native',
      'Spring Boot',
      'Docker',
      'WebSockets',
      'Kafka',
      'PostgreSQL',
      'JUnit',
      'Mockito',
    ],
  },
  {
    title: 'Office Mail Management Web App',
    description:
      'Developed a Next.js web app for managing institutional mail, with features like tracking, archiving, search, and role-based access.',
    tech: ['Next.js', 'TypeScript', 'Authentication', 'Database'],
  },
  {
    title: 'Hotel Booking App',
    description:
      'Built a responsive Laravel-based hotel booking app with secure authentication, user reviews, and an admin dashboard for managing rooms and reservations.',
    tech: ['Laravel', 'PHP', 'Authentication', 'MySQL'],
  },
];

const certificates = [
  {
    title: 'Oracle Cloud Infrastructure',
    text: '2025 Certified AI Foundations Associate',
    date: 'September 2025',
  },
  {
    title: 'Python',
    text: 'Certificate',
    date: 'November 2023',
  },
  {
    title: 'JavaScript',
    text: 'Certificate',
    date: 'November 2023',
  },
  {
    title: 'SQL',
    text: 'Certificate',
    date: 'November 2023',
  },
];

const awards = [
  {
    title: 'AI2SD 2025 Hackathon',
    date: 'May 2025 • 3rd Place',
    text: "Participated in one of Morocco's largest tech competitions and secured 3rd place.",
  },
  {
    title: 'IEEE Smart Cities Futures Summit',
    date: 'May 2024 • 3rd Place',
    text: 'Participated in the GITEX AFRICA 2024 IEEE Smart Cities Futures Summit Hackathon.',
  },
  {
    title: 'Smart Cities Hackathon',
    date: 'May 2024 • 6th Place',
    text: 'Secured 6th place out of 50 teams in the Smart Cities Hackathon hosted by Ecole Normale Supérieure of Martil.',
  },
  {
    title: 'Best Final Project',
    date: 'June 2023 • 19.5/20',
    text: 'Awarded Best Final Project in my class with a score of 19.5/20.',
  },
  {
    title: 'WorldSkills 2023',
    date: 'June 2023',
    text: 'Selected by the top developers of my institute and participated in the WorldSkills 2023 competition.',
  },
];

const softSkills = [
  'Problem-solving',
  'Communication',
  'Collaboration',
  'Adaptability',
  'Attention to Detail',
];

const interests = ['Hackathons', 'Football', 'Swimming', 'Travel', 'Fitness'];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [responseMessage, setResponseMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-2xl font-bold text-white">
              JADOR Yassine
            </a>

            <div className="hidden md:flex space-x-7">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Education', '#education'],
                ['Experience', '#experience'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Awards', '#awards'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mb-3 border border-slate-700">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Education', '#education'],
                ['Experience', '#experience'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Awards', '#awards'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-24">
          <div className="text-center md:text-left flex-1">
            <p className="text-blue-400 font-semibold mb-4">SOFTWARE ENGINEER</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Hi, I&apos;m JADOR Yassine
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Software Engineer passionate about building efficient, scalable, and thoughtful solutions.
            </p>
            <p className="text-lg mb-12 text-slate-400 max-w-2xl">
              I enjoy solving complex problems and writing clean, high-performance code.
              Comfortable across the stack with Spring Boot, Laravel, React, Next.js,
              Angular, Docker, Kubernetes, PostgreSQL, and MySQL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="border border-cyan-400 text-white font-bold py-4 px-8 rounded-full hover:bg-cyan-400/10 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-slate-800/80 border border-slate-700 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-700/80 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/profil.jpg"
              alt="JADOR Yassine"
              width={384}
              height={384}
              className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-slate-700 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                I am a dedicated software engineer with a background in software development,
                full-stack engineering, computer science, and data analysis.
              </p>
              <p className="text-lg leading-relaxed">
                My academic background includes a Master&apos;s Degree in Computer Science and
                Data Analysis Engineering, a Bachelor&apos;s Degree in Software and Web Development,
                and a Specialized Technician Diploma in Full Stack Development.
              </p>
              <p className="text-lg leading-relaxed">
                I am currently pursuing a Master&apos;s Degree in Internet Technologies (M2)
                at UPPA - Collège STEE in Pau, France.
              </p>
              <p className="text-lg leading-relaxed">
                My experience includes backend and full-stack development, real-time systems,
                REST APIs, authentication, testing, deployment, databases, distributed systems,
                and AI-related applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
                <div className="space-y-4">
                  {[
                    ['English', 'Fluent'],
                    ['French', 'Fluent'],
                    ['Arabic', 'Native'],
                  ].map(([language, level]) => (
                    <div key={language} className="flex justify-between text-slate-300">
                      <span>{language}</span>
                      <span className="text-blue-400">{level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span key={skill} className="bg-blue-600/20 border border-blue-500/30 text-blue-200 px-4 py-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
          <div className="space-y-8">
            {education.map((item) => (
              <div key={`${item.school}-${item.date}`} className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                    <p className="text-blue-400 text-lg font-semibold mt-2">{item.school}</p>
                    <p className="text-slate-400">{item.location}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-slate-300 font-semibold">{item.date}</p>
                    {item.status && <p className="text-emerald-400 font-semibold mt-1">{item.status}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400 mb-3">Relevant courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span key={course} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={`${experience.company}-${experience.date}`} className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                    <p className="text-blue-400 text-lg font-semibold mt-2">{experience.company}</p>
                    <p className="text-slate-400">{experience.location}</p>
                  </div>
                  <span className="text-blue-400 font-semibold">{experience.date}</span>
                </div>

                <ul className="space-y-4 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {experience.stack && (
                  <div className="mt-6">
                    <p className="text-slate-400 mb-3">Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.stack.map((tech) => (
                        <span key={tech} className="bg-blue-600/20 border border-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-700 text-slate-200 px-4 py-2 rounded-lg border border-slate-600 hover:border-blue-400 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-800/80 rounded-2xl p-8 border border-slate-700 hover:bg-slate-700/80 transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Honors, Awards & Certificates</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <div key={award.title} className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-blue-400 font-semibold mb-3">{award.date}</p>
                <p className="text-slate-300">{award.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certificates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((certificate) => (
                <div key={`${certificate.title}-${certificate.date}`} className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center">
                  <h4 className="text-lg font-bold text-white mb-2">{certificate.title}</h4>
                  <p className="text-blue-400">{certificate.text}</p>
                  <p className="text-slate-400 text-sm mt-2">{certificate.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">Interests</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <span key={interest} className="bg-slate-800 border border-slate-700 text-slate-200 px-6 py-3 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out if you&apos;d like to work together.
              </p>

              <div className="space-y-4">
                <a href="mailto:yassinejador@gmail.com" className="block text-slate-300 hover:text-white transition-colors">
                  yassinejador@gmail.com
                </a>
                <a href="https://github.com/yassinejador" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">
                  github.com/yassinejador
                </a>
                <a href="https://linkedin.com/in/yassinejador" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">
                  linkedin.com/in/yassinejador
                </a>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {responseMessage && (
                  <p className={`text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2026 JADOR Yassine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

