import React from 'react'
import Isb from '../assets/img/Isb.webp'

export default function BahawalpurSchedule() {
  return (
    <>
    <div className="md:cont pt-2 pb-2 px-3 md:px-0">
          <div className="flex gap-1 text-red-600 text-[16px] font-medium">
            <h1>Home</h1>»<h1>Bahawalpur</h1>
          </div>
        </div>
        <div className="banner">
          <div className="md:cont w-full h-full flex items-center">
            <h1 className="text-3xl md:text-4xl px-3 md:px-0 text-white font-bold uppercase">
            Bahawalpur Schedule
            </h1>
          </div>
        </div>
    <div className='my-20 flex items-center justify-center'>
      <img src={Isb} alt="" />
    </div>
    </>
  )
}
