export type BioDateType = {
  from?: {
    month?: string;
    year: string;
  };
  to?: {
    month?: string;
    year: string;
  };
  on?: {
    month?: string;
    year: string;
  };
  onGoing?: boolean;
};

export type BioCardType = {
  date?: BioDateType;
  headline: string;
  subheader?: string;
  content: string;
  id: string;
  category: "education" | "experience" | "certification";
};

export const bioCards: BioCardType[] = [
  {
    id: "1",
    date: {
      on: {
        month: "November",
        year: "2014",
      },
    },
    category: "education",
    headline: "Bachelors of Science in Film",
    subheader: "Full Sail University, Orlando, FL",
    content:
      "My educational background includes a Bachelor of Science in Media Communication from Full Sail University. I'm committed to lifelong learning, holding certifications in data analytics and cloud computing to stay ahead in a rapidly changing field.",
  },
  {
    id: "2",
    date: {
      on: {
        month: "December",
        year: "2022",
      },
    },
    category: "certification",
    headline: "Google Data Analyst",
    subheader: "Google Data Analytics Certificate, Coursera",
    content:
      "I completed a comprehensive data analytics certification program, gaining expertise in data visualization, machine learning, and predictive analytics.",
  },
  {
    id: "3",
    date: {
      on: {
        month: "November",
        year: "2023",
      },
    },
    category: "certification",
    headline: "AWS Certified Cloud Practitioner",
    subheader: "Amazon Web Services",
    content:
      "I earned a cloud computing certification, mastering AWS, Azure, and Google Cloud Platform.",
  },

  {
    id: "6",
    date: {
      from: {
        month: "October",
        year: "2022",
      },
      onGoing: true,
    },
    category: "experience",
    headline: "Senior Front-End Developer",
    subheader: "Evo Sol - Kansas City, MO",
    content:
      "Currently driving the development of an AI-powered NLP web application, focusing on intuitive UI/UX and robust front-end architecture. My work has streamlined the platform, leading to a 30% performance boost. I'm continually honing my skills in NextJS and JavaScript to build a scalable framework that anticipates user needs.",
  },

  {
    id: "5",
    date: {
      from: {
        month: "November",
        year: "2019",
      },
      to: {
        month: "October",
        year: "2022",
      },
    },
    category: "experience",
    headline: "Digital Strategy Consultant",
    subheader: "The Knife Grinder - Anchorage, AK",
    content:
      "Spearheaded a comprehensive digital strategy that elevated the company's online presence and fueled a 20% sales increase. My expertise directly contributed to the business's valuation and successful sale, highlighting my ability to connect technical skills with business strategy.",
  },

  {
    id: "4",
    date: {
      from: {
        month: "April",
        year: "2017",
      },
      to: {
        month: "November",
        year: "2019",
      },
    },
    category: "experience",
    headline: "Frontend Data Visualization Engineer/Developer",
    subheader: "Ameristar Casino - Black Hawk, CO",
    content:
      "Designed and built an innovative React and D3.js dashboard for data visualization, empowering strategic decision-making. This project demonstrated my ability to transform complex data into actionable, user-centric insights.",
  },
];
