import React from "react";
import Fees from '../assets/img/fee.webp'
export default function Fee() {
  return (
    <>
    <section>
    <div className="cont pt-2 pb-2">
          <div className="flex gap-1 text-red-600 text-[16px] font-medium">
            <h1>Home</h1>»<h1>|Bahawalpur Fee</h1>
          </div>
        </div>
        <div className="banner">
          <div className="cont w-full h-full flex items-center">
            <h1 className="text-4xl text-white font-bold uppercase">
            Bahawalpur Fee

            </h1>
          </div>
        </div>

         <div className="my-10 flex justify-center">
          <img src={Fees} alt="" />
         </div>
    </section>
    </>
  );
}
