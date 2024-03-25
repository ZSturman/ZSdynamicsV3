export type PipelineStageType = {
  id: number;
  name: string;
  description: string;
  imageBg: string;
  imageFg: string;
  items: string[];
};

export const pipelineStages: PipelineStageType[] = [
  {
    id: 0,
    name: "The Frontend Development Lifecycle",
    description:
    "A structured approach to frontend development ensures projects are strategically planned, beautifully executed, and rigorously validated.",
    imageBg: "frontendPipeline.webp",
    imageFg: "tree1.svg",
    items: [],
  },
  {
    id: 1,
    name: "Project Discovery",
    description: "Collaborating to identify the project's vision, target users, key functionalities, and deadlines.",
    imageBg: "requirementAnalysis.webp",
    imageFg: "cityBuildings5.svg",
    items: ["Client Consultations", "User Persona Development", "Competitive Analysis", "Detailed Scope Document"],
  },
  {
    id: 2,
    name: "UX-Focused Design",
    description: "Crafting intuitive user experiences through visually appealing, user-centric interfaces.",
    imageBg: "design.webp",
    imageFg: "cityBuildings4.svg",
    items: ["Low-Fidelity Wireframes",
    "High-Fidelity Mockups",
    "Interactive Prototypes",
    "Accessibility Evaluation",],
  },
  {
    id: 3,
    name: "Foundation Setup & Coding",
    description: "Establishing a robust project foundation and transforming designs into functional code",
    imageBg: "development.webp",
    imageFg: "cityBuildings3.svg",
    items: ["Development Environment Setup",
    "Git Version Control",
    "Semantic HTML, CSS, JavaScript",
    "Framework Implementation",],
  },
  {
    id: 4,
    name: "Comprehensive Testing",
    description: "Ensuring optimal functionality, compatibility, and performance across platforms.",
    imageBg: "testing.webp",
    imageFg: "cityBuildings2.svg",
    items: [
      "Unit Testing",
      "Integration Testing",
      "Cross-Browser & Device Testing",
      "Load and Stress Testing",
    ],
  },
  {
    id: 5,
    name: "Stakeholder Review",
    description: "Seeking feedback and securing approval for a successful launch.",
    imageBg: "review.webp",
    imageFg: "cityBuildings1.svg",
    items: ["Design & Functionality Walkthroughs",
    "Iterative Refinement",
    "Formal Sign-Off",],
  },
  {
    id: 6,
    name: "Strategic Deployment",
    description: "Seamlessly launching the web project into its live environment.",
    imageBg: "deployment.webp",
    imageFg: "trees1.svg",
    items: ["Staging Environment Deployment",
    "Production Release",
    "DNS Configuration",
    "Reliable Web Hosting",
    "Database Integration",],
  },
  {
    id: 7,
    name: "Post-Launch Optimization",
    description: "Providing ongoing support and maximizing the website's impact.",
    imageBg: "postLaunch.webp",
    imageFg: "tree2.svg",
    items: ["Proactive Maintenance and Updates",
    "Responsive User Support",
    "Performance Monitoring & Analytics",
    "Search Engine Optimization (SEO)",],
  },
];