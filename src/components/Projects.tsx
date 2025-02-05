import React, { useState } from "react";
import { motion } from "framer-motion";
import L from "../assets/L.png";
import A from "../assets/A.png";
import P from "../assets/P.png";
import { FaLink } from "react-icons/fa";

const Projects: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null); // Track active card

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index); // Toggle active card
  };

  return (
    <section id="projects" className="p-8 md:p-20 relative">
      <div className="projects-container text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold text-blue-600 mb-4 relative z-10"
        >
          Projects
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-6 left-1/2 transform -translate-x-1/2 text-6xl md:text-9xl text-black opacity-10 z-0 pointer-events-none"
          >
            Projects
          </motion.span>
        </motion.h1>
        <br />
        <p className="text-lg text-gray-700 mb-8">
          Below are examples of professional websites I have developed using HTML, CSS, JavaScript, React, Tailwind CSS, and PHP.
        </p>
        <br />
        <div className="project-cards flex flex-wrap justify-center gap-8 relative z-10">
          {/* Card 1 */}
          <motion.div
            className="project-card w-full md:w-[450px] h-[250px] bg-white rounded-lg shadow-xl overflow-hidden relative opacity-0 translate-y-12 transition-all duration-700 ease-out group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => handleCardClick(0)} // Handle click for Card 1
          >
            <img src={P} alt="Pro Outil" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className={`absolute inset-0 flex flex-col justify-end p-6 text-black transition-all duration-300 ${activeCard === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <a href="http://pro-outil.free.nf" className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                <FaLink className="mr-2" /> Live Link
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="project-card w-full md:w-[450px] h-[250px] bg-white rounded-lg shadow-xl overflow-hidden relative opacity-0 translate-y-12 transition-all duration-700 ease-out group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => handleCardClick(1)} // Handle click for Card 2
          >
            <img src={L} alt="Layal" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className={`absolute inset-0 flex flex-col justify-end p-6 text-black transition-all duration-300 ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <a href="https://layal.free.nf" className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                <FaLink className="mr-2" /> Live Link
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="project-card w-full md:w-[450px] h-[250px] bg-white rounded-lg shadow-xl overflow-hidden relative opacity-0 translate-y-12 transition-all duration-700 ease-out group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => handleCardClick(2)} // Handle click for Card 3
          >
            <img src={A} alt="Trusted Travel" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className={`absolute inset-0 flex flex-col justify-end p-6 text-black transition-all duration-300 ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <a href="https://trusted-travel.vercel.app" className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                <FaLink className="mr-2" /> Live Link
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;