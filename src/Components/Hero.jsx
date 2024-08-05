import React, { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {

  const addressanim= useRef(null);

  useEffect(() => {
    gsap.from(addressanim.current, {
      duration: 2,
      opacity: 0,
      y: -50,
      ease: "back"
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
        duration: 1
      }
    );
  }, []);

  return (
    <>
      <div
        id='hero'
        className="hero min-h-screen"
        style={{ backgroundImage: `url('/images/service.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content md:w-screen text-neutral-content text-center">
          <div style={{ fontFamily: 'Edu Australia VIC WA NT Hand' }}>
            <h1 
            ref={textRef}
            className='text-4xl md:text-6xl text-white md:pt-10 text-scramble'>
              Welcome to Kingsukh Guest House, where every stay is a story.
            </h1>
            <div 
            ref={addressanim}
            style={{fontFamily:'Lato'}}
            className='text-2xl text-white pt-8 md:pt-5 '>
                <p   onClick={() => window.location.href = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kingsukh%20Guest%20House%20beside%20Barshal%20Water%20Tank,%20Manpur,%20Barhanti,%20West%20Bengal%20723156+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'}>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156 </p>

                <p className='pt-3'> Contact : +91 9007062180</p>
            </div>
      <div className='pt-10'>


      <button
  className="btn bg-red-600 hover:bg-red-700 text-white"
  onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=919007062180'}
>
  Book Now
</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero