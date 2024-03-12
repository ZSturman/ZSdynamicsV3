import React from 'react';

const LongExperiencePage = () => {
  return (
    <div className="container mx-auto px-8 pt-8 pb-12">
      <p className="mb-6 text-lg font-medium">
        My career path in front-end development has been shaped by a passion for crafting exceptional user experiences, optimizing performance, and integrating innovative technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Career Overview</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <h3 className="text-lg font-semibold mb-2">Evo Sol (Senior Front-End Developer, October 2022 - Present)</h3> 
              <p>
                Currently driving the development of an AI-powered NLP web application, focusing on intuitive UI/UX and robust front-end architecture. My work has streamlined the platform, leading to a 30% performance boost. I&apos;m continually honing my skills in NextJS and JavaScript to build a scalable framework that anticipates user needs.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">The Knife Grinder (Digital Strategy Consultant, November 2019 - October 2022)</h3>
              <p>
                Spearheaded a comprehensive digital strategy that elevated the company&apos;s online presence and fueled a 20% sales increase. My expertise directly contributed to the business&apos;s valuation and successful sale, highlighting my  ability to connect technical skills with business strategy.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Ameristar Casino (Frontend Data Visualization Engineer/Developer, April 2017 - November 2019)</h3>
              <p>
                Designed and built an innovative React and D3.js dashboard for data visualization, empowering strategic decision-making. This project demonstrated my ability to transform complex data into actionable, user-centric insights.       
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LongExperiencePage;
