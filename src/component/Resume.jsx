import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'
import img from '../Assets/img/Resume.png'
import Rishav_Mishra_Resume from '../Assets/img/Rishav_Mishra_Resume.pdf'
import { Link } from "react-router-dom";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { orange } from '@mui/material/colors';
export default function Resume() {
  return (
    <>
      <div className=" flex flex-row h-screen bg-slate-900 font-mullish  overflow-hidden justify-between gap-20 text-white">
        <div className="navb">
          <Technical />
        </div>

        <div>
          <img
            className="object-cover opacity-50 z-0 photo my-2"
            src={image}
            alt="not loaded yet"
          />
        </div>

        <div className="absolute z-10 text-lg inset-y-0 left-80 text-center flex flex-row ">

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col-8" style={{ marginTop: 5, marginLeft: 100 }}>
                <img src={img} className="figure-img img-fluid rounded" alt="..." />
              </div>
            </div>
          </div>

          <div className="col-4">
            <div style={{ marginTop: 250, marginLeft: 10 }}>
              <a href={Rishav_Mishra_Resume} download="Rishav Mishra Resume" target="_blank" rel="noreferrer">
                <button className="p-3 border rounded bg-amber-600 decoration-4 mb-3">Download pdf file</button>
              </a>
              <a href={Rishav_Mishra_Resume} without target="_blank" rel="noreferrer">
                <button className="p-3 border rounded bg-amber-600 decoration-4 mt-3">Open file in new tab</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
