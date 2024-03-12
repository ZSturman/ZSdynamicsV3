import React from 'react';

export const ShortAboutPage = () => {
  return (
    <div className="container mx-auto px-8 pt-8 pb-12 text-slate-900"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <section className="bg-gray-100 rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Skills & Interests</h2>
          <p className="text-base">
            Full-stack front-end developer proficient in NextJS, React, Tailwind CSS, TypeScript, and Python. Passionate about UI/UX design, performance optimization, emerging AI tools, and 3D modeling. 
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Professional Snapshot</h2>
          <p className="text-base">
            5+ years of experience building intuitive digital experiences. Proven track record of boosting system responsiveness and efficiency through my work in various development roles.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Educational Foundation</h2>
          <p className="text-base">
            Bachelor&apos;s in Media Communication, with certifications in data analysis and cloud computing. Dedicated to continuous learning and technological advancement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShortAboutPage;
