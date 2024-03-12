import React from "react";

const LongAboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="mb-4">
        With a comprehensive skill set in front-end technologies, I specialize
        in creating seamless user experiences through meticulous UI/UX design
        and performance optimization. My journey in web development is fueled by
        a passion for tech innovation and a commitment to excellence.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Expertise</h2>
          <p>
            My proficiency extends across front-end development, particularly in
            NextJS, React, and TypeScript, with a deep understanding of CSS
            frameworks and state management tools. I excel in UI/UX design,
            leveraging Figma and SketchBook to craft intuitive interfaces, and
            am dedicated to web performance, employing modern techniques to
            ensure fast, responsive applications. Additionally, my background in
            backend support, CI/CD pipelines, and AI tools enhances my
            full-stack development capabilities.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Career Highlights</h2>
          <p>
            My professional experience includes leading the development of
            AI-powered applications, optimizing digital strategies for enhanced
            online presence, and implementing data visualization solutions.
            These roles have not only honed my technical skills but also my
            ability to drive meaningful business outcomes.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Academic Achievements</h2>
          <p>
            I hold a Bachelor of Science in Media Communication from Full Sail
            University, augmented by certifications in data analytics and cloud
            computing, reflecting my dedication to continuous learning and
            adaptation in the evolving tech landscape.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LongAboutPage;
