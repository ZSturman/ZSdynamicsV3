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
        name: "The Frontend Pipeline",
        description: "The frontend pipeline is a series of steps that are followed to develop a website or web application.",
        imageBg: "frontendPipeline.webp",
        imageFg: "tree1.svg",
        items: ["Requirement Analysis", "Design", "Development", "Testing", "Review", "Deployment", "Post Launch"],
    },
    {
      id: 1,
      name: "Requirement Analysis",
      description: "Gather and understand the requirements of the project",
      imageBg: "requirementAnalysis.webp",
      imageFg: "cityBuildings5.svg",
      items: ["Objective", "Audience", "Function", "Timeline"],
    },
    {
      id: 2,
      name: "Design",
      description: "Create wireframes and prototypes",
      imageBg: "design.webp",
      imageFg: "cityBuildings4.svg",
      items: ["Wireframe", "Prototyping", "Review and Approval"],
    },
    {
      id: 3,
      name: "Development",
      description: "Set up and version control",
      imageBg: "development.webp",
      imageFg: "cityBuildings3.svg",
      items: ["Set up", "Version Control"],
    },
    {
      id: 4,
      name: "Testing",
      description: "Unit, Integration, Cross Browser, Cross Device, Performance",
      imageBg: "testing.webp",
      imageFg: "cityBuildings2.svg",
      items: [
        "Unit",
        "Integration",
        "Cross Browser",
        "Cross Device",
        "Performance",
      ],
    },
    {
      id: 5,
      name: "Review",
      description: "Approval and Feedback",
      imageBg: "review.webp",
      imageFg: "cityBuildings1.svg",
      items: ["Approval", "Feedback"],
    },
    {
      id: 6,
      name: "Deployment",
      description: "Staging, Production, DNS, Web Hosting, Database Setup",
      imageBg: "deployment.webp",
      imageFg: "trees1.svg",
      items: ["Staging", "Production", "DNS", "Web Hosting", "Database Setup"],
    },
    {
      id: 7,
      name: "Post Launch",
      description: "Maintenance, Support, Analytics, SEO",
      imageBg: "postLaunch.webp",
      imageFg: "tree2.svg",
      items: ["Maintenance", "Support", "Analytics", "SEO"],
    },
  ];