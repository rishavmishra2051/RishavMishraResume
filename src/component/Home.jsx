import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { orange } from '@mui/material/colors';
export default function Home() {
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

        <div className="absolute z-10 text-lg inset-y-0 left-80 text-center flex flex-col ">
          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col">
                <div
                  className="p-3 border bg-light"
                  style={{ marginTop: 80, marginRight: 600 }}
                >
                  <h1 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4">Rishav Mishra</h1>

                  <p className="text-2xl" style={{ marginLeft: 90 }}> I AM <span className="underline decoration-amber-600 decoration-4 ">DEVELOPER <CodeOffIcon sx={{ color: orange[700], fontSize: 80 }} /></span></p>

                </div>
              </div>
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col">
                <div
                  className="p-3 border bg-light"
                  style={{ marginTop: 120, marginLeft: 200 }}
                >
                  <h2 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4" style={{ marginTop: 20, marginLeft: 30 }}>Career Objective</h2>
                  <p className='text-1xl'>I am a Fresher developer with experience in React.js, HTML, CSS, JavaScript, and
                    Java. I have worked on projects like Text Modifier based on React.js, Note-Taker
                    app based on javascript, Food delivery app based on MERN stack. I am
                    passionate about creating innovative solutions and contributing to the growth
                    of the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
