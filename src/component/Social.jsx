
import { BsEnvelope,BsInstagram, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";
function Social() {
    return (
        <div className="flex gap-2 text-center justify-center content-center pb-4">
            {/* <h1 className="text-red-700" >Hello Iam Social wala comp....</h1> */}
            {/* <BsLinkedin/><BsGithub/><HomeIcon/> */}
            {/* <PortfolioIcon/> */}
            {/* <HomeIcon/> */}
            <Link className="bg-slate-900 p-2 rounded-full overflow-hidden relative" to="rishavmishrarm2001@gmail.com"><BsEnvelope /></Link>
            <Link className="bg-slate-900 p-2 rounded-full overflow-hidden relative" to="https://www.instagram.com/rishavmishra._/?igshid=NGExMmI2YTkyZg"><BsInstagram /></Link>
            <Link className="bg-slate-900 p-2 rounded-full overflow-hidden relative" to="https://www.facebook.com/rishav.mishra.31149"><BsFacebook /></Link>
            <Link className="bg-slate-900 p-2 rounded-full overflow-hidden relative" to="https://github.com/rishavmishra2051"><BsGithub /></Link>
            <Link className="bg-slate-900 p-2 rounded-full overflow-hidden relative" to="https://www.linkedin.com/in/rishav-mishra-672851227/"><BsLinkedin /></Link>
        </div>
        

    );
}
export default Social;