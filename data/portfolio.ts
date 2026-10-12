export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  demo?: string;
};

export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const profile = {
  name: "Shaifa",
  title: "Java Full Stack Developer",
  headline:
    "I build REST APIs and full-stack web applications with Java, Spring Boot, and React.",
  status: "Open to entry-level Java / Software Developer roles",
  location: "Kozhikode, Kerala, India",
  email: "shaifashaffiq01@gmail.com",
  phone: "+91 94477 70948",
  phoneHref: "tel:+919447770948",
  linkedin: "https://www.linkedin.com/in/shaifaba93b7293",
  // Add your GitHub profile URL here to show a GitHub link, e.g. "https://github.com/your-username"
  github: "",
  languages: ["English", "Hindi", "Malayalam"],
  about: [
    "I'm a Computer Science graduate who completed a Java Full Stack Developer internship at Jspiders, where I built web applications end to end: database design, Spring Boot and Hibernate back ends, and React.js front ends.",
    "I apply object-oriented programming and MVC principles to keep code clean and maintainable, and I test every API with Postman before it ships. I'm looking for an entry-level Java Developer or Software Developer role where I can contribute to scalable, real-world applications.",
  ],
};

// Layers shown in the hero card. They mirror the stack used in the internship projects.
export const stackLayers = [
  { label: "React.js", note: "UI" },
  { label: "REST API", note: "JSON over HTTP" },
  { label: "Spring Boot", note: "Services & MVC" },
  { label: "Hibernate / JPA", note: "ORM" },
  { label: "MySQL", note: "Persistence" },
];

export const projects: Project[] = [
  {
    name: "Contact Management System",
    tagline: "Full CRUD web app on Spring Boot, Hibernate, and MySQL",
    description:
      "A contact management application that streamlines how contact data is stored and handled, with a responsive interface connected to a Spring Boot back end.",
    highlights: [
      "Engineered full CRUD functionality using Spring Boot, Hibernate, and JPA.",
      "Designed and validated 10+ RESTful API endpoints storing contact data in MySQL, tested with Postman suites.",
      "Built a responsive UI with HTML, CSS, and Thymeleaf, integrated with backend services for real-time data updates.",
    ],
    stack: ["Spring Boot", "Hibernate", "JPA", "MySQL", "Thymeleaf", "Postman"],
    repo: "",
  },
  {
    name: "Certificate Authentication Using Periocular Features",
    tagline: "Biometric identity verification with CNNs",
    description:
      "A biometric authentication system that verifies identity using periocular (eye-region) features, improving on traditional single-feature verification methods.",
    highlights: [
      "Applied image processing techniques and Convolutional Neural Networks (CNNs) to extract and match biometric features.",
      "Designed a responsive web interface that captures and processes biometric input for an end-to-end verification flow.",
    ],
    stack: ["Python", "CNN", "SQL", "HTML", "CSS", "JavaScript"],
    repo: "",
  },
];

export const experience: Experience[] = [
  {
    role: "Java Full Stack Developer Intern",
    org: "Jspiders Software Training Institute",
    location: "Kochi, Kerala",
    period: "Jul 2024 – Mar 2025",
    bullets: [
      "Built and deployed 3+ full-stack web applications using Spring Boot, Hibernate, and React.js, covering database design through UI integration.",
      "Designed and integrated 15+ RESTful API endpoints with front-end interfaces for complete end-to-end functionality across modules.",
      "Applied OOP and MVC principles to structure clean, maintainable code that reduced duplication and eased adding new features.",
      "Tested APIs with Postman and used Git/GitHub for version control across a multi-week, sprint-based training program.",
    ],
  },
  {
    role: "Independent Upskilling & Job Search",
    org: "Self-directed",
    period: "Mar 2025 – Present",
    bullets: [
      "Continued building full-stack skills through self-directed learning and coursework while pursuing Java Developer / Software Developer roles.",
      "Completed additional certifications in Web Development (Torch Info Tech) and Claude 101 (Anthropic) to stay current with modern development and AI-assisted tooling.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "HTML", "CSS"] },
  {
    group: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring MVC", "Hibernate", "React.js"],
  },
  { group: "Databases", items: ["MySQL", "SQL"] },
  { group: "Web & APIs", items: ["RESTful APIs", "JSP", "Microservices"] },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "Eclipse",
      "VS Code",
      "MySQL Workbench",
    ],
  },
  {
    group: "Working Style",
    items: ["Problem Solving", "Teamwork", "Communication"],
  },
];

export const education = {
  degree: "BTech in Computer Science",
  school: "MES College of Engineering and Technology, Ernakulam",
  period: "2020 – 2024",
  detail: "CGPA: 7.11",
};

export const certifications = [
  { name: "Full Stack Java Development", issuer: "Jspiders" },
  { name: "Web Development Certification", issuer: "Torch Info Tech" },
  { name: "Claude 101 Certification", issuer: "Anthropic" },
  { name: "One Million Prompters Certification", issuer: "Dubai Future Foundation" },
];
