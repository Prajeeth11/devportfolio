export const siteConfig = {
  name: "Prajeeth Bharadwaj",
  title: "Software Engineer",
  description: "Portfolio of Prajeeth Bharadwaj, a Software Engineer and MS CS student at UW Madison.",
  accentColor: "#a173c6ff",
  social: {
    email: "iamprajeethbharadwaj11@gmail.com",
    linkedin: "https://www.linkedin.com/in/prajeeth-bharadwaj-9465b11b0/",
    github: "https://github.com/Prajeeth11",
  },
  aboutMe:
    "I am a Software Engineer and currently a Master of Science in Computer Sciences student at the University of Wisconsin–Madison. Previously, I worked as a Software Engineer at Fidelity Investments, where I developed specialized tools for investment strategies and optimization. I am passionate about full-stack development, machine learning, and building scalable, efficient solutions. My technical interests primarily lie in the intersection of Database Systems and Large Language Models (LLMs), focusing on how efficient data storage and retrieval can power the next generation of intelligent applications.",
  skills: [
    "Java",
    "Python",
    "LLMs (Large Language Models)",
    "Machine Learning",
    "C++",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "SQL (Postgres)",
    "NoSQL (MongoDB)",
    "AWS",
    "Docker",
    "Git",
    "Spring Boot",
    "Node.js",
  ],
  projects: [
    {
      name: "AQI Prediction",
      description:
        "Implemented three different machine learning algorithms (Decision trees, Random forest, XGboost) to predict the value of AQI using meteorological data. XGBoost provided the best MAE value of 19.58.",
      link: "http://www.irjcs.com/volumes/Vol10/iss-05/02.JNCS10081.pdf",
      skills: ["Python", "Machine Learning", "XGBoost", "Decision Trees", "Random Forest"],
    },
    {
      name: "Placement Portal",
      description:
        "Developed a placement portal for on-campus placement processes using FastAPI and Angular. Implemented student registration, interview scheduling, and job opportunity tracking.",
      link: "#",
      skills: ["Python", "FastAPI", "Angular", "HTML", "CSS"],
    },
    {
      name: "Movie Recommender System",
      description:
        "Built a website for trending movies and TV series with recommendations based on search. Implemented sentiment analysis on user reviews scraped from IMDb.",
      link: "#",
      skills: ["Python", "FastAPI", "HTML", "CSS", "JS"],
    },
    {
      name: "Game Hub",
      description:
        "Built a responsive game discovery web application using React and TypeScript, integrating with the RAWG Video Games API. Implemented scalable frontend architecture with Vite.",
      link: "https://game-hub-rust-nine.vercel.app/",
      skills: ["TypeScript", "React", "Vite", "Chakra UI"],
    },
    {
      name: "Attendance Management System",
      description:
        "Built a library management website to replace the manual ledger system. Features included one-click login for students/faculty and admin reporting.",
      link: "#",
      skills: ["C++", "MySQL", "JS", "HTML", "CSS"],
    },
    {
      name: "Traffic Management System",
      description:
        "Built a website for booking parking slots and vehicle registration. Provided admin options for tracking vehicle volume and timestamps.",
      link: "#",
      skills: ["C++", "MySQL", "JS", "HTML", "CSS"],
    },
  ],
  experience: [
    {
      company: "Fidelity Investments",
      title: "Software Engineer",
      dateRange: "Aug 2023 - Aug 2025",
      bullets: [
        "This tool is integral for Fidelity representatives, aiding them in advising customers on investment opportunities such as bonds and mutual funds. It offers personalized investment strategies tailored to individual customer needs. Developed the frontend using angular for all the flows of the tool.",
        "Wrote GraphQL APIs as a middleware to fetch relevant financial data from multiple APIs.",
        "Built a rehydration automation script for image containers and incident support.",
        "Part of LEAP Technology Program: Developed and deployed an end-to-end brokerage platform to AWS EC2.",
      ],
    },
    {
      company: "Fidelity Investments",
      title: "Software Engineer Intern",
      dateRange: "Jan 2023 - Jul 2023",
      bullets: [
        "Developed a tooling interactive dashboard for generating opportunity size of customers for Next Best Action (NBA).",
        "Automated manual processes and reduced turnaround time significantly.",
      ],
    },
  ],
  education: [
    {
      school: "University of Wisconsin–Madison",
      degree: "Master of Science in Computer Sciences",
      dateRange: "Aug 2025 - Present",
      achievements: [
        "GPA: 4.0/4.0",
        "Coursework: Intro to Algorithms, Intro to Databases, Foundational Models, Data Management for Data Science, High Performance Computing for Applications in Engineering",
      ],
    },
    {
      school: "JSS Science and Technology University",
      degree: "B.E. in Computer Science and Business Systems",
      dateRange: "Aug 2019 - July 2023",
      achievements: [
        "GPA: 9.24/10.0",
        "Coursework: Data Structures, Artificial Intelligence, Computer Networks, OOPs, Operating systems",
      ],
    },
  ],
};
