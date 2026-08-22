export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Tool {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  bestFor: string;
  difficulty: DifficultyLevel;
  tags: string[];
  officialUrl: string;
  youtubeUrl: string;
  learningText: string;
  iconType?: "image" | "emoji";
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", name: "All", icon: "🧰" },
  { id: "design", name: "PPT, Posters & Presentations", icon: "🎨" },
  { id: "coding", name: "Coding & Programming", icon: "💻" },
  { id: "development", name: "Website, App & UI/UX", icon: "🌐" },
  { id: "hardware", name: "Electronics, IoT & Hardware", icon: "🔧" },
  { id: "engineering", name: "Engineering Design & Simulation", icon: "🏗️" },
  { id: "learning", name: "Learning & Skill Development", icon: "📚" },
  { id: "competitions", name: "Competitions & Opportunities", icon: "🏆" }
];

export const TOOLS: Tool[] = [
  // 🎨 PPT, Posters & Presentations
  {
    id: "canva",
    name: "Canva",
    categoryId: "design",
    description: "Create presentations, posters, resumes, social media graphics and other visual content.",
    bestFor: "Presentations • Posters • Resumes • Design",
    difficulty: "Beginner",
    tags: ["Presentation", "Design", "Beginner", "Graphics"],
    officialUrl: "https://www.canva.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Canva+beginner+tutorial",
    learningText: "Learn Canva",
    iconType: "image",
    icon: "/toolkit/canva.svg"
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    categoryId: "design",
    description: "Create professional academic presentations, seminar slides, project presentations and viva presentations.",
    bestFor: "PPTs • Seminars • Project Reviews",
    difficulty: "Beginner",
    tags: ["Presentation", "Academic", "Slides"],
    officialUrl: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
    youtubeUrl: "https://www.youtube.com/results?search_query=PowerPoint+beginner+tutorial",
    learningText: "Master PowerPoint",
    iconType: "image",
    icon: "/toolkit/powerpoint.svg"
  },
  {
    id: "gamma",
    name: "Gamma",
    categoryId: "design",
    description: "Create modern AI-assisted presentations and visual documents from simple prompts.",
    bestFor: "AI Presentations • Quick Decks",
    difficulty: "Beginner",
    tags: ["AI", "Presentation", "Fast"],
    officialUrl: "https://gamma.app",
    youtubeUrl: "https://www.youtube.com/results?search_query=Gamma+app+beginner+tutorial",
    learningText: "Learn Gamma",
    iconType: "image",
    icon: "/toolkit/gamma.svg"
  },

  // 💻 Coding & Programming
  {
    id: "leetcode",
    name: "LeetCode",
    categoryId: "coding",
    description: "Practice data structures, algorithms and coding interview problems.",
    bestFor: "DSA • Coding Interviews • Problem Solving",
    difficulty: "Intermediate",
    tags: ["DSA", "Interviews", "Coding", "Algorithms"],
    officialUrl: "https://leetcode.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=LeetCode+beginner+guide",
    learningText: "Start DSA",
    iconType: "image",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
  {
    id: "codechef",
    name: "CodeChef",
    categoryId: "coding",
    description: "Practice competitive programming and participate in coding contests.",
    bestFor: "Competitive Programming • Algorithms",
    difficulty: "Intermediate",
    tags: ["Competitive", "Algorithms", "Contests"],
    officialUrl: "https://www.codechef.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=CodeChef+beginner+guide",
    learningText: "Start Coding",
    iconType: "image",
    icon: "/toolkit/codechef.svg"
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    categoryId: "coding",
    description: "Practice programming, technical skills and interview-oriented problems.",
    bestFor: "Programming • Assessments • Interviews",
    difficulty: "Beginner",
    tags: ["Coding", "Assessments", "Practice"],
    officialUrl: "https://www.hackerrank.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=HackerRank+beginner+guide",
    learningText: "Learn HackerRank",
    iconType: "image",
    icon: "/toolkit/hackerrank.png"
  },
  {
    id: "smartinterviews",
    name: "Smart Interviews",
    categoryId: "coding",
    description: "Practice DSA and placement-oriented coding problems.",
    bestFor: "DSA • Placements • Coding Interviews",
    difficulty: "Beginner",
    tags: ["Placements", "DSA", "Interviews"],
    officialUrl: "https://smartinterviews.in",
    youtubeUrl: "https://www.youtube.com/results?search_query=Smart+Interviews+coding",
    learningText: "Start DSA Prep",
    iconType: "image",
    icon: "/toolkit/smartinterviews.png"
  },

  // 🌐 Website, App & UI/UX
  {
    id: "figma",
    name: "Figma",
    categoryId: "development",
    description: "Design websites, mobile apps, wireframes, prototypes and UI systems.",
    bestFor: "UI/UX • Prototyping • App Design",
    difficulty: "Beginner",
    tags: ["UI/UX", "Design", "Prototype", "Wireframe"],
    officialUrl: "https://www.figma.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Figma+beginner+tutorial",
    learningText: "Learn Figma",
    iconType: "image",
    icon: "/toolkit/figma.png"
  },
  {
    id: "vscode",
    name: "VS Code",
    categoryId: "development",
    description: "A powerful code editor for programming, web development and software projects.",
    bestFor: "Coding • Web Development • Projects",
    difficulty: "Beginner",
    tags: ["Editor", "Coding", "Web", "Dev"],
    officialUrl: "https://code.visualstudio.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=VS+Code+beginner+tutorial",
    learningText: "Learn VS Code",
    iconType: "image",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
  },
  {
    id: "github",
    name: "GitHub",
    categoryId: "development",
    description: "Store, manage and collaborate on code using Git and GitHub.",
    bestFor: "Git • Collaboration • Portfolio",
    difficulty: "Beginner",
    tags: ["Git", "Collaboration", "Portfolio", "Version Control"],
    officialUrl: "https://github.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Git+and+GitHub+for+beginners",
    learningText: "Learn Git & GitHub",
    iconType: "image",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
  },
  {
    id: "vercel",
    name: "Vercel",
    categoryId: "development",
    description: "Deploy and host modern web applications.",
    bestFor: "Deployment • Web Apps • Hosting",
    difficulty: "Beginner",
    tags: ["Deployment", "Web", "Hosting"],
    officialUrl: "https://vercel.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Vercel+deployment+tutorial",
    learningText: "Learn Deployment",
    iconType: "image",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
  },
  {
    id: "firebase_supabase",
    name: "Supabase",
    categoryId: "development",
    description: "Backend services, authentication, databases, storage and cloud services.",
    bestFor: "Backend • Auth • Database",
    difficulty: "Intermediate",
    tags: ["Backend", "Database", "Auth", "BaaS"],
    officialUrl: "https://supabase.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Supabase+beginner+tutorial",
    learningText: "Learn Backend Basics",
    iconType: "image",
    icon: "/toolkit/supabase.svg"
  },

  // 🔧 Electronics, IoT & Hardware
  {
    id: "arduino",
    name: "Arduino IDE",
    categoryId: "hardware",
    description: "Write and upload programs to Arduino boards.",
    bestFor: "Arduino • Embedded Systems • IoT",
    difficulty: "Beginner",
    tags: ["Arduino", "IoT", "Embedded", "Hardware"],
    officialUrl: "https://www.arduino.cc/en/software",
    youtubeUrl: "https://www.youtube.com/results?search_query=Arduino+beginner+tutorial",
    learningText: "Start Arduino",
    iconType: "image",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"
  },
  {
    id: "wokwi",
    name: "Wokwi",
    categoryId: "hardware",
    description: "Online electronics simulator for Arduino, ESP32 and other microcontroller projects.",
    bestFor: "IoT • Simulation • Prototyping",
    difficulty: "Beginner",
    tags: ["IoT", "Simulation", "Arduino", "ESP32"],
    officialUrl: "https://wokwi.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Wokwi+arduino+simulator+tutorial",
    learningText: "Try IoT Simulation",
    iconType: "image",
    icon: "/toolkit/wokwi.png"
  },
  {
    id: "tinkercad",
    name: "Tinkercad",
    categoryId: "hardware",
    description: "Beginner-friendly electronics and Arduino simulation platform.",
    bestFor: "Circuit Design • Arduino • Beginners",
    difficulty: "Beginner",
    tags: ["Circuit", "Arduino", "Beginner", "Simulation"],
    officialUrl: "https://www.tinkercad.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Tinkercad+arduino+tutorial",
    learningText: "Start Tinkercad",
    iconType: "image",
    icon: "/toolkit/tinkercad.png"
  },

  // 🏗️ Engineering Design & Simulation
  {
    id: "autocad",
    name: "AutoCAD",
    categoryId: "engineering",
    description: "Create 2D drawings, engineering designs and technical drawings.",
    bestFor: "CAD • Engineering Drawing • Design",
    difficulty: "Intermediate",
    tags: ["CAD", "Design", "Drawing", "Engineering"],
    officialUrl: "https://www.autodesk.com/products/autocad/overview",
    youtubeUrl: "https://www.youtube.com/results?search_query=AutoCAD+beginner+tutorial",
    learningText: "Learn AutoCAD",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/autodesk/0696D7"
  },
  {
    id: "fusion360",
    name: "Fusion 360",
    categoryId: "engineering",
    description: "3D CAD, mechanical design, product development and prototyping.",
    bestFor: "3D Design • CAD • Product Design",
    difficulty: "Intermediate",
    tags: ["3D", "CAD", "Product", "Mechanical"],
    officialUrl: "https://www.autodesk.com/products/fusion-360/overview",
    youtubeUrl: "https://www.youtube.com/results?search_query=Fusion+360+beginner+tutorial",
    learningText: "Learn Fusion 360",
    iconType: "image",
    icon: "/toolkit/fusion360.svg"
  },
  {
    id: "matlab",
    name: "MATLAB",
    categoryId: "engineering",
    description: "Numerical computing, engineering calculations, simulations and data analysis.",
    bestFor: "Engineering • Simulation • Data",
    difficulty: "Advanced",
    tags: ["Engineering", "Simulation", "Data", "Math"],
    officialUrl: "https://www.mathworks.com/products/matlab.html",
    youtubeUrl: "https://www.youtube.com/results?search_query=MATLAB+beginner+tutorial",
    learningText: "Learn MATLAB",
    iconType: "emoji",
    icon: "📈"
  },

  // 📚 Learning & Skill Development
  {
    id: "w3schools",
    name: "W3Schools",
    categoryId: "learning",
    description: "Beginner-friendly tutorials for programming and web development.",
    bestFor: "Web Development • Programming • Beginners",
    difficulty: "Beginner",
    tags: ["Web", "Programming", "Tutorials", "Beginner"],
    officialUrl: "https://www.w3schools.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=W3Schools+html+css+tutorial",
    learningText: "Start Learning",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/w3schools/04AA6D"
  },
  {
    id: "geeksforgeeks",
    name: "GeeksforGeeks",
    categoryId: "learning",
    description: "Learn programming, DSA, computer science concepts and interview preparation.",
    bestFor: "DSA • CS Fundamentals • Interviews",
    difficulty: "Intermediate",
    tags: ["DSA", "CS", "Interviews", "Articles"],
    officialUrl: "https://www.geeksforgeeks.org",
    youtubeUrl: "https://www.youtube.com/results?search_query=GeeksforGeeks+DSA+beginner",
    learningText: "Learn DSA",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46"
  },
  {
    id: "nptel",
    name: "NPTEL",
    categoryId: "learning",
    description: "University-level technical courses and learning resources from IITs and IISc.",
    bestFor: "Courses • Engineering • Certification",
    difficulty: "Advanced",
    tags: ["Courses", "Engineering", "Certification", "IIT"],
    officialUrl: "https://nptel.ac.in",
    youtubeUrl: "https://www.youtube.com/results?search_query=NPTEL+courses+overview",
    learningText: "Start Learning",
    iconType: "image",
    icon: "/toolkit/nptel.png"
  },

  // 🏆 Competitions & Opportunities
  {
    id: "unstop",
    name: "Unstop",
    categoryId: "competitions",
    description: "Discover internships, hackathons, competitions, scholarships and hiring opportunities.",
    bestFor: "Internships • Hackathons • Competitions",
    difficulty: "Beginner",
    tags: ["Internships", "Hackathons", "Competitions", "Jobs"],
    officialUrl: "https://unstop.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=How+to+use+Unstop",
    learningText: "Explore Opportunities",
    iconType: "image",
    icon: "/toolkit/unstop.png"
  },
  {
    id: "devpost",
    name: "Devpost",
    categoryId: "competitions",
    description: "Discover hackathons, build projects and showcase your work.",
    bestFor: "Hackathons • Projects • Developers",
    difficulty: "Intermediate",
    tags: ["Hackathons", "Projects", "Developers"],
    officialUrl: "https://devpost.com",
    youtubeUrl: "https://www.youtube.com/results?search_query=Devpost+hackathon+guide",
    learningText: "Explore Hackathons",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/devpost/003E54"
  }
];

