// ─────────────────────────────────────────────────────────────
// All portfolio content lives in this one file.
// Replace the sample text and image paths with your own —
// no need to touch any component code.
// Images referenced as "/assets/..." should be placed in /public/assets/
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Shree Mathi K",
  role: "Software Developer — Fresher",
  // Shown as the dot-separated line above the name in the hero.
  roles: [
    "Software Developer",
    "Full-Stack Enthusiast",
    "Web Developer",
    "AI Enthusiast",
  ],
  tagline:
    "I build clean, functional web applications and back every claim on this page with a screenshot, a certificate, or a working link.",
  location: "Coimbatore, Tamil Nadu, India",
  photo: "/assets/profile.png",
  resumeFile: "/assets/shreemathi_Resume.pdf",
  about: [
    " I’m a Computer Science Engineering student specializing in Cyber Security, with a strong interest in building practical software that solves real problems.",
    "I enjoy working across the stack—from designing responsive interfaces and developing backend APIs to integrating databases, authentication, and AI-powered features. My projects have taken me from full-stack web applications and security tools to RAG-based chatbots and developer-focused AI solutions, giving me hands-on experience beyond classroom concepts.",
    "I’m particularly interested in Java, Full Stack Development, AI/LLM applications, and problem solving. I like understanding how things work under the hood, turning an idea into a working product, and continuously improving the implementation rather than stopping at a basic prototype.",
  ],
  socials: {
    github: "https://github.com/shreemathi-1",
    leetcode: "https://leetcode.com/u/shree_mathi_/",
    linkedin: "https://www.linkedin.com/in/shree-mathi-k-3456kk/",
    email: "shreemathik005@gmail.com",
    phone: "+91 8610482429",
  },
};

// The chip row under "Core Expertise" in the hero. "tone" picks the dot colour
// from the theme tokens — accent | ink | highlight | muted.
export const coreExpertise = [
  { name: "Java", tone: "accent" },
  { name: "MySQL", tone: "accent" },
  { name: "JavaScript", tone: "ink" },
  { name: "React", tone: "accent" },
  { name: "Node.js", tone: "accent" },
  { name: "Python", tone: "highlight" },
  { name: "Tailwind CSS", tone: "ink" },
  { name: "React Native", tone: "ink" },
  { name: "Git & GitHub", tone: "muted" },
  { name: "REST APIs", tone: "highlight" },
];

// The three areas the About section highlights, each with an icon tile.
export const focusAreas = [
  { icon: "🧩", label: "Full-Stack Web Development" },
  { icon: "⚡", label: "AI Enthusiast" },
  { icon: "☁️", label: "Mobile application development" },
];

// Shown as the Education column beside the About text.
export const education = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science & Engineering(Cyber Security)",
    institution: "Dr.NGP Institute of Technology",
    years: "2023–2027",
    score: "CGPA: 8.71",
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Lourde Matha Convent Matric Higher Secondary School",
    years: "2022–2023",
    score: "82.5%",
  },
];

// Skills grouped by category. Each group gets an icon for its card.
// "proof" is a screenshot, certificate or short video clip backing the skill —
// an .mp4/.webm/.mov opens as a video, anything else as an image. null means
// nothing is uploaded yet.
export const skillGroups = [
  {
    category: "💻 Programming Languages",
    skills: [
      { name: "Java", proof: "assets/skills/java.png" },
      { name: "Python", proof:"assets/skills/python.png"   },
    ],
  },
  {
    category: "🎨 Frontend",
    skills: [
      { name: "HTML / CSS", proof: "assets/skills/html.png"  },
      { name: "JavaScript", proof: "assets/skills/javascript.png"  },
      {
        name: "React",
        proof: "assets/skills/react.png",
      },
      // { name: "Redux", proof: null },
    ],
  },
  {
    category: "⚙️ Backend & APIs",
    skills: [
      { name: "SpringBoot", proof: "assets/skills/springboot.png" },
      { name: "Node.js / Express", proof: "assets/skills/nodejs.png" },
      { name: "REST APIs", proof: "assets/skills/springboot.png" },
    ],
  },
  {
    category: "🗄️ Databases & Cloud",
    skills: [
      { name: "MySQL", proof: "assets/skills/sql-1.png"},
      { name: "PostgreSQL", proof: "assets/skills/postgres.png" },
    //  {
    //     name: "AWS (basics)",
    //     proof: "/assets/placeholders/certificate-placeholder.svg",
    //   }, 
    ],
  },
  {
    category: " 🛠️ Tools & Workflow",
    skills: [
      { name: "Git & GitHub", proof: "assets/skills/github.png" },
      { name: "Figma", proof: "assets/skills/figma.png" },
      { name: "PostMan", proof: "assets/skills/postman.png"},
      { name: "Vercel", proof: "assets/skills/vercel.png" },
      // { name: "Render", proof: null },
      { name: "Docker (basics)", proof: "assets/skills/docker.png" },
    ],
  },
  {
    category: "🤖 AI Skills",
    skills: [
      { name: "RAG", proof: "/assets/projects/rag-bot-1.png" },
      { name: "Agents & skills", proof: "assets/skills/agents and skills.png" },
      { name: "Agent harness", proof: "assets/skills/harness.png"},
      { name: "Agent-based development", proof: "assets/skills/agents and skills.png" },
      { name: "Claude code", proof: "assets/skills/claude-code.png"}
    ],
  },
];

