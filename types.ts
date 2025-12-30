
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  period: string;
  degree: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
