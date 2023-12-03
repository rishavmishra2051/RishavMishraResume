import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'

export default function Contact() {
  return (
    <>
      <div className=" flex flex-row h-screen bg-slate-900 font-mullish  overflow-hidden justify-between gap-20 text-white">
        <div className="navb">
          <Technical />
        </div>

        <div>
          <img className="object-cover opacity-40 z-0 photo my-2" src={image} alt="not loaded yet" />
        </div>
        <div className="absolute z-10 left-80 flex flex-row">
          <div class="row">
            <div class="col-4">
            
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
