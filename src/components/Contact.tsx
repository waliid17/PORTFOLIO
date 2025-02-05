import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_lwiswsu', 'template_eny479y', e.currentTarget, '2udAJ6398jZ4BoCcm')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setModalMessage('Message sent successfully!');
        setIsModalOpen(true);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setModalMessage('Failed to send message. Please try again.');
        setIsModalOpen(true);
      });

    e.currentTarget.reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="p-8 md:p-20 bg-gray-100">
      {/* Animated h1 */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10"
      >
        Contact Me
      </motion.h1>

      {/* Contact Details */}
      <div className="contact-details flex flex-wrap justify-center gap-8 mb-10 md:mb-20">
        {[
          { icon: "fas fa-map-marker-alt", title: "ADDRESS", text: "Cheraga, Alger" },
          { icon: "fas fa-phone-alt", title: "CONTACT NUMBER", text: "+213 540363847" },
          { icon: "fas fa-envelope", title: "EMAIL ADDRESS", text: "walidkheloufi00@gmail.com" },
        ].map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="contact-item w-full md:w-64 text-center cursor-pointer p-4  rounded-lg "
          >
            <motion.div
              className="icon bg-blue-600 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.i
                className={`${detail.icon} text-2xl md:text-3xl`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              />
            </motion.div>
            <h2 className="text-lg md:text-xl font-bold text-black">{detail.title}</h2>
            <p className="text-gray-700 text-sm md:text-base">{detail.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Send Me a Message</h2>
        <div className="space-y-6">
          <input
            type="text"
            name="to_name"
            value="Walid Kheloufi"
            hidden
            readOnly
          />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </motion.form>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="flex justify-center gap-8 mt-12"
      >
        {[
          { icon: "fab fa-facebook", link: "https://www.facebook.com/walid.kheloufi.98/" },
          { icon: "fab fa-instagram", link: "https://www.instagram.com/waliiiidkh/" },
          { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/walid-kheloufi-64b048340/" },
          { icon: "fab fa-github", link: "https://github.com/waliid17" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <i className={`${social.icon} text-3xl md:text-4xl`} />
          </motion.a>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-blue-600 rounded-lg p-6 max-w-sm w-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-white mb-4">Message Status</h2>
              <p className="text-white">{modalMessage}</p>
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;