import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'
export default function Tools() {
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

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col-8" style={{ margin:60 }}>
                <h2 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4 underline decoration-amber-600 decoration-4 " style={{ marginTop: 50, marginLeft: 100 }}>Skills</h2>
                <div>
                  <ul style={{ marginLeft:200,fontSize:20 }}>
                    <li>React js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>DBMS</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col-8" style={{ margin:60 }}>
                <h2 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4 underline decoration-amber-600 decoration-4 " style={{ marginTop: 50, marginLeft: 100 }}>Tools & Frameworks</h2>
                <div>
                  <ul style={{ marginLeft:200,fontSize:20 }}>
                    <li>VS Code</li>
                    <li>Bootstrap</li>
                    <li>IntelliJ IDEA</li>
                    <li>MYSQL Workbench</li>
                    <li>MongoDB Atlas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="absolute z-10 left-80 flex flex-row" style={{ marginTop:300,marginLeft:90,fontSize:20 }}>
        <div className="container overflow-hidden">
            <div className="col gx-5">
              <div className="col-8" style={{ margin:60 }}>
                <h2 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4 underline decoration-amber-600 decoration-4 " style={{ marginTop: 50, marginLeft: 100 }}>CERTIFICATIONS</h2>
                <div>
                  <ul style={{ marginLeft:320,fontSize:20 }}>
                    <li>NPTEL Programming in Java</li>
                    <li>MERN Stack Training at Brainmentors Pvt Ltd</li>
                    <li>Coursera Programming with JavaScript, HTML and CSS</li>
                    <li>Coursera Java Programming Solving problems with SW</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
