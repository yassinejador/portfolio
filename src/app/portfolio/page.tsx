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
      'Developed an AI-powered research assistant that retrieves academic data from the arXiv database using natural language queries, leveraging NLP, semantic search, and a modular architecture. Implemented unit tests with Pytest and automated testing through GitHub Actions CI/CD.',
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
      'Built a React Native Spring Boot app with Docker for roommate expense tracking, featuring JWT-secured APIs, role-based access, real-time updates via WebSockets, Kafka-driven notifications, PostgreSQL persistence, and implemented unit and integration tests using JUnit and Mockito.',
    tech: ['React Native', 'Spring Boot', 'Docker', 'WebSockets', 'Kafka', 'PostgreSQL'],
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

export default function Portfolio() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-8 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-slate-800/80 rounded-2xl border border-slate-700 p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {project.title}
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

