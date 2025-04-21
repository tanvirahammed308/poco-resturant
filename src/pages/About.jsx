import React from 'react';

const About = () => {
  return (
    <div className="w-full md:w-10/12 mt-10 mx-auto px-4 py-14 bg-gray-50 rounded-lg shadow-inner ">
      <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#00A149' }}>
        About Us
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        Welcome to <strong className="text-black">Poco</strong> — where flavor meets passion! We're proud to serve you the freshest meals with love and care.
        Whether you're here for a quick bite or a luxurious dining experience, we've got a table waiting just for you.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#00A149' }}>
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in the heart of the city, Poco started with a dream to bring people together through great food. From humble beginnings to becoming a favorite local spot, our journey has always been fueled by passion, creativity, and our loyal guests.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#00A149' }}>
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fresh ingredients, sourced daily</li>
            <li>Unique menu curated by expert chefs</li>
            <li>Friendly and cozy environment</li>
            <li>Luxurious and regular seating options</li>
            <li>Fast and reliable service</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: '#00A149' }}>
          Visit Us
        </h2>
        <p className="text-gray-700">
          We’re open every day from <strong>12:00 PM</strong> to <strong>10:00 PM</strong>. Come taste the difference at <span className="font-semibold">Poco</span>!
        </p>
      </div>
    </div>
  );
};

export default About;
