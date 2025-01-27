import React from 'react';

const features = [
  {
    id: 1,
    icon: '✅',
    title: 'Smart Lists',
    description: 'Create and manage multiple shopping lists with smart categorization and priority settings.',
  },
  {
    id: 2,
    icon: '⏰',
    title: 'Price History',
    description: 'Track price changes over time and get notified when your favorite items go on sale.',
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mobile Ready',
    description: 'Access your lists anywhere with our mobile-friendly design and offline support.',
  },
];

const Feature_section = () => {
  return (
    <section className="bg-green-50 py-5">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to shop smarter</h2>
        <p className="text-xl sm:text-2xl mb-8">Simple yet powerful features to make grocery shopping a breeze</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white shadow-md rounded-lg p-6 text-start w-full sm:w-auto">
              <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature_section;