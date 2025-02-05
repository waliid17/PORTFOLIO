import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiAdobephotoshop, SiCanva, SiAdobeillustrator } from 'react-icons/si';
import me from '../assets/me.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-24 font-sans px-4 md:px-8 lg:px-24">
      {/* About Container */}
      <div className="about-container flex flex-col md:flex-row justify-between gap-8">
        {/* Profile Section on the Left */}
        <div className="profile-section flex flex-col items-center gap-5 w-full md:w-1/3 lg:w-1/4">
          <img
            src={me}
            alt="Profile Picture"
            className="profile-pic w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-black"
          />
          <div className="personal-info text-center text-[#999999]">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Name: Kheloufi Walid</h2>
            <p className="text-lg md:text-xl mb-2">Age: 23 years old</p>
            <p className="text-lg md:text-xl mb-2">Address: Cheraga, Alger</p>
            <p className="text-lg md:text-xl mb-2">Phone: 0540363847</p>
          </div>
        </div>

        {/* Details Section on the Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="details-section w-full md:w-2/3"
        >
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-5 relative"
          >
            About Me
            <span className="absolute top-9 left-0 text-6xl md:text-9xl text-black opacity-10">
              About
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-700">
            As a full-stack developer with a strong passion for web development, I specialize in creating dynamic and responsive websites that deliver exceptional user experiences. Proficient in HTML, CSS, JavaScript, and PHP, I bring both front-end creativity and back-end functionality together. With an eye for design, I use tools like Canva and Photoshop to craft visually appealing layouts that enhance user engagement. I am dedicated to developing innovative solutions that not only meet client needs but also drive business growth, combining both design and development to bring projects to life.
          </p>
          <br />
          <ul className="mt-5 text-lg md:text-xl text-gray-700">
            <li className="mb-4">
              <strong className="text-black">Profile: </strong>
              <span className="ml-2 text-[#999999]">Full-Stack Developer</span>
            </li>
            <li className="mb-4">
              <strong className="text-black">Domain: </strong>
              <span className="ml-2 text-[#999999]">Web Development & Design</span>
            </li>
            <li className="mb-4">
              <strong className="text-black">Education: </strong>
              <span className="ml-2 text-[#999999]">Diplômé en Développement Web de l'INSFP d'Ouled Fayet, niveau Technicien Supérieur</span>
            </li>
            <li className="mb-4">
              <strong className="text-black">Language: </strong>
              <span className="ml-2 text-[#999999]">English, French</span>
            </li>
            <li className="mb-4">
              <strong className="text-black">Other Skills: </strong>
              <span className="ml-2 text-[#999999]">Canva, Photoshop, and Illustrator for designing</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mt-8">3+ Projects completed</h2>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="skills-section mt-12 md:mt-20"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Skills</h2>

        {/* Flex Container for Categories */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Frontend Skills */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Frontend</h3>
            <div className="space-y-6">
              {/* HTML Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaHtml5 className="w-8 h-8 text-orange-500" />
                    <p className="text-xl text-black"><strong>HTML</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">95%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '95%' }}
                  />
                </div>
              </motion.div>

              {/* CSS Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaCss3Alt className="w-8 h-8 text-blue-500" />
                    <p className="text-xl text-black"><strong>CSS</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">90%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '90%' }}
                  />
                </div>
              </motion.div>

              {/* JavaScript Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaJs className="w-8 h-8 text-yellow-500" />
                    <p className="text-xl text-black"><strong>JavaScript</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">85%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </motion.div>

              {/* React Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '88%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaReact className="w-8 h-8 text-blue-400" />
                    <p className="text-xl text-black"><strong>React</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">88%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '88%' }}
                  />
                </div>
              </motion.div>

              {/* Tailwind CSS Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '92%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SiTailwindcss className="w-8 h-8 text-cyan-500" />
                    <p className="text-xl text-black"><strong>Tailwind CSS</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">92%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '92%' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Backend</h3>
            <div className="space-y-6">
              {/* PHP Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaPhp className="w-8 h-8 text-purple-500" />
                    <p className="text-xl text-black"><strong>PHP</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">80%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '80%' }}
                  />
                </div>
              </motion.div>

              {/* MySQL Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SiMysql className="w-8 h-8 text-blue-700" />
                    <p className="text-xl text-black"><strong>MySQL</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">75%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '75%' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Design Skills */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Design</h3>
            <div className="space-y-6">
              {/* Photoshop Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SiAdobephotoshop className="w-8 h-8 text-blue-800" />
                    <p className="text-xl text-black"><strong>Photoshop</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">80%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '80%' }}
                  />
                </div>
              </motion.div>

              {/* Canva Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SiCanva className="w-8 h-8 text-[#00C4CC]" />
                    <p className="text-xl text-black"><strong>Canva</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">85%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </motion.div>

              {/* Illustrator Skill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SiAdobeillustrator className="w-8 h-8 text-orange-600" />
                    <p className="text-xl text-black"><strong>Illustrator</strong></p>
                  </div>
                  <p className="text-xl text-blue-600">75%</p>
                </div>
                <div className="skill-bar w-full h-2.5 bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="fill h-full bg-blue-600 rounded-full"
                    style={{ width: '75%' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;