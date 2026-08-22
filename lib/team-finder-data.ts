export type TeamType = 
  | "Hackathon"
  | "Project"
  | "Coding Competition"
  | "Ideathon"
  | "Robotics / IoT"
  | "Startup / Pitch Competition"
  | "College Event";

export const TEAM_TYPES: TeamType[] = [
  "Hackathon",
  "Project",
  "Coding Competition",
  "Ideathon",
  "Robotics / IoT",
  "Startup / Pitch Competition",
  "College Event"
];

export const RECOMMENDED_SKILLS: Record<TeamType, string[]> = {
  "Hackathon": [
    "Frontend / Web Development",
    "Backend",
    "AI / ML",
    "UI / UX Design",
    "Research / Problem Understanding",
    "Pitching / Presentation",
    "Hardware / IoT"
  ],
  "Project": [
    "Frontend / Web Development",
    "Backend",
    "Database Management",
    "UI / UX Design",
    "Project Management"
  ],
  "Coding Competition": [
    "C / C++",
    "DSA",
    "Problem Solving",
    "Competitive Programming",
    "Java",
    "Python"
  ],
  "Ideathon": [
    "Research",
    "Idea Building",
    "Problem Solving",
    "PPT / Presentation",
    "Pitching",
    "Design"
  ],
  "Robotics / IoT": [
    "Electronics",
    "Arduino / IoT",
    "Programming",
    "Hardware",
    "CAD / Design",
    "Sensors"
  ],
  "Startup / Pitch Competition": [
    "Product / Idea Strategy",
    "Business",
    "Market Research",
    "UI / UX",
    "Tech",
    "Pitching / Presentation"
  ],
  "College Event": [
    "Event Management",
    "Marketing",
    "Design",
    "Public Speaking",
    "Logistics",
    "Content Writing"
  ]
};
