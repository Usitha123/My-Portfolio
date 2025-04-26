import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex items-center justify-between px-8 py-20 bg-black text-white">
      {/* Left Content */}
      <div className="max-w-lg">
        <p className="text-lg mb-2">Hello,</p>
        <h1 className="text-5xl font-bold mb-4">
          I’m <span className="text-yellow-400">Usitha Kalyana</span> <br />
          Computer Science Student
        </h1>
        <p className="text-gray-400 mb-6">
          I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        </p>
        <Link to="/hire">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
            <span>💼</span> Hire me
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="/path-to-your-image.png" // replace with your actual image
          alt="Smith"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Home;
