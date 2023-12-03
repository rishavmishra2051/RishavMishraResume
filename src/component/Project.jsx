import React from 'react'
import Technical from './Technical'
import image from '../Assets/img/bg01.JPG'
import food_delivery from '../Assets/img/food_delivery.png'
import note_taker from '../Assets/img/note_taker.png'
import server_client from '../Assets/img/server_client.png'
import encrypt_decrypt from '../Assets/img/encrypt_decrypt.png'
import Rishav_Mishra_Resume from '../Assets/img/bg01.JPG'
import { Link } from "react-router-dom";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { orange } from '@mui/material/colors';
export default function Project() {
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
                            <div className="col-8" style={{ margin: 60 }}>
                                <img src={food_delivery} className="figure-img img-fluid rounded" alt="..." />
                                <figurecaption>Food Delivery App based on MERN Stack</figurecaption><br />
                                <Link style={{ marginTop: 10 }} className="border rounded p-1 bg-amber-600 decoration-4" to="https://github.com/rishavmishra2051/GetYourFood">Link of the Project</Link>

                                <img src={server_client} style={{ marginTop: 10 }} className="figure-img img-fluid rounded" alt="..." />
                                <figurecaption>Server-Client Messenger based on Java</figurecaption><br />
                                <Link style={{ marginTop: 10 }} className="border rounded p-1 bg-amber-600 decoration-4" to="https://github.com/rishavmishra2051/Server-_Client_Messenger">Link of the Project</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container overflow-hidden">
                        <div className="row gx-5">
                            <div className="col-8" style={{ margin: 60 }}>
                                <img src={note_taker} className="figure-img img-fluid rounded" alt="..." />
                                <figurecaption>Note-Taker App based on Javascript</figurecaption><br />
                                <Link style={{ marginTop: 10 }} className="border rounded p-1 bg-amber-600 decoration-4" to="https://rishavmishra2051.github.io/Note-Taker-Web-App/">Link of the Project</Link>

                                <img src={encrypt_decrypt} style={{ marginTop: 10 }} className="figure-img img-fluid rounded" alt="..." />
                                <figurecaption>Encryption-Decryption based on java</figurecaption><br />
                                <Link style={{ marginTop: 10 }} className="border rounded p-1 bg-amber-600 decoration-4" to="https://github.com/rishavmishra2051/Encryption_Decryption_of_file">Link of the Project</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
