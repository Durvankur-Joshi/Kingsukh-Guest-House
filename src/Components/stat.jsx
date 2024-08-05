import React from 'react'
import { useEffect , useRef   } from 'react';
import gsap from 'gsap';

const Stat = () => {
    const divRef = useRef(null);

    useEffect(() => {
      const element = divRef.current;
  
      
      gsap.fromTo(
        element,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
      );
  
    
      gsap.to(element, {
        duration: 1,
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        delay: 2,
      });
  
      return () => {
        gsap.killTweensOf(element);
      };
    }, []);
  
  return (
    <>
    <div className='flex justify-center bg-slate-300 pt-5 pb-5 w-full h-full'>

    <div
    ref={divRef}
    style={{fontFamily:"Roboto"}}
     className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-title text-white "> Bookings Completed </div>
    <div className="stat-value  text-red-600 ">100+</div>

  </div>

  <div className="stat">
    <div className="stat-title  text-white ">Happy Customers</div>
    <div className="stat-value text-red-600 ">150+</div>
   
  </div>

 
</div>
    </div>
    </>
  )
}

export default Stat