// Each project can include a gallery of screenshots and/or a demo video.
export const projects = [
  {
    id: "Pre-Prompt Sensitive Data Protection System",
    name: "Pre-Prompt Sensitive Data Protection System WebApp",
    tagline:
      "A Web Application and also a VS Code Plugin to detect and mask sensitive data",
    description: [
      "Developed a pre-prompt security checker where users enter prompts intended for AI chatbots, ",
      "which are scanned for sensitive information such as email addresses, phone numbers, API keys,",
      "and IP addresses using pattern matching and predefined security rules.",
      "Implemented optional data masking, allowing users to mask detected sensitive information before",
      "copying or using the sanitized prompt in an AI chatbot.",
    ],
    tech: ["React", " Node.js", "Express.js", "PostgresSQL"],

    github: "",
    // live: "",
    video: "",
    screenshots: [
      "/assets/projects/promptGuard.png",
      // "/assets/placeholders/project-placeholder.svg",
      // "/assets/placeholders/project-placeholder.svg",
    ],
  },
  {
    id: "GitHub Repository Analyzer",
    name: "GitHub Repository Analyzer WebApp",
    tagline: "A WebApp that analyzes and give insights about repositories",
    description: [
      "Developed an AI-powered application that analyzes GitHub repositories and generates project",
      "architecture insights to help developers understand unfamiliar codebases faster.",
      "Built an interactive repository structure visualization with AI-generated explanations for folders and",
      "files, technology stack and project summary.",
    ],
    tech: ["React", "NodeJS", "ExpressJS", "Gemini API", "GitHub API", "Vercel"],

    github: "",
    // live: "https://spendwise-demo.onrender.com",
    video: "",
    screenshots: [
      "/assets/projects/repomind-1.png",
      // "/assets/placeholders/project-placeholder.svg",
    ],
  },
  {
    id: "RAG-Based College Q&A Assisstant",
    name: "Website-Integrated RAG-Based College Q&A assisstant",
    tagline: "Search recipes by the ingredients already in your fridge.",
    description:
     [
      "Developed a source-grounded RAG chatbot for a college website that answers academic, examination,",
"and admissions queries from official institutional documents with easy knowledge-base updates -",
"new PDFs/documents can be ingested via a single script without code changes.",
"Built a full retrieval pipeline with local embedding generation, vector search, and LLM-based answer",
"synthesis, along with a REST API backend and an embeddable chat widget.",
     ],
    tech: ["Python", "FastAPI", "ChromaDB", "Sentence-Transformers", "Groq API"],
    github: "",
    // live: "https://recipe-radar-demo.vercel.app",
    video: "",
    screenshots: ["/assets/projects/rag-bot-1.png"],
  },
  // {
  //   id: "taskflow-cli",
  //   name: "TaskFlow CLI",
  //   tagline: "A command-line task manager with tags, due dates and reminders.",
  //   description:
  //     "A Python CLI tool storing tasks in a local SQLite file, with fuzzy search and colour-coded priority levels. Packaged and published to TestPyPI as a learning exercise.",
  //   tech: ["Python", "SQLite", "Click"],
  //   github: "https://github.com/shreemathi/taskflow-cli",
  //   live: "",
  //   video: "",
  //   screenshots: ["/assets/placeholders/project-placeholder.svg"],
  // },
];

// Rendered as the Experience timeline. "highlights" are the arrow bullets;
// "photo" is kept for reference but the timeline layout does not display it.
export const internships = [
  {
    id: "internship-1",
    company: "Tamil Nadu Government Cyber Crime Wing – Chennai",
    role: "Web Developer Intern",
    duration: "Jun 2025 – Jul 2025",
    length: "1 month",
    location: "Chennai, India",
    photo: "/assets/internships/web_deve_intern.jpeg",
    certificate: "/assets/internships/web_deve_Intern.jpeg",
    description:
    [
      "Developed a role-based Daily Situation Report (DSR) web app for managing cybercrime reports across",
      "multiple police stations using ReactJS, Postgres, Supabase, and RESTful APIs.",
  ],
    highlights: [
      "Developed a role-based Daily Situation Report (DSR) web app for managing cybercrime reports across",
"multiple police stations using ReactJS, Postgres, Supabase, OAuth authentication and RESTful APIs.",
    ],
    tech: ["React", "Javascript", "Nodejs"],
  },
  {
    id: "internship-2",
    company: "Hackup Technologies",
    role: "Web Testing Intern",
    duration: "Jun 2025",
    length: "15 days",
    location: "Hybrid - Coimbatore",
    photo: "/assets/internships/testing_intern.jpeg",
    certificate: "/assets/internships/testing_intern.jpeg",
    description:
    [
      "Learned the fundamentals of web application security testing and vulnerability assessments using",
"Nmap, Wireshark and BurpSuite.",
    ],
    highlights: [
      "Built internal REST APIs for a reporting tool used by 5 analysts daily",
      "Wrote data-cleaning scripts that reduced manual spreadsheet work by roughly 6 hours a week",
      "Worked in Python and Flask against a PostgreSQL warehouse",
    ],
    tech: ["Python", "Flask", "PostgreSQL"],
  },
];

