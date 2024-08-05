import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const image = ["/images/out.jpg"];
  const fadeInRefs = useRef([]);

  useEffect(() => {
    fadeInRefs.current.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const letters = text.innerText.split('');

    text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

    gsap.fromTo(
      text.querySelectorAll('span'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power3.out',
        duration: 2,
        scrollTrigger: {
          // trigger: element,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div
        style={{ fontFamily: 'Roboto' }}
        className='bg-white text-black pl-5 md:pl-24 pt-10'
      >
        <h1
        ref={textRef}
         className='text-2xl text-red-700 font-bold'>ABOUT US</h1>
      </div>
      <div id='about' className='pt-5 max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white text-black'>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1
              className='text-3xl md:text-6xl md:pb-10'
              
            >
              Find Your Haven
              In Our Charming <span className='text-red-600'>Guest House</span>
            </h1>
            <TypeAnimation
              className='text-lg md:text-2xl pt-5 md:pt-10'
              splitter={(str) => str.split(/(?= )/)}
              sequence={[
                'Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of natures beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.',
                10000,
                'Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of natures beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.',
              ]}
              speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
              omitDeletionAnimation={true}
              repeat={0}
            />
            <div className='md:pt-10'>
              <motion.div
                className="box"
                whileHover={{ scale: [1, 1.5, 1.4] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <button
                  className="btn bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=919007062180'}
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          </div>
         <div

            style={{ opacity: 0 }}
            ref={(el) => fadeInRefs.current.push(el)}
            className="w-full lg:w-1/2 flex justify-center items-center border-r-red-700"
          >
            <div className="w-full p-5">
              <img
                src={image}
                alt="Guest House"
                className='w-full h-auto md:h-auto rounded-3xl border-red-700'
                />
                </div>
            </div>
         
        </div>
      </div>
    </>
  );
}

export default About;
