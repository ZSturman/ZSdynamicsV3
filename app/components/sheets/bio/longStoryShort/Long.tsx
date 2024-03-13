import React from "react";

const LongBioPage = () => {
  return (
    <div className="container mx-auto px-8 pt-8 pb-12 ">
      <p className="mb-6 text-lg font-medium">
        I&apos;m a front-end developer specializing in crafting exceptional user 
        experiences through thoughtful UI/UX design and a focus on performance optimization. 
        My passion for cutting-edge technologies drives my continuous learning and growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
        <section className="bg-white rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-base">
            My core strengths lie in front-end development, with expertise in NextJS, React, 
            TypeScript, and a solid grasp of CSS frameworks and state management. I&apos;m passionate 
            Bio UI/UX design, using tools like Figma and SketchBook to build user-centered 
            interfaces. Performance optimization is always top of mind, ensuring fast and 
            responsive web experiences. My background in backend support, CI/CD, and AI tools 
            broadens my full-stack capabilities.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
          <p className="text-base">
            Throughout my career, I&apos;ve spearheaded the development of AI-driven applications, 
            revamped digital strategies for greater impact, and created impactful data visualizations. 
            I thrive on delivering tangible results that align with business objectives. 
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-md"> 
          <h2 className="text-2xl font-bold mb-4">Academic Achievements</h2>
          <p className="text-base">
            My educational background includes a Bachelor of Science in Media Communication from 
            Full Sail University.  I&apos;m committed to lifelong learning, holding certifications in 
            data analytics and cloud computing to stay ahead in a rapidly changing field.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LongBioPage;
