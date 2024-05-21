import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Carousele({
  children: slides,
  autoSlide = false,
  autoSlideInt = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    const goToSlide = (slideIndex) => {
        setCurr(slideIndex)
      }

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInt);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
    <div className="relative overflow-hidden object-cover group md:h-[95vh] overlay-home">
      <div
        className="w-[100%] flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
        <BsChevronCompactLeft onClick={prev} className="hidden p-1 rounded-full shadow bg-black/50 text-white hover:bg-black group-hover:block cursor-pointer" size={40} />
        <BsChevronCompactRight onClick={next} className="hidden p-1 rounded-full shadow bg-black/50 text-white hover:bg-black group-hover:block cursor-pointer" size={40}/>
      </div>
      <div className="  absolute  bottom-6 right-0 left-0 z-20">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i} onClick={()=> goToSlide(i)} className={`h-3 w-3 transition-all bg-white rounded-full cursor-pointer ${curr === i ? 'p-2' : 'bg-opacity-50'}`}></div>
          ))}
        </div>
    </div>
    </div>


   
    </>
  );
}
