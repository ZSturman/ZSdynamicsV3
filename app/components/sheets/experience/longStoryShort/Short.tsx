import React from 'react';

export const ShortExperiencePage = () => {
  return (
    <div className="container mx-auto px-8 pt-8 pb-12 text-slate-900">
      <section className="bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Quick Career Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-medium">Evo Sol:</strong> Senior Front-End Developer. Optimized an AI-powered NLP web application, resulting in a 30% performance boost.
          </li>
          <li>
            <strong className="font-medium">The Knife Grinder:</strong> Digital Strategy Consultant. Led web initiatives that increased online sales and visibility by 20%.
          </li>
          <li>
            <strong className="font-medium">Ameristar Casino:</strong> Created a user-centric dashboard for data visualization, enhancing strategic decision-making.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ShortExperiencePage;