// Certifications gallery. "image" is the certificate picture itself —
// drop the real file in /public/assets and point at it here. These entries are
// sample placeholders: replace the titles, issuers and dates with your own.
export const certifications = [
  {
    id: "cert-1",
    title: "Artificial intelligence",
    issuer: "Elewayte",
    date: "April - May 2024",
    image: "/assets/certifications/elewayte_AI_certificate.jpeg",
  },
  {
    id: "cert-2",
    title: "HTML Essential Training",
    issuer: "LinkedIn Learning",
    date: "May 2026",
    image: "/assets/certifications/html_LL_certificate.jpeg",
  },
  {
    id: "cert-3",
    title: "MySQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jun 2026",
    image: "/assets/certifications/mySQL_LL_certificate.jpeg",
  },
  {
    id: "cert-4",
    title: "Learning Git and Githu",
    issuer: "LinkedIn Learning",
    date: "Jun 2026",
    image: "/assets/certifications/git_LL_certificate.jpeg",
  },
  {
    id: "cert-5",
    title: "Frontend Development - HTML",
    issuer: "Great Learning",
    date: "April 2024",
    image: "/assets/certifications/frontend_GL.jpg",
  },
  // {
  //   id: "cert-6",
  //   title: "SQL for Data Analysis",
  //   issuer: "Sample Academy",
  //   date: "February 2024",
  //   image: "/assets/placeholders/certificate-placeholder.svg",
  // },
];

export const achievements = [
  {
    id: "ach-1",
    title: "Unisys UIP Project Ideathon — Finalist",
    year: "2026",
    photo: "/assets/highlights/Unisys_certificate.jpeg",
    description:
      "Team of 4 selected among top 50 nationally out of 1000+ teams for a Project Innovation Ideathon Challenge ",
  },
  {
    id: "ach-2",
    title: "College Debugging Competition” — 1st Place",
    year: "2024",
    photo: "/assets/highlights/CTF_winning_certificate.jpeg",
    description:
      "Won the annual inter-department competitive Capture The Flag contest.",
  },
  // {
  //   id: "ach-3",
  //   title: "Open-source contributor",
  //   year: "2024",
  //   photo: "/assets/placeholders/achievement-placeholder.svg",
  //   description:
  //     "Merged 5 accepted pull requests to a mid-size open-source React UI library.",
  // },
];

// Used to embed the free, public GitHub / LeetCode stat-card services.
// Events and workshops attended, shown under Highlights. "image" is the
// participation certificate. These are sample placeholders — replace them.
export const workshops = [
 {
  id: "ws-1",
  title: "Paper presentation and coding competitions",
  organiser: "Bannari Amman Institute of Technology (BIT)",
  format: "Paper presentation & Technical Competitions",
  date: "Nov 6, 2024",
  image: "/assets/events/BIT_Paper_Presentation_certificate.jpeg",
},
  {
  id: "ws-2",
  title: "BuildX'26 Buildathon",
  organiser: "BuildX'26",
  format: "6-Week Buildathon",
  date: "Jun 1 – Jul 13, 2026",
  description: "Explored AI tools and learned to leverage AI-powered technologies for rapid prototyping, development, and problem-solving.",
  image: "/assets/placeholders/certificate-placeholder.svg",
},
  {
  id: "ws-3",
  title: "Hands-on Workshop on LangChain and AI",
  organiser: "PSG Institute of Technology and Applied Research",
  format: "2-Day Workshop",
  date: "Mar 15–16, 2024",
  description: "Gained hands-on exposure to LangChain and its applications in building LLM-powered applications and AI workflows.",
  image: "/assets/placeholders/certificate-placeholder.svg",
},
];

export const tracking = {
  githubUsername: "shreemathi-1",
  leetcodeUsername: "shree_mathi_",
};

export const contact = {
  heading: "Let's connect",
  message:
    "I'm actively looking for a full-time or internship role as a fresher developer. The fastest way to reach me is email or LinkedIn — I reply within a day.",
};
