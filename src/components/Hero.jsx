import React from 'react';
import { useSelector } from 'react-redux';
import images from '../assets/hero.png';

function Hero() {
  const texts = useSelector((state) => state.language.texts);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="container mx-auto max-w-[1150px] flex gap-64 items-center">
        <div className="max-w-[600px]">
          <p className="text-sm text-purple-500">WEBFLOW DESIGN AGENCY</p>
          <h1 className="text-4xl font-bold mt-2 mb-4">{texts.title}</h1>
          <p className="mb-6">{texts.description}</p>
          <div className="space-x-4">
            <button className="px-6 py-2 rounded-[20px] bg-[#4A3AFF] text-white hover:bg-blue-600">{texts.getStarted}</button>
            <button className="px-6 py-2 bg-white border border-gray-400 text-black rounded-[20px] hover:bg-gray-100">{texts.learnMore}</button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={images} alt="Hero Section" className="rounded-lg w-[435px] h-[537px] shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
