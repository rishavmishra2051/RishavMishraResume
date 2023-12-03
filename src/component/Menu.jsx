import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
    <div className="flex-column align-center">
    <ul>
      <li className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
          <span className="hover:stroke-cyan-600 transform hover:scale-125 transition-all"></span>
          </div>
          <Link  to="/"><HomeRoundedIcon/> Home</Link>         
      </li>
    </ul>
    <ul>
      <li className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
          <span className="hover:stroke-cyan-600 transform hover:scale-125 transition-all"></span>
          </div>
          <Link  to="/academicrecord"><CollectionsBookmarkOutlinedIcon/> Academic Record</Link>         
      </li>
    </ul>
    <ul>
      <li className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
          <span className="hover:stroke-cyan-600 transform hover:scale-125 transition-all"></span>
          </div>
          <Link  to="/project"><AccountTreeOutlinedIcon/> Project</Link>    
      </li>
    </ul>
    <ul>
      <li className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
          <span className="hover:stroke-cyan-600 transform hover:scale-125 transition-all"></span>
          </div>
          <Link  to="/resume"><FeedOutlinedIcon/> Resume</Link>    
      </li>
    </ul>
    <ul>
      <li className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
          <span className="hover:stroke-cyan-600 transform hover:scale-125 transition-all"></span>
          </div>
          <Link  to="/tools"><ConstructionOutlinedIcon/> Skills & Tools</Link>   
      </li>
      <ul>
    </ul>
    </ul>
    </div>
    </>
  )
}
