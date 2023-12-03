import React from "react";
import image from '../Assets/img/user.jpg'
function Testimonial() {
    return (
        <div >
            <div className="relative bg-slate-900 p-2 left-12 w-32 rounded-full h-full ">
                <img src={image} className="rounded-full w-32 h-32 " alt="Rishav Mishra"></img>
            </div>
            <div>
                <h2 className="text-bold text-2xl text-center py-2 truncate pb-4">RISHAV MISHRA</h2>
            </div>
        </div>


    );
}
export default Testimonial;