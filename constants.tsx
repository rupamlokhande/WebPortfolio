
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

// Added SYSTEM_INSTRUCTION for the Gemini API to understand the context of the resume
export const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Rupam Lokhande's portfolio website. 
Your goal is to answer questions about Rupam's professional background, skills, and experience based on his resume data.

Rupam's Details:
- Name: ${PERSONAL_INFO.name}
- Current Title: ${PERSONAL_INFO.title}
- Location: ${PERSONAL_INFO.location}
- Bio: ${PERSONAL_INFO.bio}

Experience Highlights:
${EXPERIENCES.map(exp => `- ${exp.role} at ${exp.company} (${exp.period}): ${exp.highlights.join(' ')}`).join('\n')}

Technical Skills:
${SKILL_GROUPS.map(group => `- ${group.category}: ${group.skills.join(', ')}`).join('\n')}

Education:
${EDUCATIONS.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.period})`).join('\n')}

Guidelines:
1. Always be professional, polite, and encouraging.
2. If someone asks for Rupam's contact details, provide his email: ${PERSONAL_INFO.email} or LinkedIn: ${PERSONAL_INFO.linkedin}.
3. If a question is outside the scope of Rupam's professional profile, politely steer the conversation back or suggest they contact him directly.
4. Keep responses concise but informative.
5. Use Markdown for formatting if helpful.`;
