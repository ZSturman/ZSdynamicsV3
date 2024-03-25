export type StudioCardType = {
  id: string;
  date: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
  image: string;
  bulletPoints?: string[];
  colors: {
    light: string;
    dark: string;
  };
};

export const studioProjectsList: StudioCardType[] = [
  {
    id: "1",
    date: "Feb, 2024",
    title: "Xylo Clone: A High-Fidelity User Experience",
    description:
      "A high-fidelity replica of the Xylo website built with a modern tech stack",
    bulletPoints: [
      "Responsive Design for all devices",
      "Animations, product exploration, and user-friendly interactions.",
      "Efficient API integrations provide real-time data for a dynamic experience.",
    ],
    buttonName: "Check it out",
    link: "https://xylo-clone-5by2le3lr-zsturmans-projects.vercel.app/",
    image: "/studio/xyloClone.png",
    colors: {
      light: "#6ca05c",
      dark: "#293a23",
    },
  },
  {
    id: "2",
    date: "Jan, 2024",
    title: "Evo Sol",
    description:
      "A dashboard for LLM uploads and data management. Coming soon...",
    bulletPoints: [],
    buttonName: "Coming Soon",
    link: "https://www.zsdynamics.com",
    image: "/animals/quokka.jpeg",
    colors: {
      light: "#a05c5c",
      dark: "#3a2323",
    },
  },
];
