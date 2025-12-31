import { Experience, SkillGroup, Education } from './types';

export const PERSONAL_INFO = {
  name: "Rupam Lokhande",
  title: "Senior Full Stack Developer",
  email: "lokhande.rupam40@gmail.com",
  phone: "+91 7208310370",
  location: "Mumbai, India",
  linkedin: "linkedin.com/in/rupamlokhande",
  bio: "Senior Full Stack Developer at Excellia with over 3 years of expertise in architecting high-performance Java Spring Boot microservices and crafting immersive user interfaces with Next.js and React. Passionate about solving complex problems in enterprise-scale airline retailing and fintech platforms."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Excellia",
    location: "Mumbai",
    role: "Senior Full Stack Developer",
    period: "September 2021 – Present",
    highlights: [
      "Architected and deployed scalable Spring Boot microservices for global airline retailing systems (NDC-compliant).",
      "Engineered high-throughput REST APIs with Kafka for real-time data processing, implementing robust retry mechanisms and DLQ strategies.",
      "Spearheaded frontend modernization using Next.js and React, achieving 40% faster page loads through SSR and optimized bundle management.",
      "Optimized enterprise persistence layers across Oracle, PostgreSQL, and MongoDB Atlas for high availability and low latency.",
      "Designed complex data transformation pipelines using JOLT and functional Java 8 patterns to handle heterogeneous data sources.",
      "Integrated AWS cloud services (EC2, S3, Lambda, VPC) to build resilient, auto-scaling infrastructure.",
      "Led the implementation of GitLab CI/CD pipelines with comprehensive SonarQube quality gates.",
      "Developed secure, role-based access control (RBAC) flows for financial accounting modules."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend Mastery",
    skills: ["Java 8/11/17", "Spring Boot", "Microservices", "Spring Security", "Spring Batch", "OpenAPI/Swagger", "SQL & NoSQL"]
  },
  {
    category: "Frontend Excellence",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Server-Side Rendering"]
  },
  {
    category: "Data & Messaging",
    skills: ["Apache Kafka", "RabbitMQ", "MongoDB Atlas", "PostgreSQL", "Oracle DB", "Redis Cache"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3)", "Docker", "GitLab CI/CD", "CloudWatch", "Terraform (Basic)"]
  },
  {
    category: "Engineering Standards",
    skills: ["JUnit 5", "Mockito", "Testcontainers", "Clean Code", "Design Patterns", "Agile/Scrum"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Terna Engineering College",
    period: "2018 – 2021",
    degree: "B.E. in Information Technology"
  },
  {
    institution: "Government Polytechnic Thane",
    period: "2015 – 2018",
    degree: "Diploma in Computer Engineering"
  }
];

// Added SYSTEM_INSTRUCTION to provide context for the Gemini AI assistant and fix the error in geminiService.ts
export const SYSTEM_INSTRUCTION = `You are a professional and helpful AI assistant for Rupam Lokhande, a Senior Full Stack Developer.
Your goal is to answer questions about Rupam's professional background, skills, education, and experience based on the provided information.

Information about Rupam:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Current Role: Senior Full Stack Developer at Excellia since September 2021.
- Key Expertise: Java Spring Boot, Microservices, Next.js, React, Kafka, AWS.
- Bio: ${PERSONAL_INFO.bio}

Keep your responses professional, concise, and focused on Rupam's career. If someone asks something unrelated to Rupam's professional life, politely steer the conversation back to his expertise.`;