import React, { useEffect, useRef } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import anime from 'animejs'; // Ensure @types/animejs is installed

const Home: React.FC = () => {
  const gifContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Smooth scroll for navigation links
    document.querySelectorAll("nav ul li a").forEach((link: Element) => {
      (link as HTMLAnchorElement).addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    // Typing effect with Anime.js
    const typingElement = document.getElementById('typing-name');
    if (typingElement) {
      const text = "Kheloufi Walid"; // Set the text you want to animate
      typingElement.innerHTML = text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');

      // Anime.js animation for typing effect
      anime.timeline({ loop: true })
        .add({
          targets: '#typing-name .letter', // Target each letter
          opacity: [0, 1], 
          easing: "easeOutExpo", 
          duration: 600,
          delay: (_, i) => i * 50 // Delay for each letter to type one after another
        })
        .add({
          targets: '#typing-name', // Make the text blink after it's fully typed
          opacity: [1, 0],
          duration: 500,
          easing: "easeOutExpo",
          delay: 1000 // Wait for 1 second before fading out
        })
        .add({
          targets: '#typing-name', // Bring back the text in next cycle
          opacity: [0, 1],
          duration: 500,
          easing: "easeOutExpo"
        });
    }

    // Entrance effect for the image (right to left) and content (left to right)
    if (gifContainerRef.current && contentRef.current) {
      anime({
        targets: gifContainerRef.current,
        translateX: ['100%', '0%'], // Image comes from the right to the left
        opacity: [0, 1], // Fade in
        easing: 'easeOutExpo',
        duration: 750, // Medium duration (0.75 seconds)
        delay: 250, // Slight delay (0.25 seconds)
      });

      anime({
        targets: contentRef.current,
        translateX: ['-100%', '0%'], // Content comes from the left to the right
        opacity: [0, 1], // Fade in
        easing: 'easeOutExpo',
        duration: 750, // Medium duration (0.75 seconds)
        delay: 250, // Slight delay (0.25 seconds)
      });
    }
  }, []);

  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-screen p-5 bg-white overflow-x-hidden">
      {/* Left-side content */}
      <div ref={contentRef} className="content flex flex-col justify-center items-start flex-grow md:pl-24 px-4 opacity-0 text-center md:text-left">
        <p className="hello text-lg md:text-2xl font-semibold text-gray-700">Hello !</p>
        <h1 className="text-2xl md:text-6xl font-bold text-blue-600 mt-4">
          I'm <span id="typing-name" className="text-black font-bold"></span>
        </h1>
        <p className="title text-xl md:text-3xl font-bold text-black mt-5">Développeur Web Full Stack</p>
        <p className="subtitle text-base md:text-xl text-gray-700 mt-3">
          Passionate about creating elegant solutions to complex problems. Experienced in HTML, CSS, PHP, and database management.
        </p>
        <div className="buttons flex flex-col md:flex-row gap-4 mt-8 w-full md:w-auto">
          <a href="#CV" className="btn bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold uppercase hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base text-center">
            Download CV
          </a>
          <a href="#projects" className="btn secondary border-2 border-black text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold uppercase hover:bg-blue-600 hover:text-white hover:border-blue-800 transition-colors duration-300 text-sm md:text-base text-center">
            My Works
          </a>
        </div>
      </div>

      {/* Right-side image */}
      <div ref={gifContainerRef} className="gif-container transform transition-transform duration-300 hover:scale-110 overflow-hidden opacity-0 mt-8 md:mt-0 w-full md:w-auto max-w-full">
        <DotLottiePlayer
          src="https://lottie.host/dc69107c-80d7-4a73-a5aa-8764a41a241a/yXGjMNBumv.lottie"
          background="transparent"
          speed={1}
          style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Home;