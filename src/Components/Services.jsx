import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import service from "../../public/Services.json";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicedata = service.filter((service) => service.icon);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const elements = serviceRefs.current;

    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className='pt-10'>
        <div id='services' style={{ fontFamily: 'Roboto' }} className='bg-slate-100 text-black pl-5 '>
          <h1 className='text-2xl pt-10 pb-5 text-red-700 font-bold'>SERVICES</h1>
          <p className='pb-10 text-3xl'>Strive Only For The Best.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 bg-slate-100 text-gray-950 pt-10 pb-10">
          {servicedata.map((services, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="card shadow-xl w-72 sm:w-72 md:w-full lg:w-80 xl:w-96"
            >
              <div className="card-body bg-white rounded-3xl">
                <DotLottieReact
                  className='h-30'
                  src={services.icon}
                  loop
                  autoplay
                />
                <h2 style={{ fontFamily: 'Roboto' }} className="card-title justify-center">
                  {services.tital}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
