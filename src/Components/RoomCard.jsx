import React, { useEffect, useRef } from 'react';
import data from "../../public/room.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RoomCard = () => {
  const roomdata = data.filter((data) => data.price >= 0);
  const roomRefs = useRef([]);

  useEffect(() => {
    const elements = roomRefs.current;

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 70%", 
            toggleActions: "play none none none", 
          },
        }
      );

      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.05, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <>
      <div style={{ fontFamily: 'Roboto' }} className='bg-white text-black pl-5 '>
        <h1 className='text-2xl pb-5 text-red-700 font-bold'>OUR LIVING ROOMS</h1>
        <p className='pb-10 text-3xl'>The Most Memorable Rest Time Starts Here.</p>
      </div>
      <div style={{ fontFamily: 'Roboto' }} id='room' className='md:flex bg-white gap-10 pl-5   '>
        {roomdata.map((room, index) => (
          <div
            key={index}
            ref={(el) => (roomRefs.current[index] = el)}
            className="slide-in-left card bg-slate-100 text-black w-96  transition: transform 0.3s ease  "
          >
            <figure className="px-10 pt-10 pb-10">
              <img src={room.image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title">{room.name}</h2>
              <p>{room.details}</p>
              <div className="end-72 flex">
                <div className='pr-10'>
                  <p>Starting from</p>
                  <p className='font-bold'>Rs. {room.price} /Night</p>
                </div>
                <button
                  className="btn bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=919007062180'}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RoomCard;
