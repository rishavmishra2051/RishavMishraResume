import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'
import { orange } from '@mui/material/colors';

export default function AcademicRecord() {
  return (
    <>
      <div className=" flex flex-row h-screen bg-slate-900 font-mullish  overflow-hidden justify-between gap-20 text-white">
        <div className="navb">
          <Technical />
        </div>

        <div>
              <img className="object-cover opacity-40 z-0 photo my-2" src={image} alt="not loaded yet" />
            </div>
        <div className="absolute z-10 text-lg inset-y-0 left-80 text-center flex flex-col items-center">
        <h2 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4 underline decoration-amber-600 decoration-4 " style={{ marginTop: 50,marginLeft:200 }}>Academic Report</h2>

<div style={{ marginLeft: 100 }}>

          
          <div className="container overflow-hidden">
          
            <div className="row gx-5">
              <div className="col">

                <div className="p-3 border bg-light" style={{ marginTop: 20,marginRight:300 }}>
                  <h3 className="text-bold font-bold">Bachelor Of Technology</h3>
                  <p className="text-1xl opacity-60 hover:opacity-100 cursor-pointer">Percentage:- 74% <br/>Stream:- Information Technology <br/>
                  College:- Raj Kumar Goel Institute of Technology, Ghaziabad
                  </p>
                </div>
              </div>      
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3 border bg-light" style={{ marginTop: 20,marginLeft:300 }}>
                  <h3 className="text-bold font-bold">Higher Secondary Education</h3>
                  <p className="text-1xl opacity-60 hover:opacity-100 cursor-pointer items-center">Percentage:- 63% <br/>Stream:- PCM <br/>
                  School:- St. Xavier's School, Ballia
                  </p>
                </div>
              </div>      
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3 border bg-light" style={{ marginTop: 20,marginRight:300 }}>
                  <h3 className="text-bold font-bold">Secondary Education</h3>
                  <p className="text-1xl opacity-60 hover:opacity-100 cursor-pointer">Percentage:- 80% <br/>Stream:- Science <br/>
                  School:- St. Xavier's School, Ballia
                  </p>
                </div>
              </div>      
            </div>
          </div>

        </div>

      </div>
      </div>

    </>
  )
}
//<img className="object-cover opacity-20 z-0 photo my-2" src={image} alt="not loaded yet"/>
