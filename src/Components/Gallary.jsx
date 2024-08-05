import React, { useEffect, useRef } from 'react';
import images from "../assets/gallerydata.json";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallary = () => {
  const galleryRef = useRef(null);
  const imagedata = images.filter((image) => image.photo);

  useEffect(() => {
    const images = galleryRef.current.querySelectorAll('.gallery-item');

    images.forEach((image, index) => {
      gsap.fromTo(
        image.querySelector('img'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-base-100">
      <div id='gallary' className="flex justify-center">
        <div id='services' style={{ fontFamily: 'Roboto' }} className='text-black pl-5'>
          <h1 className='text-2xl pt-10 pb-5 text-red-700 font-bold'> GALLERY </h1>
        </div>
      </div>
      <div ref={galleryRef} className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {imagedata.map((photo, index) => (
          <div key={index} className="gallery-item relative overflow-hidden rounded-lg shadow-lg group border border-gray-200">
            <img
              src={photo.photo}
              alt=""
              className="h-96 w-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:grayscale"
            />
            <div className="absolute inset-0 border-4 border-transparent transition-all duration-300 group-hover:border-red-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
