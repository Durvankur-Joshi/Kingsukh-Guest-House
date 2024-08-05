import React, { useRef, useEffect } from 'react';
import data from '../../public/contactus.json';
import ContactForm from './ContactForm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactinfo = data.filter((data) => data.data);
  const addressAnimRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const addressElement = addressAnimRef.current;

    // Animate the address section
    gsap.from(addressElement, {
      duration: 2,
      opacity: 0,
      y: -50,
      ease: 'back',
      scrollTrigger: {
        trigger: addressElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate each contact card
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      // Clean up ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id='contact' className='pt-10'>
        <div className="hero" style={{ backgroundImage: `url('/images/header.jpg')` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div ref={addressAnimRef} style={{ fontFamily: 'Roboto' }} className="max-w-md">
              <h3 className=''>Get in touch with us</h3>
              <h1 className="mb-5 text-5xl font-bold">CONTACT US</h1>
            </div>
          </div>
        </div>

        <div style={{ fontFamily: 'Roboto' }} className="container mx-auto p-6 flex justify-center md:pl-56">
          <div className="flex flex-wrap justify-center gap-24 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contactinfo.map((info, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card text-gray-950 shadow-lg transform transition-transform duration-300 hover:scale-105 w-80 sm:w-72 md:w-64 lg:w-56 xl:w-48"
              >
                <div className="card-body items-center text-center p-4">
                  <img src={info.icon} alt="" className="w-16 h-16 mb-4" />
                  <h2 className="card-title text-lg font-semibold mb-2">{info.name}</h2>
                  <p className="text-sm">{info.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
