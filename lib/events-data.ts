export interface EventData {
  id: string;
  title: string;
  category: string;
  date?: string;
  location?: string;
  heroImage: string;
  images: string[];
  description: string;
  registrationLink?: string;
  prizePool?: string;
}

export const eventsData: EventData[] = [
  {
    id: "athenes",
    title: "Athenes",
    category: "Cultural Fest",
    date: "April",
    location: "BVRIT Campus",
    heroImage: "/events/athenes/thumbnail.jpg",
    images: [
      "/events/athenes/gallery-1.jpg",
      "/events/athenes/gallery-2.jpg",
      "/events/athenes/gallery-3.jpg",
      "/events/athenes/gallery-4.jpg",
      "/events/athenes/gallery-5.jpg"
    ],
    description: "Athenes is BVRIT's Annual Fest which is the biggest fest of BVRIT where many celebrities visit campus as guests and a musical concert will also be conducted till late night. Event duration is 2 days.",
    registrationLink: "#"
  },
  {
    id: "avirbhav",
    title: "Avirbhav",
    category: "Traditional Fest",
    date: "Jan - Feb",
    location: "Main Auditorium, BVRIT",
    heroImage: "/events/avirbhav/thumbnail.jpg",
    images: [
      "/events/avirbhav/hero.jpg",
      "/events/avirbhav/gallery-1.jpg",
      "/events/avirbhav/gallery-2.jpg",
      "/events/avirbhav/gallery-3.jpg"
    ],
    description: "Avirbhav is BVRIT's premier Techno-Cultural festival. A platform where innovation meets art. Prepare for two days of breathtaking performances, technical showdowns, and unforgettable memories."
  },
  {
    id: "hostel-day",
    title: "Hostel Day",
    category: "Celebration",
    date: "Sept - Nov",
    location: "BVRIT Hostels",
    heroImage: "/events/hostel-day/thumbnail.jpg",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A special night dedicated to the hostelers of BVRIT. Enjoy great food, music, dance performances, and celebrate the bonds forged in the hostel corridors.",
  },
  {
    id: "m-baja",
    title: "M-BAJA",
    category: "Motorsports",
    heroImage: "/events/m-baja/4.jpg",
    images: [
      "/events/m-baja/1.jpg",
      "/events/m-baja/2.jpg",
      "/events/m-baja/3.jpg",
      "/events/m-baja/5.jpg",
      "/events/m-baja/6.jpg",
      "/events/m-baja/7.jpg",
      "/events/m-baja/8.jpg",
      "/events/m-baja/9.jpg",
      "/events/m-baja/10.jpg"
    ],
    description: "M-BAJA is a thrilling off-road buggy racing event where teams of engineering students design, build, and race off-road vehicles. Experience the adrenaline rush as students put their engineering skills, teamwork, and innovation to the ultimate test in rugged terrains."
  },
  {
    id: "mun",
    title: "Model United Nations",
    category: "Debate & Diplomacy",
    heroImage: "/events/mun/thumbnail.jpg",
    images: [
      "/events/mun/1.jpg",
      "/events/mun/2.jpg",
      "/events/mun/3.jpg",
      "/events/mun/4.jpg"
    ],
    description: "BVRIT MUN is a premier simulation of the United Nations where students step into the shoes of international diplomats. Engage in rigorous debate, negotiate global crises, and develop your leadership and public speaking skills."
  }
];
